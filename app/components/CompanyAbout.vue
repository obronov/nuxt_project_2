<template>
  <div class="about-company">
    <client-only>
      <CompanyAboutSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CompanyAboutContent v-if="!isEmpty(aboutCompany) && !getStateSkeleton()" :aboutCompany="aboutCompany"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    aboutCompany: Object
  }
}
</script>

<style lang="scss" scoped>
.about-company{
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .about-company{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .about-company{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .about-company{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .about-company{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .about-company{
    font-size: .5rem;
  }

}

</style>
