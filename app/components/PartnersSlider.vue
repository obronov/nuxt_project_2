<template>
  <div class='partners'>
    <client-only>
      <PartnersSliderSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <PartnersSliderContent 
      v-if="!isEmpty(partners) && !isEmptyArr(partners.items) && !getStateSkeleton()" 
      :partners="partners"
    />
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    partners: Object
  }
}
</script>

<style lang="scss" scoped>

.partners{
  background: var(--super_bright_gray);
  padding: 8em 0 6.4em;
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .partners{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .partners{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .partners{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .partners{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .partners{
    font-size: .5rem;
    padding: 6.4em 0;
  }

}

</style>
