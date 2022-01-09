<template>
  <div class="content">
    <TitleBox :meta="this.$store.state.meta"/>

    <div class="page-awards-list container">

      <client-only>
        <AwardsListSkeleton v-if="getStateSkeleton()" :items="[1,2,3,4,5,6]"/>
      </client-only>

      <AwardsList v-if="!isEmpty(awards)" :items="awards.results" />

      <div class="wrap-pagination container">
        <Pagination 
          v-if="!isEmpty(awards) && (awards.total_number_items / awards.quantity_page) > 1"
          :countPage="awards.quantity_page" 
          :countAll="awards.total_number_items"
        />
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
import AwardsList from '@/components/Awards/AwardsList'
import AwardsListSkeleton from '@/components/Awards/AwardsListSkeleton'

export default {
  mixins: [global],
  components: {
    AwardsList,
    AwardsListSkeleton
  },
  data () {
    return {
      awards: null
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

    /* this.awards = await this.fetchData(process.env.fakeUrl + `quality_mark?lang=${this.$store.state.lang}`) */
    this.awards = await this.fetchData(process.env.baseUrl + `model/reward/list${this.parseGetParams()}`)
    
    this.$store.commit('setShowSkeleton', false)
  },
  watch:{
    async $route(){
      this.$store.commit('setShowSkeleton', false)
      this.awards = await this.fetchData(process.env.baseUrl + `model/reward/list${this.parseGetParams()}`)
    }
  }
}

</script>
<style lang="scss" scoped>
.page-awards-list{
  padding: 8em 15px 9.6em;
  font-size: 1rem;
}
.wrap-pagination{
  margin: 1.6em 0 0;
}
@media screen and (max-width: 1366px) {
  .page-awards-list{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .page-awards-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .page-awards-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .page-awards-list{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .page-awards-list{
    font-size: .5rem;
    padding: 6.4em 15px 11.2em;
  }

}
</style>