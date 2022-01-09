<template>
  <div>
    <TitleBox :meta="this.$store.state.meta"/>

    <div class="page-news-list container">

      <client-only>
        <newsListPreview v-if="getStateSkeleton()" :news="[1,2,3]"/>
      </client-only>

      <newsList v-if="!isEmpty(news)" :news="news.results"/>
      <div class="wrap-pagination">
        <Pagination 
          v-if="!isEmpty(news) && (news.total_number_items / news.quantity_page) > 1" 
          :countPage="news.quantity_page" 
          :countAll="news.total_number_items"
        />
      </div>

    </div>

  </div>
</template>

<script>
import global from "~/mixins/global"
import newsListPreview from '@/components/News/NewsListPreview.vue'
import newsList from '@/components/News/NewsList.vue'

export default {
  mixins: [global],
  components: {
    newsListPreview,
    newsList
  },
  data () {
    return {
      news: null,
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
    let lang = this.$store.state.lang

    /* this.news = await this.fetchData(process.env.fakeUrl + `news?lang=${lang}`) */
    this.news = await this.fetchData(process.env.baseUrl + `model/news/list${this.parseGetParams()}`)

    this.$store.commit('setShowSkeleton', false)
  },
  watch:{
    async $route(){
      this.$store.commit('setShowSkeleton', false)
      this.news = await this.fetchData(process.env.baseUrl + `model/news/list${this.parseGetParams()}`)
    }
  }
}

</script>

<style lang="scss" scoped>
.page-news-list{
  padding: 8em 15px 9.6em;
  font-size: 1rem;
}
.wrap-pagination{
  margin: 1.6em 0 0;
}
@media screen and (max-width: 1366px) {
  .page-news-list{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .page-news-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .page-news-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .page-news-list{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .page-news-list{
    font-size: .5rem;
    padding: 6.4em 15px 11.2em;
  }

}
</style>
