<template>
  <div class="content">
    <TitleBox :meta="this.$store.state.meta"/>
    
      <TabList :sections="sections" :getParam="'album'"/>
    <div class="page-gallery-list">
      <Gallery :gallery="gallery" :sections="sections"/>

      <div class="wrap-pagination container">
        <Pagination 
          v-if="!isEmpty(gallery) && (gallery.total_number_items / gallery.quantity_page) > 1" 
          :countPage="gallery.quantity_page" 
          :countAll="gallery.total_number_items"
        />
      </div>
    </div>

  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  data () {
    return {
      sections:  null,
      gallery:  null
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

    /* this.sections = await this.fetchData(process.env.fakeUrl + `gallery?lang=${lang}`) */
    this.sections = await this.fetchData(process.env.baseUrl + `model/album/list?lang=${lang}`)

    /* this.gallery = await this.fetchData(process.env.fakeUrl + `gallery_detail?lang=${lang}`) */
    this.gallery = await this.fetchData(process.env.baseUrl + `model/album-items/list${this.parseGetParams()}`)

  },
  watch: {
    async $route() {
      let lang = this.$store.state.lang
      this.$store.commit('setShowSkeleton', false)      

      this.gallery = await this.fetchData(process.env.baseUrl + `model/album-items/list${this.parseGetParams()}`)
     /*  this.gallery = await this.fetchData(process.env.baseUrl + `model/album-items/list?lang=${lang}&album=${this.$route.query.album}`) */
    },
    sections(){
      if(!this.isEmptyArr(this.sections)){
        this.$router.push({query: {album: this.sections[0].slug, page: 1 } })
      }
    }
  }
}

</script>
<style lang="scss" scoped>
  .page-gallery-list{
    background: var(--super_bright_gray);
    border-bottom: 1px solid #d8d8d8;
    padding: 8em 0 9.6em;
  }

.wrap-pagination{
  margin: 1.625em auto 0;
}
@media screen and (max-width: 1366px) {
  .page-gallery-list{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .page-gallery-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .page-gallery-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .page-gallery-list{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .page-gallery-list{
    font-size: .5rem;
    padding: 6.4em 15px 11.2em;
  }

}
</style>
