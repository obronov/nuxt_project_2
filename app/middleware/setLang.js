export default function ({ store, redirect, route }) {
  let lang = 'ru';  

  try {
    let arrRoute = route.path.split('/');

    arrRoute.shift()
    
    if(arrRoute[0] == 'en'){
      lang = 'en';
    }

    store.commit('setLang', lang); 
  } catch (error) {
    console.error(`Ошибка изменения параметра lang:  ${error}`)
  }
}
