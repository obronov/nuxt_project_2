<template>
  <div>
    <Error404 v-if="!isEmpty(errorContent)" :error="errorContent"/>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  middleware: ['setLang', 'setCity', 'setShowInfoCookie'],
  mixins: [global],
  data(){
    return{
      errorContent: {}
    }
  },
  head(){
    /* try {
      return{
        title: `${this.meta.main.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.main.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.main.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.main.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.main.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.main.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    } */

  },
  async fetch() {
    let lang = this.$store.state.lang;

    /* this.errorContent = await this.fetchData(process.env.fakeUrl + `errore_404?lang=${lang}`); */
    this.errorContent = await this.fetchData(process.env.baseUrl + `model/page-404?lang=${lang}`);
  }
}
</script>

<style lang="scss" scoped>

</style>