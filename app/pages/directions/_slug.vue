<template>
  <div>
    <TitleBoxWithImage :meta="this.$store.state.meta" :showLink="false" :info="infoTitleBox" :title="title"/>
    
    <TabList :sections="sections" :getParam="'section'"/>
    <div class="page-direction-detail">
      <div class="page-direction-detail__inner container">
        <div class="page-direction-detail__sidebar">
          <DirectionsCatalogMenu :infoMenu="directionsDetail"/> 
        </div>
        <div class="page-direction-detail__content">
          <ContentWysiwyg v-if="!isEmpty(contentWysiwyg) && !isEmptyArr(contentWysiwyg.content)" :content="contentWysiwyg.content"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import global from "~/mixins/global";

export default {
  middleware:['fetchDetailPageDirections'],
  mixins: [global],
  data () {
    return {
      directionsDetail: null,
      sections: null,
      contentWysiwyg: null,
    }
  },
  head(){
    try {
      return{
        title: `${this.metaDynamicPage.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.metaDynamicPage.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.metaDynamicPage.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.metaDynamicPage.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.metaDynamicPage.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.metaDynamicPage.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }

  },
  validate({store}){
    return store.state.validationDetailPage
  },
  async fetch() {
    /* let lang = this.$store.state.lang */
    /* this.directionsDetail = await this.fetchData(process.env.fakeUrl + `directions_detail?lang=${lang}`) */
    this.directionsDetail = await this.$store.state.detailPage
    
    this.sections = await this.directionsDetail.sections

    this.$store.commit('setShowSkeleton', false)
  },
  computed:{
    metaDynamicPage(){
      let meta = {
        "add_to_breadcrumbs": true,
        "meta_title": "",
        "meta_description": "",
        "meta_keywords": "",
        "og_title": "",
        "og_description": "",
        "og_image": ""
      }

      try {
        if(!this.isEmpty(this.directionsDetail) && !this.isEmpty(this.directionsDetail.page_info)){
          meta = {
            "add_to_breadcrumbs": true,
            "meta_title": this.directionsDetail.page_info.meta_title,
            "meta_description": this.directionsDetail.page_info.meta_description,
            "meta_keywords": this.directionsDetail.page_info.meta_keywords,
            "og_title": this.directionsDetail.page_info.og_title,
            "og_description": this.directionsDetail.page_info.og_description,
            "og_image": this.directionsDetail.page_info.og_image
          }
        }

      } catch (error) {}

      return meta;
    },
    title(){
      let title = '';
      try {
        if(!this.isEmpty(this.directionsDetail)){
          title = this.directionsDetail.name
        }
      } catch (error) {
        console.error(error)
      }

      return title;

    },
    infoTitleBox(){
      let info = {
        "img_src": '',
        "img_alt": ''
      }
      try {
        if(!this.isEmpty(this.directionsDetail)){
          info.img_src = this.directionsDetail.page_info.img_src
          info.img_alt = this.directionsDetail.page_info.img_alt
        }
      } catch (error) {
        console.error(error)
      }
      return info
    }
  },
  watch: {    
    async $route() {
      let lang = this.$store.state.lang
      this.$store.commit('setShowSkeleton', false)

      this.contentWysiwyg = await this.fetchData(process.env.baseUrl + `model/catalog/directions/subpage/${this.$route.query.section}/?lang=${lang}`)
    },
    async directionsDetail(){
      if(!this.isEmpty(this.directionsDetail)){
        if(this.$route.query.section == undefined){          
          this.$router.push({query:{section: this.directionsDetail.sections[0].slug}})
        }
        let lang = this.$store.state.lang
        this.contentWysiwyg = await this.fetchData(process.env.baseUrl + `model/catalog/directions/subpage/${this.$route.query.section}/?lang=${lang}`)
      }
      
    }
  },
}

</script>

<style lang='scss' scoped>

</style>