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
  
  const url = process.env.baseUrl + `model/catalog/${route.params.categories}?${query}`;
  let result = null;

  try {    
    let response = await fetch(url);
    
    if(response.ok){
      result = await response.json()

      addMetaToStore([{
        "page": arrRoute[arrRoute.length - 1],
        "title": result.name,
        "add_to_breadcrumbs": true,
      }], store)

      store.commit('setDetailPage', result)
      store.commit('setValidationDetailPage', true)
    }else{          
      store.commit('setValidationDetailPage', false)
    }
    
  } catch (error) {
    store.commit('setValidationDetailPage', false)
    console.error(`validateDetailPage ${url}:`,  error)
  } 

}
