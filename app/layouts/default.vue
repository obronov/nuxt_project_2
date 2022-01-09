<template>
  <div class="app">
    <Header v-if="!isEmpty(common)" :class="{mainPage: $route.name == 'index' || $route.name == 'en'}"/>
    <nuxt/>
    <Footer v-if="!isEmpty(common)" :common="common"/>
    <transition name="slide-header">
      <Header v-if="!isEmpty(common) && $store.state.fixedHeader" class='fixed'/>
    </transition>
    <transition name="show-modal">
      <ModalVideo v-if="$store.state.nameModal == 'modalVideo'" :videoId="$store.state.modalVideoId" :maxWidth="847" />
    </transition>
    
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'city' && !isEmpty(cities)" :maxWidth="629">
        <CitiesList @onChangeCity="setCity($event)" :cities="cities"/>
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'formConsultation'" :maxWidth="465">
        <FormConsultation
          v-if="!isEmpty(formConsultation) && !isEmptyArr(formConsultation.controls)" 
          :mailingType="'consult'"
          :formConsultation="formConsultation"
        />
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'formBuy'" :maxWidth="629">
        <FormBuy
          v-if="!isEmpty(formBuy) && !isEmptyArr(formBuy.controls)" 
          :mailingType="'request'"
          :formBuy="formBuy"
        />
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'successMsg'" :maxWidth="637">
        <FormSuccess/>
      </Modal>
    </transition>
    <transition name="fade">      
      <InfoCookie v-if="!isEmpty(infoCookie) && $store.state.showInfoCookie" :infoCookie="infoCookie" />
    </transition>
    <div class="widget" v-if="!isEmpty(widget) && widget.chat_widget" v-html="widget.chat_widget"></div>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  middleware: ['setLang', 'setCity', 'setShowInfoCookie'],
  mixins: [global],
  name: "default",
  components:{ },
  data() {
    return {
      widget: null,
      infoCookie: {},
      common: {},
      meta: {},
      cities: null,
      formConsultation: null,
      formSubscribe: null,
      formBuy: null
    }
  },
  async fetch() {
    let lang = this.$store.state.lang;
    let city = this.$store.state.city;

    if(this.$store.state.common == null){
      /* this.common = await this.fetchData(process.env.fakeUrl + `common?lang=${lang}&city=${city}`); */
      this.common = await this.fetchData(process.env.baseUrl + `combined/common?lang=${lang}&code=${city}`);

      this.$store.commit('setCommon', this.common);
    }else{
      this.common = this.$store.state.common;
    }

    /* this.meta = await this.fetchData(process.env.fakeUrl + `meta_page?lang=${lang}`) */
    this.meta = await this.fetchData(process.env.baseUrl + `model/meta/list?lang=${lang}`)
    this.$store.commit('setMeta', this.meta);
    

    /* this.cities = await this.fetchData(process.env.fakeUrl + `city_selection?lang=${lang}`); */
    this.cities = await this.fetchData(process.env.baseUrl + `model/city-modal?lang=${lang}`);

    /* this.formConsultation = await this.fetchData(process.env.fakeUrl + `form_consultation?lang=${lang}`); */
    this.formConsultation = await this.fetchData(process.env.baseUrl + `model/form-consultation?lang=${lang}`);

    /* this.formBuy = await this.fetchData(process.env.fakeUrl + `form_buy?lang=${lang}`); */
    this.formBuy = await this.fetchData(process.env.baseUrl + `model/form-buy?lang=${lang}`);

    /* this.infoCookie = await this.fetchData(process.env.fakeUrl + `info_cookie?lang=${lang}`); */
    this.infoCookie = await this.fetchData(process.env.baseUrl + `model/cookie-modal?lang=${lang}`);  

    /* this.widget = await this.fetchData(process.env.fakeUrl + `widget?lang=${lang}`); */
    this.widget = await this.fetchData(process.env.baseUrl + `model/chat-widget?lang=${lang}`);  
  },
  methods:{
    setCity(codeCity){
      console.log('codeCity', codeCity)
      this.$cookies.set('codeCity', codeCity, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })

      window.location = this.$route.path;
    }
  },
  computed:{
    classMain(){
      return ['/', '/en'].includes(this.$route.path);
    }
  },
  watch:{
    $route(){
      this.$store.commit('setShowSkeleton', true);
      this.$store.commit('setToggleMenu', false)
      this.$store.commit('showModal', null)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
