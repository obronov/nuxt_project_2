
export const state = () => ({
  showInfoCookie: true,
  toggleMenu: false,
  fixedHeader: false,
  common: null,
  meta: null,
  lang: 'ru',
  city: 'beloreck',
  modalVideoId: null,
  nameModal: null,
  successMsg: {},
  products: [],
  catalogCategory: {},
  detailPage: {},
  validationDetailPage: false,
  vocabulary:{
    'ru':{
      "galleryCaption":{
        "photo":["фотография","фотографии","фотографий"],
        "video":["видео", "видео", "видео"]
      },
      "search__error": "Короткий запрос. Количество символов должно быть не менее 4",
      "result_title": "Результаты поиска по запросу:",
      "alt_map_branches": "карта филиалов",
      'name_company': "Стальпром",
      'developer': "Разработка и продвижение сайта",
      'back': 'Назад',
      'prev_news': 'Предыдущая новость',
      'next_news': 'Следующая новость',
      'prev_project': 'Предыдущий проект',
      'next_project': 'Следующий проект',
      'view_contacts': 'Посмотреть контакты',
      'title_call': 'Заказать звонок',
      'title_logo': 'Стальпром',
      'lang': 'English',
      'search': 'Поиск',
      'close': 'Закрыть'
    },
    'en':{
      "galleryCaption":{
        "photo":["photo","photos"],
        "video":["video","videos"]
      },
      "search__error": "Short request. The number of characters must be at least 4",
      "result_title": "Search results for the query:",
      "alt_map_branches": "branch map",
      'name_company': "Stalprom",
      'developer': "Website development and promotion",
      'back': 'Back',
      'prev_news': 'Previous news',
      'next_news': 'Next news',
      'prev_project': 'Previous project',
      'next_project': 'Next project',
      'view_contacts': 'View contacts',
      'title_call': 'Request a call',
      'title_logo': 'Stalprom',      
      'lang': 'Русский',
      'search': 'Search',
      'close': 'Close'
    },
  },
  colors:{
    blue: '#0057B8',
    dark_blue: '#00448F',
    white: '#FFF',
    dark_gray: '#535351',
    gray: '#A1A1A1',
    bright_gray: '#E1E1E1',
    super_bright_gray: '#F0F0F0'
  },
  showSkeleton: false
});


export const mutations = {
  setShowInfoCookie(state, value){
    state.showInfoCookie = value;
  },
  setProducts(state, list){
    state.products = list;
  },
  setCity(state, value){
    state.city = value;
  },
  setToggleMenu(state, value){
    state.toggleMenu = value;
  },
  setFixedHeader(state, value){
    state.fixedHeader = value;
  },
  setShowSkeleton(state, value){
    state.showSkeleton = value;
  },
  setDetailPage(state, item){
    state.detailPage = item;
  },
  setCatalogCategory(state, item){
    state.catalogCategory = item;
  },
  setValidationDetailPage(state, item){
    state.validationDetailPage = item;
  },
  showModalVideo(state, item) {
    state.modalVideoId = item.videoId;
    state.nameModal = item.nameModal;
  },
  showModal(state, nameModal) {
    state.nameModal = nameModal;
  },
  closeModal(state) {
    state.nameModal = '';
  },
  setCommon(state, common){
    state.common = common;
  },
  setMeta(state, meta){
    if(state.meta == null){
      state.meta = meta;
    }else{
      
      let foundPage = false;
      for (let index = 0; index < state.meta.length; index++) {
        const element = state.meta[index];

        if(element.page == meta[0].page){
          element.page = meta[0].page
          element.title = meta[0].title
          element.add_to_breadcrumbs = meta[0].add_to_breadcrumbs
          foundPage = true
          break
        }
      }
      
      if(!foundPage){
        state.meta = state.meta.concat(meta)
      }
    }
  },
  setSuccessMsg(state, text){
    state.successMsg = text;
  },
  setLang(state, lang){
    state.lang = lang;
  }
}

export const getters = {
  countProducts: (state) => {
    return state.products.length
  }
}
