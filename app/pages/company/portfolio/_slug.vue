<template>
  <div>    
    <TitleBoxWTitle :meta="this.$store.state.meta" :showLinkBack="true" :title="title"/>    
    <div class="news-detail__wrapper container">     
      <div class="news-detail__content" itemscope itemtype="https://schema.org/Article">
      
        <client-only>
          <PortfolioDetailSkeleton v-if="getStateSkeleton()"/>
        </client-only>        

        <PortfolioDetailContent 
          v-if="!isEmpty(portfolio) && !getStateSkeleton()"
          :info="portfolio"
        />

      </div>

       <div class="news-detail__sidebar">

        <client-only>
          <FavoritesSkeleton v-if="getStateSkeleton()"/>
        </client-only>         

         <FavoritesContent 
          v-if="!isEmpty(portfolio) && !getStateSkeleton()" 
          :info="portfolio"
          :url="getRootLink() + 'company/portfolio'"
        />

       </div>
      
    </div>

    <FormFeedback v-if="!isEmpty(formFeedback)" :formInfo="formFeedback" :mailingType="'feedback'"/>
    

    </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  middleware:['fetchDetailPagePortfolio'],
  mixins: [global],
  data () {
    return {
      portfolio: null,
      formFeedback: null
    }
  },
  validate({store}) {
    return store.state.validationDetailPage
  },
  async fetch() {
    let lang = this.$store.state.lang

    /* this.portfolio = await this.fetchData(process.env.fakeUrl + `portfolio_detail?lang=${lang}`) */
    this.portfolio = await this.$store.state.detailPage

    /* this.formFeedback = await this.fetchData(process.env.fakeUrl + `form_feedback?lang=${lang}`) */
    this.formFeedback = await this.fetchData(process.env.baseUrl + `model/form-feedback?lang=${lang}`)

    this.$store.commit('setShowSkeleton', false)
  },
  computed:{
    title(){
      let title = '';
      try {
        if(!this.isEmpty(this.portfolio)){
          title = this.portfolio.title
        }
      } catch (error) {
        console.error(error)
      }

      return title;

    },
  }
}
</script>

<style lang='scss' scoped>
.news-detail__wrapper{
  font-size: 1rem;
  display: grid;
  grid-template-columns: 8fr 1fr 3fr;
  grid-gap: 2em;
  margin: 0 auto 9.6em;
}
.news-detail__content{
  grid-column: 1;
}
.news-detail__sidebar{
  grid-column: 3;
}
@media screen and (max-width: 1200px) {
  .news-detail__wrapper{
    font-size: .9rem;
    grid-template-columns: 9fr 3fr;
  }

  .news-detail__sidebar{
    grid-column: 2;
  }
}
@media screen and (max-width: 992px) {
  .news-detail__wrapper{
    font-size: .8rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  .news-detail__sidebar{
    grid-column: 1;
    padding: 32px 15px 0;
    margin: 0 -15px;
  }
}
@media screen and (max-width: 768px) {
  .news-detail__wrapper{
    font-size: .7rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}
@media screen and (max-width: 576px) {
  .news-detail__wrapper{
    font-size: .5rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin: 0 auto 8em;
  }
}
</style>
