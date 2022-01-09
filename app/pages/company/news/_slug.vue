<template>
  <div class="content">    
    <TitleBoxWTitle :meta="this.$store.state.meta" :showLinkBack="true" :title="title"/>
    <div class="container">     
      <NewsDetailSkeleton v-if="getStateSkeleton()"/>
      <NewsDetail v-if="!isEmpty(newsDetail)" :newsDetail="newsDetail"/>
    </div>
    </div>
</template>

<script>
import global from '~/mixins/global'
import NewsDetailSkeleton from '@/components/News/NewsDetailSkeleton'
import NewsDetail from '@/components/News/NewsDetail'
 
export default {
  middleware:['fetchDetailPageNews'],
  mixins: [global],
  components: { NewsDetailSkeleton, NewsDetail },
  data () {
    return {
      newsDetail: null
    }
  },
  validate({store}) {
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
    
    this.newsDetail = await this.$store.state.detailPage

    this.$store.commit('setShowSkeleton', false)
  },
  computed:{
    title(){
      let title = '';
      try {
        if(!this.isEmpty(this.newsDetail)){
          title = this.newsDetail.title
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
        if(!this.isEmpty(this.newsDetail)){
          meta = {
            "add_to_breadcrumbs": true,
            "meta_title": this.newsDetail.meta_title,
            "meta_description": this.newsDetail.meta_description,
            "meta_keywords": this.newsDetail.meta_keywords,
            "og_title": this.newsDetail.og_title,
            "og_description": this.newsDetail.og_description,
            "og_image": this.newsDetail.og_image
          }
        }

      } catch (error) {}

      return meta;
    }
  },
}
</script>
