<template>
  <div class="derictions-catalog-menu-skeleton">
    <div class="container">
      <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="derictions-catalog-menu-skeleton__title"  v-mBox v-mLight v-mRandomWidth></div>

        <div class="derictions-catalog-menu-skeleton__item-menu" v-mBox v-mLight v-mRandomWidth></div>
        <div class="derictions-catalog-menu-skeleton__item-menu" v-mBox v-mLight v-mRandomWidth></div>
        <div class="derictions-catalog-menu-skeleton__item-menu" v-mBox v-mLight v-mRandomWidth></div>
        <div class="derictions-catalog-menu-skeleton__item-menu" v-mBox v-mLight v-mRandomWidth></div>
        <div class="derictions-catalog-menu-skeleton__item-menu" v-mBox v-mLight v-mRandomWidth></div>
        <div class="derictions-catalog-menu-skeleton__item-menu" v-mBox v-mLight v-mRandomWidth></div>

        <div class="derictions-catalog-menu-skeleton__link" v-mBox v-mLight v-mRandomWidth></div>
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

.derictions-catalog-menu-skeleton__title{
  height: 2.4em;
  margin: 2em;
}
.derictions-catalog-menu-skeleton__link{
  height: 2.4em;
  margin: 3.2em  2em;
}
.derictions-catalog-menu-skeleton__item-menu{
  height: 14px;
  margin: 1em 2em;
}

</style>
