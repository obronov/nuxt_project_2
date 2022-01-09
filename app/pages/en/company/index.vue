<template>
  <div class="about">
    <TitleBoxWithImage :meta="this.$store.state.meta" :showLink="true" :info="company"/>

    <TabList :sections="sections"/>

    <CompanyMission  v-if="!isEmpty(company) && company.description" :info="company"/>

    <div class="container" v-if="!isEmpty(company)">
      <ContentWysiwyg class="about-content" v-if="!isEmptyArr(company.content)" :content="company.content"/>
    </div>

    <Branches 
      v-if="contacts" 
      :title="contacts.titles.affiliates_company_title"
      :linkName="contacts.titles.affiliates_company_link_name"
      :description="contacts.titles.affiliates_company_description"
      :contacts="contacts" 
    />

    <div class="container" v-if="!isEmpty(company)">
      <div class="about-content" v-html="company.text_under_map"></div>
    </div>


  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  data () {
    return {
      company: null,
      pageList: [
        'production',
        'history',
        'portfolio',
        'quality_mark',
        'vacancy',
        'documents',
        'gallery',
        'news',
      ],
      contacts: null,
      contactsCategories: []
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

    /* this.company = await this.fetchData(process.env.fakeUrl + `company?lang=${lang}`) */
    this.company = await this.fetchData(process.env.baseUrl + `combined/company?lang=${lang}`)

    /* this.contacts = await this.fetchData(process.env.fakeUrl + `contacts?lang=${lang}`); */
    this.contacts = await this.fetchData(process.env.baseUrl + `combined/contact?lang=${lang}`);

    this.$store.commit('setShowSkeleton', false)
  },
  computed:{
    sections(){
      let sections = [];

      try {
      this.pageList.forEach(element => {
        let title= '';

        this.$store.state.meta.forEach(meta => {
          if(meta.page == element){
            title = meta.title
          }
        });

        sections.push(
          {
            title: title,
            slug: element
          }
        )
      });
      } catch (error) {}


        return sections
    }
  }
}

</script>

<style lang='scss' scoped>
.about{
  font-size: 1rem;
}
.about-content{
  padding: 8em 0;
  max-width: 793px;
}
@media screen and (max-width: 1200px){
  .about{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .about{
    font-size: .7rem;
  }

}
@media screen and (max-width: 768px){
  .about{
    font-size: .6rem;
  }

}
@media screen and (max-width: 576px){
  .about{
    font-size: .5rem;
  }
  .about-content{
    padding: 6.4em 0 9.6em;
  }
}
</style>
