export default{
  computed:{
    metaStaticPage(){
      let arrPage = (this.$route.name).split('-');
      let page = arrPage[arrPage.length - 1];
      let meta = {
          "page": "",
          "title": "",
          "add_to_breadcrumbs": true,
          "meta_title": "",
          "meta_description": "",
          "meta_keywords": "",
          "og_title": "",
          "og_description": "",
          "og_image": ""
        }

      if(!this.isEmptyArr(this.$store.state.meta)){
        for (let index = 0; index < this.$store.state.meta.length; index++) {
          const element = this.$store.state.meta[index];

          if(element.page == page){
            meta = element
            break
          }
          
        }
      }


      return meta;
    },
    changeLang(){
      try {
        let arrRoute = this.$route.path.split('/');

        arrRoute.shift()

        if(this.$store.state.lang == 'en'){
          if(arrRoute[0] == 'en' && arrRoute.length == 1 ){
            arrRoute[0] = '/';
          }else{
            arrRoute[0] = '';
          }
        }else{
          if(arrRoute[0] == 'index' && arrRoute.length == 1 ){
            arrRoute[0] = 'en';
          }else{
            arrRoute.unshift('en');
            arrRoute.unshift('');
          }
        }
        
        return arrRoute.join('/');
      } catch (error) {
        console.error(`Ошибка определения lang:  ${error}`)
      }

    }
  },
  methods:{
    declOfNum(n, text_forms) {  
      /* Выбираем вариант текста из массива слов с разными склонениями */
      try {
        n = Math.abs(n) % 100; 
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
      } catch (error) {
        return '';
      }
    },
    adaptTable(){
      /* Создаёт обёртку для таблиц, чтобы сделать адаптивные таблицы */
      try {
        let tables = document.querySelectorAll('table');
        let containerWidth = document.querySelector('.content-wysiwyg-text').clientWidth;
        let length = tables.length;
        let i;
        let wrapper;
        for (i = 0; i < length; i++) {
          wrapper = document.createElement('div');
          wrapper.setAttribute('class', 'wrap-table');
          tables[i].parentNode.insertBefore(wrapper, tables[i]);
          wrapper.appendChild(tables[i]);
        }
      } catch (error) { console.log('adaptTable ', error) }

    
    },
    parseGetParams(){
      /* Получаем все get параметры из url */
      let query = this.$route.query;
      let arrQuery = []

      for (const key in query) {
        if (Object.hasOwnProperty.call(query, key)) {
          let element = '';         
          element =  key + '=' + query[key];
          arrQuery.push(element)
        }
      }
      arrQuery.push('lang=' + this.$store.state.lang)
      return '?' + arrQuery.join('&');
    },
    convertPhone(phone){
      /* Оставляем в номере только цифры */
      let convertedPhone = '';

      try {
        convertedPhone = phone.replace(/\D/g, '');
      } catch (error) {
        console.error('Ошибка конвертации номера телефона')
      }

      return convertedPhone;
    },
    addProduct(item, url){
      /* Добавляем товар в форму заказа */
      let arrProducts= this.$store.state.products;
      let found = false;

      arrProducts.forEach(element => {
        if(element.uuid == item.uuid){
          found = true
        }
      });  

      if(!found){
        let newProduct=[{
          "uuid": item.uuid,
          "img_src_catalog": item.img_src_catalog,
          "name": item.name,
          "url": process.env.clientUrl + url
        }]

        const newArrProducts = newProduct.concat(arrProducts);

        this.$store.commit('setProducts', newArrProducts)

      }

    },
    viewSubCategories(item){
      if(this.showMenu != item){
        this.showMenu = item;
      }else{
        this.showMenu = null
      }
    },
    dateTimeFormat(item) {
      /* Создаём формат даты для тега time */
      let date = new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'});
      let arrDate = date.split(".");
      return arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    },
    cnangeColorTitle(percentValue, title){
      /* Оборачиваем слова в заголовке в тег <b> */
      let percent = (percentValue / 100) * 10;
      let arr = title.split(' ');
      let countAll = arr.length;
      let count = countAll/percent.toFixed();
      let arrTitle = [];

      arr.reverse().forEach((element, index) => {
        
        if(index < count){
          element = `<b>${element}</b>`;
        }
        arrTitle.push(element);
      });

      return arrTitle.reverse().join(' ');
    },
    getStateSkeleton () {
      /* Устанавливает состояние для скелетона */
      return this.$store.state.showSkeleton
    },
    getTitlePage(meta, title){
      /* Находим заголовок из объекта с meta данными */
      let titlePage = '';
      
      if(title){
        titlePage = title;
      }else{
        const fullPath = this.$route.name;
        const params = fullPath.split('-');

        meta.forEach(element => {
          if(element.page == params[params.length - 1]){
            titlePage = element.title;
          }
        });
      }

      return titlePage;
    },
    getUrlBack(){
      /* Получаем ссылку назад */
      const fullPath = this.$route.name;
      const params = fullPath.split('-');

      if(params.length > 1){
        params.pop()
        params.unshift('')
        return params.join('/')
      }else{
        return '/';
      }
    },
    getColor(key){
      /* Окрашиваем в цвет из палитры */
      return this.$store.state.colors[key];
    },
    translate(key){
      /* Переводим слова с помощью локального словаря */
      return this.$store.state.vocabulary[this.$store.state.lang][key];
    },
    isEmptyArr(arr){
      /* Проверяем массив на пустоту */
      try {
        if(arr != undefined && arr != null && arr.length > 0){
          return false;
        }else{
          return true;
        }
      } catch (error) {
        return true;
      }

    },
    getRootLink(){
      /* Получаем url корня сайта с учётом языковой версии */
      if(this.$store.state.lang == 'en'){
        return '/en/'
      }else{
        return '/'
      }
    },
    isEmpty(obj){
      /* Проверяем объект на пустоту */
      try {
        for (let key in obj) {
          return false;
        }
        return true;
      } catch (error) {
        return true;
      }
    },
    async fetchData(url){
      /* Запрос данных с сервера*/
      try {
        let result = null;
        let response = await fetch(url);

        if(response.ok){
          result = await response.json()
        }else{          
          console.error("Ошибка HTTP fetchData: " + response.status);
        }
        
        return result 
      } catch (error) {
        console.error(`Ошибка получения данных (fetchData) ${this.$route.fullPath}: `,  error)
      } 
    },
    showModalCall(){
      this.$store.commit('showModal', 'formCall');
    },
    showModalApp(){
      this.$store.commit('showModal', 'formApp');
    },
    showModalOrder(product){
      this.$store.commit('showModal', 'formOrder');
      this.$store.commit('setProductId', product.id);
      this.$store.commit('setProductName', product.name);
    },
    async onSubmit(event, params){
      /* отправка данных формы */
      let self = this;
      let data = new FormData(event.target);

      data.append('page_url', process.env.clientUrl + this.$route.path);
      data.append('mailing_type', params.mailing_type);
      data.append('lang', self.$store.state.lang);

      function resetError(form){
        form.controls.forEach(element => {
          element.error = '';
        });
      }
      function resetFormValue(form, eventTarget){
        eventTarget.reset();
        self.$store.commit('setProducts', []);

        form.controls.forEach(element => {
          if(element.name == 'file'){
            element.showBtnDelete = false;
            element.fileName = element.placeholder;
          }
        });
      }

      function printError(error, form){
        let controls = Object.keys(error);        

        form.controls.forEach(element => {
          let text = '';

          if(controls.includes(element.name)){

            error[element.name].forEach(element => {
              text += ' ' + element;
            });
            
            try {
              element.error = text;
            } catch (error) {
              console.error(`В объекте controls отсутствует поле error`)
            }

          }
        });
      }

/*       let response = await fetch(process.env.baseUrl + `mailing/send/`, {
        method: 'POST',
        body: data
      });
      
      if (!response.ok) {
        let responseJson = await response.json(); 

        resetError(self.form); 
        printError(responseJson, self.form);        
      }else{
        let responseJson = await response.json(); 

        resetError(self.form); 
        resetFormValue(self.form, event.target);

        self.$store.commit('setSuccessMsg', {'title': self.form.success_title, 'description': self.form.success_text, });
        self.$store.commit('showModal', 'successMsg');
        

        
      } */
    }
  }
}