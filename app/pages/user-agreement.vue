<template>
  <div >
    <TitleBox :meta="this.$store.state.meta"/>
    <div class="page-text-content container" v-if="!isEmpty(content)" v-html="content.text">
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
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
  data () {
    return {
      content: null,
    }
  },
  async fetch() {
    let lang = this.$store.state.lang

    this.content = await this.fetchData(process.env.baseUrl + `model/user-agreement?lang=${lang}`)

    this.$store.commit('setShowSkeleton', false)
  }
}

</script>

<style lang='scss' scoped>

</style>