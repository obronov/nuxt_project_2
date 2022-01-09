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
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2em;
}
.catalog-sections-skeleton-item{
  &:nth-of-type(1){
    grid-column: 1;
  }
  &:nth-of-type(2){
    grid-column: 2;
  }
  &:nth-of-type(3){
    grid-column: 3;
  }
  &:nth-of-type(4){
    grid-column: 1;
  }
  &:nth-of-type(5){
    grid-column: 2/4;
  }
}
.box{
  height: 20em;
  margin: 2em 0;
}
@media screen and (max-width: 768px) {
  .catalog-sections-skeleton{
    grid-template-columns: 1fr;
    grid-template-rows: initial;
    grid-gap: 3.2em;
  }
  .catalog-sections-skeleton-item{
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5){
      grid-column: initial;
    }
  }
  .box{
    height: 4.3em;
  }
}
</style>
