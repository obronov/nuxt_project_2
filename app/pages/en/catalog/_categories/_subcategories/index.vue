<template>
<div>
  <TitleBoxWTitle :meta="this.$store.state.meta" :showLinkBack="false"/>

  <div class="container">
    <h1 class="page-catalog__title" 
      v-html="cnangeColorTitle(15, title)"
    ></h1>
  </div>

  <div class="page-catalog__filter-links container">
    <CatalogFilterLinks
      v-if="!isEmpty(categories) && !isEmptyArr(categories.generated_links)"
      :links="categories.generated_links"
    />
  </div>

  <div class="page-catalog container">

    <div class="page-catalog__sidebar">
      <CatalogFilter v-if="!isEmpty(categories) && !isEmptyArr(categories.filters)" :filter="categories"/>

      <CatalogSectionsMini class="page-catalog__catalog-menu" :catalogSections="catalogSections"/>
    </div>

    <div class="page-catalog__content">
      
      <CatalogProductList v-if="!isEmpty(products) && !isEmptyArr(products.results)" :products="products.results"/>

      <div class="wrap-pagination">
        <Pagination 
          v-if="!isEmpty(products) && (products.total_number_items / products.quantity_page) > 1" 
          :countPage="products.quantity_page" 
          :countAll="products.total_number_items"
        />
      </div>

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
  middleware:['fetchDetailPageCatalogSubcategories'],
  mixins: [global],
  data () {
    return {
      catalogSections: null,
      categories: null,
      products: null
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
    this.categories = await this.$store.state.catalogCategory

    /* this.products = await this.fetchData(process.env.fakeUrl + `products?lang=${lang}`) */
    this.products = await this.$store.state.detailPage

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
    },
    title(){
      let title = ''


      try {
        if(!this.isEmpty(this.catalogSections) && !this.isEmptyArr(this.catalogSections.categories)){
          let slug = Object.values(this.$route.params)
          slug = slug[slug.length - 1]

          function getTitle(list){
            for (let index = 0; index < list.length; index++) {
              const element = list[index];

              if(element.slug == slug){
                title = element.name
                
              }

              if(element.submenu != undefined && element.submenu.length > 0){                
                getTitle(element.submenu)
              }
              

            }
          }

          getTitle(this.catalogSections.categories)
        }
      } catch (error) {
        
      }
      return title;
    }
  },
  watch:{
    async $route(){
      this.$store.commit('setShowSkeleton', false)
      
      this.products = await this.$store.state.detailPage
    }
  }
}

</script>

<style lang='scss' scoped>
.wrap-pagination{
  margin: 5.6em 0 0;
}
</style>