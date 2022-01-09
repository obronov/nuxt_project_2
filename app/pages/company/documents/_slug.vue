<template>
  <div class="content">
    <TitleBoxWTitle :meta="this.$store.state.meta" :showLinkBack="true" :title="title"/>    

    <div class="container">
      <client-only>
        <DocumentsDetailSkeleton v-if="getStateSkeleton()"/>
      </client-only>

      <DocumentsDetail v-if="!isEmpty(documentDetail) && !getStateSkeleton()" :documentDetail="documentDetail"/>

    </div>

  </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  middleware:['fetchDetailPageDocuments'],
  mixins: [global],
  data () {
    return {
      documentDetail: null
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
  validate({store}) {
    return store.state.validationDetailPage
  },
  async fetch() {
    let lang = this.$store.state.lang

    /* this.documentDetail = await this.fetchData(process.env.fakeUrl + `documents_detail?lang=${lang}`) */
    this.documentDetail = await this.$store.state.detailPage

    this.$store.commit('setShowSkeleton', false)
  },
  computed:{
    title(){
      let title = '';
      try {
        if(!this.isEmpty(this.documentDetail)){
          title = this.documentDetail.title
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
        if(!this.isEmpty(this.documentDetail)){
          meta = {
            "add_to_breadcrumbs": true,
            "meta_title": this.documentDetail.meta_title,
            "meta_description": this.documentDetail.meta_description,
            "meta_keywords": this.documentDetail.meta_keywords,
            "og_title": this.documentDetail.og_title,
            "og_description": this.documentDetail.og_description,
            "og_image": this.documentDetail.og_image
          }
        }

      } catch (error) {}

      return meta;
    }
  },
}
</script>
