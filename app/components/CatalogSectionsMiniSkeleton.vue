<template>
  <div class="catalog-sections-skeleton">
    <div class="catalog-sections-skeleton-item" v-for="item in [1,2,3,4,5]" :key="item">
      <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="box"  v-mBox v-mDark></div>
      </SkeletonScaffold>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],

}
</script>

<style lang="scss" scoped>
  .catalog-sections-skeleton{
    grid-template-columns: 1fr;
    grid-template-rows: initial;
    grid-gap: 3.2em;
  }

.box{
  height: 4.3em;
  margin: 2em 0;
}
@media screen and (max-width: 768px) {



}
</style>
