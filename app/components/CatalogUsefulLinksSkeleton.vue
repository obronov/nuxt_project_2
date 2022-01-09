<template>
  <div class="useful-links-skeleton">
    <div class="useful-links-skeleton__inner container">

      <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="useful-links-skeleton__title" v-mRandomWidth  v-mBox v-mDark></div>
      </SkeletonScaffold>

      <div class="useful-links-skeleton__list">
        <SkeletonScaffold 
          :padding="'0'" 
          :primary="getColor('super_bright_gray')" 
          v-for="item in [1,2]" 
          :key="item"
        >
          <div class="useful-links-skeleton__product" v-mBox v-mDark></div>
        </SkeletonScaffold>
      </div>

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
.useful-links-skeleton{
  background: var(--super_bright_gray);
  
}
.useful-links-skeleton__inner{
  display: grid;
  grid-gap: 3.6em 0;
}
.useful-links-skeleton__title{
  height: 4em;
  margin: 2em 0;
}
.useful-links-skeleton__list{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 2em;
}
.useful-links-skeleton__product{
  height: 14.3em;
  margin: 2em 0;
}
@media screen and (max-width: 768px) {
  .useful-links-skeleton__list{
    grid-template-columns:  1fr;
  }
}
</style>
