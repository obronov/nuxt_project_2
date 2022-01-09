<template>
  <div>
    <TitleBox :meta="this.$store.state.meta"/>
    <div class="delivery container">
      <ContentWysiwyg v-if="!isEmpty(delivery)" :content="delivery.content"/>
    </div>
    <Branches 
      v-if="!isEmpty(contacts)" 
      :title="contacts.titles.affiliates_delivery_title"
      :linkName="contacts.titles.affiliates_delivery_link_name"
      :description="contacts.titles.affiliates_delivery_description"
      :contacts="contacts" 
    />
    <TransportsCompanies :info="transportsCompanies" />
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      contacts: null,
      delivery: null,
      transportsCompanies: null

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

    /* this.contacts = await this.fetchData(process.env.fakeUrl + `contacts?lang=${lang}`) */
    this.contacts = await this.fetchData(process.env.baseUrl + `combined/contact?lang=${lang}`);

    /* this.delivery = await this.fetchData(process.env.fakeUrl + `delivery?lang=${lang}`); */
    this.delivery = await this.fetchData(process.env.baseUrl + `model/logistics-page?lang=${lang}`);

    /* this.transportsCompanies = await this.fetchData(process.env.fakeUrl + `transport_companies?lang=${lang}`); */
    this.transportsCompanies = await this.fetchData(process.env.baseUrl + `model/transport-company-block?lang=${lang}`);


    this.$store.commit('setShowSkeleton', false)
  }
}

</script>

<style lang='scss' scoped>
.delivery{
  font-size: 1rem;
  padding: 8em 15px;
}

@media screen and (max-width: 1200px){
  .delivery{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .delivery{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px){
  .delivery{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px){
  .delivery{
    font-size: .5rem;
    padding: 6.4em 15px;
  }
}
</style>