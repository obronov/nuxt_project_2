<template>
  <div>
    <TitleBox :meta="this.$store.state.meta"/>
    <div class="page-portfolio-list container">
      <Portfolio :portfolioList="portfolioList"/>

      <div class="wrap-pagination">
        <Pagination 
          v-if="!isEmpty(portfolio)  && (portfolio.total_number_items / portfolio.quantity_page) > 1" 
          :countPage="portfolio.quantity_page" 
          :countAll="portfolio.total_number_items"
        />
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  data() {
    return {
      portfolio: null,
      portfolioList: []
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

    /* this.portfolio = await this.fetchData(process.env.fakeUrl + `portfolio?lang=${lang}`); */
    this.portfolio = await this.fetchData(process.env.baseUrl + `model/case/list${this.parseGetParams()}`)
    this.portfolioList.push(this.portfolio.results);

    this.$store.commit('setShowSkeleton', false)
  },
  watch:{
    async $route(){
      this.$store.commit('setShowSkeleton', false)
      this.portfolio = await this.fetchData(process.env.baseUrl + `model/case/list${this.parseGetParams()}`)
      this.portfolioList.push(this.portfolio.results);
    }
  }
}

</script>

<style lang='scss' scoped>
.page-portfolio-list{
  font-size: 1rem;
  padding: 8em 15px 9.6em;
}
.wrap-pagination{
  margin: 5.6em 0 0;
}
@media screen and (max-width: 1366px) {
  .page-portfolio-list{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .page-portfolio-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .page-portfolio-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .page-portfolio-list{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .page-portfolio-list{
    font-size: .5rem;
    padding: 6.4em 15px 11.2em;
  }

}
</style>