export default function ({ app, store, redirect }) {
  const cookieRes = app.$cookies.get('infoCookie')

  if (cookieRes != undefined) {
    store.commit('setShowInfoCookie', cookieRes);
  }
}
