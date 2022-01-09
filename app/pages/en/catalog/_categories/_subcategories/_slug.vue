<template>
  <div  itemscope itemtype="https://schema.org/Product">
    <TitleBoxWTitle :meta="this.$store.state.meta" :showLinkBack="false" :title="title"/>

    <div class="container">
      <h1 class="page-catalog__title" 
        itemprop="name"
        v-if="!isEmpty(productDetail) && productDetail.name" 
        v-html="productDetail.name"
      ></h1>
    </div>

    <CatalogShortInfo v-if="!isEmpty(productDetail)" :info="productDetail"/>

    <CatalogDetailInfo v-if="!isEmpty(productDetail)" :info="productDetail"/>

    <CatalogUsefulLinks :info="productDetail"/> 

    <CatalogSimilarProducts :info="productDetail"/>

  </div>
</template>

<script>
  import global from "~/mixins/global"
  export default {
    middleware:['fetchDetailPageCatalogProductDetail'],
    mixins: [global],
    data () {
      return {
        productDetail: null,

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

      let lang = this.$store.state.lang

      /* this.productDetail = await this.fetchData(process.env.fakeUrl + `product_detail?lang=${lang}`) */
      this.productDetail = await this.$store.state.detailPage

      this.$store.commit('setShowSkeleton', false)
    },
    watch:{
      $route(){
        this.$store.commit('setShowSkeleton', false)
      }
    },
    computed:{
    title(){
      let title = '';
      try {
        if(!this.isEmpty(this.productDetail)){
          title = this.productDetail.name
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
        if(!this.isEmpty(this.productDetail)){
          meta = {
            "add_to_breadcrumbs": true,
            "meta_title": this.productDetail.meta_title,
            "meta_description": this.productDetail.meta_description,
            "meta_keywords": this.productDetail.meta_keywords,
            "og_title": this.productDetail.og_title,
            "og_description": this.productDetail.og_description,
            "og_image": this.productDetail.og_image
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