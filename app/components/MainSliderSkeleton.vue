<template>
  <div class="main-slider-skeleton">
    <div class="main-slider-skeleton__inner container">
      <SkeletonScaffold padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="main-slider-skeleton__title"  v-mBox v-mLight v-mRandomWidth></div>
        <div class="main-slider-skeleton__title"  v-mBox v-mLight v-mRandomWidth></div>
        <div class="main-slider-skeleton__title"  v-mBox v-mLight v-mRandomWidth></div>
        <div class="main-slider-skeleton__description"  v-mBox v-mLight v-mRandomWidth></div>
        <div class="main-slider-skeleton__description"  v-mBox v-mLight v-mRandomWidth></div>
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
.main-slider-skeleton{
  height: 62.6em;
  background: var(--super_bright_gray);

}
.main-slider-skeleton__inner{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
}
.main-slider-skeleton__title{
  max-width: 46.1em;
  height: 4.8em;
  margin: 1em 0;
}

.main-slider-skeleton__description{
  height: 1.4em;
  margin: 1em 0;
}
</style>
