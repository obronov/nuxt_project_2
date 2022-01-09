export default async function ({ app, store, route }) {

  let queryParam = route.query
  let query = ''
  if(Object.keys(queryParam).length > 0){
    for (const key in queryParam) {
      if (Object.hasOwnProperty.call(queryParam, key)) {
        const element = queryParam[key];
        query += key + '=' + element + '&'
      }
    } 
    query += `lang=${store.state.lang}`;
  }else{
    query = `lang=${store.state.lang}`;
  }

  function addMetaToStore(meta, store){
    store.commit('setMeta', meta)
  }
  let arrRoute = route.path.split('/');

  const urlCategory = process.env.baseUrl + `model/catalog/${route.params.categories}?${query}`;

  try {    
    let responseCategory = await fetch(urlCategory);
    if(responseCategory.ok){
      let resultCategory = await responseCategory.json()
      addMetaToStore([{
        "page": arrRoute[arrRoute.length - 2],
        "title": resultCategory.name,
        "add_to_breadcrumbs": true,
      }], store)

      const url = process.env.baseUrl + `model/catalog/${route.params.subcategories}?${query}`;
      let resultCategories = {};
      let resultProducts = {};
    
      try {    
        let responseCategories = await fetch(url);
    
        if(responseCategories.ok){
          
          const urlProducts = process.env.baseUrl + `model/product/?${query}&category=${route.params.subcategories}`;
          let responseProducts = await fetch(urlProducts);
          
          if(responseProducts.ok){
            let resultProducts = await responseProducts.json()
    
            /* Сохраняем в store подкатегорию */  
            store.commit('setDetailPage', resultProducts)
            store.commit('setValidationDetailPage', true)
          }else{
            store.commit('setValidationDetailPage', false)
          }

          /* Сохраняем в store категорию */  
          let resultCategories = await responseCategories.json()
    
          store.commit('setCatalogCategory', resultCategories)
    
          addMetaToStore([{
            "page": arrRoute[arrRoute.length - 1],
            "title": resultCategories.name,
            "add_to_breadcrumbs": true,
          }], store)

        }else{
          store.commit('setValidationDetailPage', false)
        }
        
      } catch (error) {
        store.commit('setValidationDetailPage', false)
        console.error(`Подкатегория каталога отсутствует ${url}:`,  error)
      } 


    }else{
      store.commit('setValidationDetailPage', false)
    }


  } catch (error) {
    store.commit('setValidationDetailPage', false)
    console.error(`Категория каталога отсутствует ${url}:`,  error)
  } 



}
