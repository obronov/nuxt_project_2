<template>
  <div class="content">
    <TitleBox :meta="this.$store.state.meta"/>
 
    <TabList :sections="branches" :getParam="'branche'"/> 

    <div v-if="!isEmpty(contacts) && !isEmptyArr(contacts.branches)">
      <Contacts 
        v-if="item.code == $route.query.branche"
        v-for="item in contacts.branches"
        :key="item.code"
        :contactsBranche="item" 
        :titles="titles"
      />
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
      contacts: null
    }
  },
  async fetch() {
    let lang = this.$store.state.lang

    /* this.contacts = await this.fetchData(process.env.fakeUrl + `contacts?lang=${lang}`) */
    this.contacts = await this.fetchData(process.env.baseUrl + `combined/contact?lang=${lang}`);

    this.$store.commit('setShowSkeleton', false)
  },
  watch: {    
    async $route() {
      this.$store.commit('setShowSkeleton', false)
    },
    contacts(){
      if(!this.isEmpty(this.contacts) && !this.isEmptyArr(this.contacts.branches)){
        if(!this.$route.query.branche){
          this.$router.push({query:{branche: this.contacts.branches[0].code}})
        }
        
      }
      
    }
  },
  computed: {
    titles(){
      let titles = {}

      try {
        titles = this.contacts.titles
      } catch (error) {
        console.log('Заголовок не определён (contacts) ',error)
      }

      return titles
    },
    branches(){
      let branches = [];

      try {
        this.contacts.branches.forEach(element => {
          let item = {
            "title": element.name,
            "slug": element.code
          }
          branches.push(item)
        });
      } catch (error) { }


      return branches;
    }
  }
}

</script>
