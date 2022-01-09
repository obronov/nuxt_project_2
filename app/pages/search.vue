<template>
<div>
  <TitleBox :meta="this.$store.state.meta"/>
  <div class="page-search container">
    <div class="page-search__inner">
      <FormSearch class="page-search__form-search"/>
      <div class="result-title" v-if="queryText">
          {{translate('result_title')}}
          <span class="result-title__query">
            {{queryText}}
          </span>
      </div>
      <p class="result-text" v-if="showResultText">{{resultText.text}}</p>
      <div class="result-search">
        <CatalogProductList v-if="!isEmpty(products) && !isEmptyArr(products.results)" :products="products.results"/>
      </div>
      <div class="wrap-pagination">
        <Pagination 
          v-if="!isEmpty(products) && (products.total_number_items / products.quantity_page) > 1" 
          :countPage="products.quantity_page" 
          :countAll="products.total_number_items"
        />
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      products: null,
      resultText: null,
      showResultText: false,
      queryText: ''
    }
  },
  head(){
    try {
      return{
        title: `${this.metaStaticPage.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.metaStaticPage.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.metaStaticPage.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.metaStaticPage.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.metaStaticPage.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.metaStaticPage.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
      console.log(`Ошибка в мета данных на странице ${this.$route.path}`)
    }
  },
  async fetch() {
    let lang = this.$store.state.lang;

    this.products = await this.fetchData(process.env.baseUrl + `model/search${this.parseGetParams()}`)

    /* this.resultText = await this.fetchData(process.env.fakeUrl + `search_settings`) */
    this.resultText = await this.fetchData(process.env.baseUrl + `model/search-settings?lang=${lang}`)

    this.$store.commit('setShowSkeleton', false)
  },
  watch:{
    async $route(){
      this.$store.commit('setShowSkeleton', false)
      this.products = await this.fetchData(process.env.baseUrl + `model/search${this.parseGetParams()}`)

    },
    products(){
      this.showResultText = false
      try {
        if(this.$route.query.search && !this.isEmpty(this.products) && this.isEmptyArr(this.products.results) && !this.isEmpty(this.resultText) && this.resultText.text){
          this.showResultText = true
        }

        this.queryText = ''
        try {
          if(this.$route.query.search != undefined){
            this.queryText = this.$route.query.search
          }
        } catch (error) {
          console.log('queryText ', error)
        }
        
      } catch (error) {
        console.log('showResultText ', error)
      }
    }
  }


}

</script>

<style lang='scss' scoped>
.wrap-pagination{
  margin: 5.6em 0 0;
}
.page-search{
  padding: 8em 15px 9.6em;
  font-size: 1rem;
}
.page-search__inner{
  max-width: 795px;
}
.result-search{
  margin: 8em 0 0;
}
.page-search__form-search{
  font-size: 1rem;
}
.result-title{
  font-weight: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.33;
  color: var(--blue);
  margin: 1em 0;
}
.result-title__query{
  color: var(--dark_gray);
}
@media screen and (max-width: 1366px) {
  .page-search{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .page-search{
    font-size: .8rem;
  }

}
@media screen and (max-width: 992px) {
  .page-search{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .page-search{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .page-search{
    font-size: .5rem;
    padding: 4.8em 15px 11.2em;
  }
  .result-search{
    margin: 6.4em 0 0;
  }
}
</style>