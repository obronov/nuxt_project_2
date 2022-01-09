<template>
  <div class="similar-products-skeleton container">
    
      <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="similar-products-skeleton__title" v-mRandomWidth  v-mBox v-mDark></div>
      </SkeletonScaffold>

      <div class="similar-products-skeleton__list">
        <SkeletonScaffold 
          :padding="'0'" 
          :primary="getColor('super_bright_gray')" 
          v-for="item in [1,2,3,4]" 
          :key="item"
        >
          <div class="similar-products-skeleton__product" v-mBox v-mDark></div>
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
.similar-products-skeleton{
  display: grid;
  grid-gap: 3.6em 0;
}
.similar-products-skeleton__title{
  height: 4em;
  margin: 2em 0;
}
.similar-products-skeleton__list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 2em;
}
.similar-products-skeleton__product{
  height: 38.2em;
  margin: 2em 0;
}
@media screen and (max-width: 768px) {
  .similar-products-skeleton__list{
    grid-template-columns: repeat(3, 1fr);
  }
  .similar-products-skeleton__list{
    & :nth-child(4){
      display: none;
    }
  }
}
@media screen and (max-width: 576px) {
  .similar-products-skeleton__list{
    grid-template-columns: repeat(2, 1fr);
  }
  .similar-products-skeleton__list{
    & :nth-child(3){
      display: none;
    }
  }
}
</style>
