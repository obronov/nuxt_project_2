export default async function ({ app, store, route }) {

  const url = process.env.baseUrl + `model/catalog/${route.params.categories}?lang=${store.state.lang}`;
  let resultCategories = {};
  let resultSubCategories = {};
  let resultProduct = {};

  try {    
    let responseCategories = await fetch(url);
    
    if(responseCategories.ok){
      const urlSubCategories = process.env.baseUrl + `model/product/?category=${route.params.subcategories}&lang=${store.state.lang}`;
      let responseSubCategories = await fetch(urlSubCategories);

      if(responseSubCategories.ok){
        let resultSubCategories = await responseSubCategories.json()
        let uuid = ''
        if(resultSubCategories.results != undefined && resultSubCategories.results.length > 0){                
          
          resultSubCategories.results.forEach(element => {
            if(element.slug == route.params.slug){
              uuid = element.uuid
            }
          });
        }

        const urlProduct = process.env.baseUrl + `model/product/${uuid}?lang=${store.state.lang}`;
        let responseProduct = await fetch(urlProduct);

        if(responseProduct.ok){
          let resultProduct = await responseProduct.json()

          store.commit('setDetailPage', resultProduct)
          store.commit('setValidationDetailPage', true)
        }
      }else{
        store.commit('setValidationDetailPage', false)
      }

    }else{
      store.commit('setValidationDetailPage', false)
    }
    
  } catch (error) {
    store.commit('setValidationDetailPage', false)
    console.error(`validateDetailPage ${url}:`,  error)
  } 

}
