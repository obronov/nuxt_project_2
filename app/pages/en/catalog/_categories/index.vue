<template>
<div>
  <TitleBoxWTitle :meta="this.$store.state.meta" :showLinkBack="false"/>
  <div class="container">
    <h1 class="page-catalog__title" 
      v-if="!isEmpty(categories) && categories.name" 
      v-html="cnangeColorTitle(15, categories.name)"
    ></h1>
  </div>
  <div class="page-catalog container">
    <div class="page-catalog__sidebar">
      <CatalogSectionsMini :catalogSections="catalogSections"/>
    </div>
    <div class="page-catalog__content">
      <CatalogCategoryContent 
        v-if="!isEmpty(categories) && !isEmptyArr(categories.items)" 
        :categories="categories.items"
      />

      <div class="page-catalog__content-text" 
        v-if="!isEmpty(categories) && categories.content" 
        v-html="categories.content">
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import global from "~/mixins/global"
export default {
  middleware:['fetchDetailPageCatalogCategory'],
  mixins: [global],
  data () {
    return {
      catalogSections: null,
      categories: null
    }
  },
  validate({store}){
    return store.state.validationDetailPage
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
  async fetch() {

    let lang = this.$store.state.lang

    /* this.catalogSections = await this.fetchData(process.env.fakeUrl + `catalog?lang=${lang}`) */
    this.catalogSections = await this.fetchData(process.env.baseUrl + `model/catalog?lang=${lang}`)

    /* this.categories = await this.fetchData(process.env.fakeUrl + `category?lang=${lang}`) */
    this.categories = await this.$store.state.detailPage

   

    this.$store.commit('setShowSkeleton', false)
  },
  computed:{
    title(){
      let title = '';
      try {
        if(!this.isEmpty(this.categories)){
          title = this.categories.name
        }
      } catch (error) {
        console.error(error)
      }

      return title;

    },
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
        if(!this.isEmpty(this.categories)){
          meta = {
            "add_to_breadcrumbs": true,
            "meta_title": this.categories.meta_title,
            "meta_description": this.categories.meta_description,
            "meta_keywords": this.categories.meta_keywords,
            "og_title": this.categories.og_title,
            "og_description": this.categories.og_description,
            "og_image": this.categories.og_image
          }
        }

      } catch (error) {}

      return meta;
    }
  },
}

</script>

<style lang='scss' scoped>

</style>