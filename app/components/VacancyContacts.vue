<template>
  <div class="vacancy-contacts">
    <client-only>
      <VacancyContactsSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <VacancyContactsContent v-if="!isEmpty(vacancy) && !getStateSkeleton()" :vacancy="vacancy"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    vacancy: Object,
  }
}
</script>

<style lang="scss" scoped>
.vacancy-contacts{
  padding: 8em 0 9.6em;
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .vacancy-contacts{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .vacancy-contacts{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .vacancy-contacts{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .vacancy-contacts{
    font-size: .6rem;
  }
  
}
@media screen and (max-width: 576px) {
  .vacancy-contacts{
    font-size: .5rem;
    padding: 6.4em 0 11.2em;
  }

}

</style>
