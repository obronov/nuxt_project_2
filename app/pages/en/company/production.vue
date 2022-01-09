<template>
  <div>
    <TitleBox :meta="this.$store.state.meta"/>    
    <div class="production container">  

      <ProductionCemanticContent 
        class="production__header"
        v-if="!isEmpty(production) && production.direction_text && production.link_name_direction" 
        :text="production.direction_text" 
        :info="{                
          title: production.link_name_direction,
          text: '',
          icon: 'arrow',
          url: getRootLink() + 'directions',
          targetBlank: false
        }"
      />

      <client-only>
        <ProductionDetailSkeleton class="production__content" v-if="getStateSkeleton()"/>
      </client-only>

      <ContentWysiwyg class="production__content" v-if="!isEmpty(production) && !getStateSkeleton()" :content="production.content"/>

      <ProductionCemanticContent 
        class="production__footer"
        v-if="!isEmpty(production) && production.document_text && production.link_name_document" 
        :text="production.document_text" 
        :info="{                
          title: production.link_name_document,
          text: '',
          icon: 'arrow',
          url: getRootLink() + 'company/documents',
          targetBlank: false,
          colorSchema: 'gray'
        }"
      />
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  data () {
    return {
      production: null
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

    /* this.production = await this.fetchData(process.env.fakeUrl + `production?lang=${lang}`) */
    this.production = await this.fetchData(process.env.baseUrl + `model/production-page?lang=${lang}`)

    this.$store.commit('setShowSkeleton', false)
  }
}

</script>

<style lang='scss' scoped>
.production{
  font-size: 1rem;
  padding: 8em 15px 9.6em;
  display: grid;
  grid-template-columns: 8fr 1fr 3fr;
  grid-gap: 8em 2em;
}
.production__header,
.production__footer{
  grid-column: 1/4;
}
.production__content{
  grid-column: 1;
}

@media screen and (max-width: 1200px){
  .production{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .production{
    font-size: .7rem;
    grid-template-columns: 9fr 3fr;
  }
  
  .production__header,
  .production__footer{
    grid-column: 1/3;
  }
}
@media screen and (max-width: 768px){
  .production{
    font-size: .6rem;
    grid-template-columns: 1fr;
  }
  .production__header,
  .production__footer{
    grid-column: 1/2;
  }
}
@media screen and (max-width: 576px){
  .production{
    font-size: .5rem;
    padding: 6.4em 15px 11.2em;
    grid-gap: 6.4em 0;
  }
}
</style>
