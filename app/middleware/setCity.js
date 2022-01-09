export default function ({ store, app  }) {
  let city = app.$cookies.get('codeCity');  

  try {
    if(!city){
      city = ''
    }

    store.commit('setCity', city);
  } catch (error) {
    console.error(`Ошибка изменения параметра city:  ${error}`)
  }
}
