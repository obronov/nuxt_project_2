<template>
  <section class="vacancy-contacts-content container">
    <h2 class="vacancy-contacts-content__title" v-if="vacancy.hr_contacts.title" v-html="cnangeColorTitle(15, vacancy.hr_contacts.title)"></h2>
    <ul class="vacancy-contacts-content__list">
      <li class="vacancy-contacts-content__list-item">
        <AppBigLink 
          :info="{                
            title: vacancy.hr_contacts.phone.title,
            text: vacancy.hr_contacts.phone.link,
            icon: '',
            url: 'tel:' + convertPhone(vacancy.hr_contacts.phone.link),
            targetBlank: false,
            regularLink : true,
            colorSchema: 'gray'
          }"/>
      </li>
      <li class="vacancy-contacts-content__list-item">
        <AppBigLink 
          :info="{                
            title: vacancy.hr_contacts.email.title,
            text: vacancy.hr_contacts.email.link,
            icon: '',
            url: 'mailto:' + vacancy.hr_contacts.email.link,
            targetBlank: false,
            regularLink : true,
            colorSchema: 'gray'
          }"/>
      </li>
      <li class="vacancy-contacts-content__list-item">
        <AppBigLink 
          :info="{                
            title: vacancy.hr_contacts.hh.title,
            text: '',
            icon: 'arrow',
            url: vacancy.hr_contacts.hh.link,
            targetBlank: true,
            regularLink : true,
          }"/>
      </li>
      <li class="vacancy-contacts-content__list-item">
        <AppBigLink 
          :info="{                
            title: vacancy.hr_contacts.avito.title,
            text: '',
            icon: 'arrow',
            url: vacancy.hr_contacts.avito.link,
            targetBlank: true,
            regularLink : true,
          }"/>
      </li>
    </ul>
  </section>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    vacancy: Object
  }
}

</script>

<style lang='scss' scoped>
.vacancy-contacts-content__title{
  margin: 0 0 1em;
  &::v-deep b{
    color: var(--gray)
  }
}
.vacancy-contacts-content__list{
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  font-size: 1em;
}
.vacancy-contacts-content__list-item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .vacancy-contacts-content__list{
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
  .vacancy-contacts-content__title{
    margin: 0 0 1.33em;
  }
}
</style>