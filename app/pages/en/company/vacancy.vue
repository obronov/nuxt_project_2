<template>
  <div>
    <TitleBox :meta="this.$store.state.meta"/>
    <div class="vacancy-content container">
      <div class="vacancy-content__text">
        <ContentWysiwyg v-if="!isEmpty(vacancy) && !isEmptyArr(vacancy.content)" :content="vacancy.content"/>
      </div>
      <div class="vacancy-content__link">
        <AppBigLink 
          v-if="!isEmpty(vacancy) && vacancy.file_questionnaire && vacancy.title_questionnaire"
          :info="{                
            title: vacancy.title_questionnaire,
            text: '',
            icon: 'download',
            url: vacancy.file_questionnaire,
            targetBlank: true,
            regularLink : true,
            colorSchema: ''
          }"/>
      </div>
    </div>
    
    <FormFeedback v-if="!isEmpty(formVacancy)" :formInfo="formVacancy" :mailingType="'vacancy'"/>

    <VacancyContacts :vacancy="vacancy"/>

  </div>
</template>

<script>

import global from "~/mixins/global"

export default {
  mixins: [global],
  data () {
    return {
      vacancy:  null,      
      formVacancy: null
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

    /* this.vacancy = await this.fetchData(process.env.fakeUrl + `vacancy?lang=${lang}`) */
    this.vacancy = await this.fetchData(process.env.baseUrl + `combined/vacancy?lang=${lang}`)

    /* this.formVacancy = await this.fetchData(process.env.fakeUrl + `form_vacancy?lang=${lang}`) */
    this.formVacancy = await this.fetchData(process.env.baseUrl + `model/form-vacancy?lang=${lang}`)

    this.$store.commit('setShowSkeleton', false)
  }
}

</script>

<style lang='scss' scoped>
.vacancy-content{
  padding: 8em 15px;
  display: grid;
  grid-template-columns: 8fr 1fr 3fr;
  grid-gap: 0 2em;
  font-size: 1rem;
}
.vacancy-content__link {
  grid-column: 3;
}
@media screen and (max-width: 1200px){
  .vacancy-content{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .vacancy-content{
    font-size: .7rem;
    grid-template-columns: 9fr 3fr;
  }

}
@media screen and (max-width: 768px){
  .vacancy-content{
    font-size: .6rem;
    grid-template-columns: 1fr;
    grid-gap: 6.4em 0;
  }
  .vacancy-content__link{
    grid-column: 1;
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 576px){
  .vacancy-content{
    font-size: .5rem;
    padding: 6.4em 15px;
    grid-gap: 6.4em 0;
  }
}
</style>