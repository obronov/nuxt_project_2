export default async function ({ app, store, route }) {
  const url = process.env.baseUrl + `model/catalog/directions/${route.params.slug}?lang=${store.state.lang}`;
  let result = null;

  try {    
    let response = await fetch(url);
    
    if(response.ok){
      result = await response.json()

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
