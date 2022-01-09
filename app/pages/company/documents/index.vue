<template>
  <div>

    <TitleBox :meta="this.$store.state.meta"/>

    <TabList :sections="menu" :getParam="'category'"/> 
    <div class="page-documents-list">

        <DocumentsList :documents="documents"/>
        <div class="wrap-pagination container">
          <Pagination 
            v-if="!isEmpty(documents) && (documents.total_number_items / documents.quantity_page) > 1" 
            :countPage="documents.quantity_page" 
            :countAll="documents.total_number_items"
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
      menu: null,
      documents: null
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

    /* this.menu = await this.fetchData(process.env.fakeUrl + `document-menu?lang=${lang}`)  */
    this.menu = await this.fetchData(process.env.baseUrl + `model/category/list?lang=${lang}`) 

    /* this.documents = await this.fetchData(process.env.fakeUrl + `documents?lang=${lang}`) */
    this.documents = await this.fetchData(process.env.baseUrl + `model/documents/list${this.parseGetParams()}`)


    this.$store.commit('setShowSkeleton', false)
  },
  watch: {
    async $route() {
      let lang = this.$store.state.lang
      this.$store.commit('setShowSkeleton', false)

      this.documents = await this.fetchData(process.env.baseUrl + `model/documents/list${this.parseGetParams()}`)
    },
    menu(){
      if(!this.isEmptyArr(this.menu)){
        this.$router.push({query:{category: this.menu[0].slug}})
      }
      
    }
  }
}

</script>
<style lang="scss" scoped>
.page-documents-list{
  background: var(--super_bright_gray);
  border-bottom: 1px solid #d8d8d8;
  padding: 8em 15px 9.6em;
  font-size: 1rem;
}
.wrap-pagination{
  margin: 1.6em auto 0;
}
@media screen and (max-width: 1366px) {
  .page-documents-list{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .page-documents-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .page-documents-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .page-documents-list{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .page-documents-list{
    font-size: .5rem;
    padding: 3em 15px 11.2em;
  }
}
</style>
