<template>
  <div>
    <MainSlider :info="mainSlider"/>
    <DirectionsListMain :directions="directions"/>
    <DocumentsSlider :documents="documents"/>
    <PortfolioMain :portfolio="portfolio"/>
    <CompanyAbout :aboutCompany="aboutCompany"/>
    <PartnersSlider :partners="partners"/>    
    <Branches 
      v-if="!isEmpty(contacts)" 
      :title="contacts.titles.affiliates_main_title"
      :linkName="contacts.titles.affiliates_main_link_name"
      :description="contacts.titles.affiliates_main_description"
      :contacts="contacts" 
      :type="'main'"
    />

  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      contacts: null,
      portfolio: null,
      documents: null,
      aboutCompany: null,
      partners: null,
      directions: null,
      mainSlider: null
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
    let lang = this.$store.state.lang;

    /* this.contacts = await this.fetchData(process.env.fakeUrl + `contacts?lang=${lang}`); */
    this.contacts = await this.fetchData(process.env.baseUrl + `combined/contact?lang=${lang}`);
 
    /* this.portfolio = await this.fetchData(process.env.fakeUrl + `our_projects?lang=${lang}`); */
    this.portfolio = await this.fetchData(process.env.baseUrl + `model/main/projects?lang=${lang}`);

    /* this.documents = await this.fetchData(process.env.fakeUrl + `certificates?lang=${lang}`); */
    this.documents = await this.fetchData(process.env.baseUrl + `model/main/documents?lang=${lang}`);

    /* this.aboutCompany = await this.fetchData(process.env.fakeUrl + `about_main?lang=${lang}`); */
    this.aboutCompany = await this.fetchData(process.env.baseUrl + `model/main/about?lang=${lang}`);

    /* this.partners = await this.fetchData(process.env.fakeUrl + `our_partners?lang=${lang}`); */
    this.partners = await this.fetchData(process.env.baseUrl + `model/main/partners?lang=${lang}`);

    /* this.directions = await this.fetchData(process.env.fakeUrl + `directions?lang=${lang}`) */
    this.directions = await this.fetchData(process.env.baseUrl + `model/catalog/directions?lang=${lang}`)

    /* this.mainSlider = await this.fetchData(process.env.fakeUrl + `main_slider?lang=${lang}`) */
    this.mainSlider = await this.fetchData(process.env.baseUrl + `model/main/slider?lang=${lang}`)

    this.$store.commit('setShowSkeleton', false)
  }


}
</script>
