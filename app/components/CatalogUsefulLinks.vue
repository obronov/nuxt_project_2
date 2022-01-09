<template>
  <div class="useful-links">
    <client-only>
      <CatalogUsefulLinksSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CatalogUsefulLinksContent v-if="!isEmpty(info) && !getStateSkeleton()" :info="info"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.useful-links{
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .useful-links{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .useful-links{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .useful-links{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .useful-links{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .useful-links{
    font-size: .5rem;
  }

}


</style>
