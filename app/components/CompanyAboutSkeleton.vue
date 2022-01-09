<template>
  <div class="company">
    <div class="video">
      <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="video__skeleton"   v-mSquare></div>
      </SkeletonScaffold>
    </div>
    <div class="company__text container">
      <div class="company__text-item">
        <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="title__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="title__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="title__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
        </SkeletonScaffold> 
      </div>
      <div class="company__text-item">
        <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="text__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="text__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="text__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="text__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="text__skeleton"  v-mBox v-mLight v-mRandomWidth></div>
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
.company{
  padding: 0 0 1px;
}
.company__text{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 4em;
  margin: 8em auto;
}

.title__skeleton{
  height: 4em;
}
.text__skeleton{
  height: 1.6em;
}

.video__skeleton{
  height: 72em;
}
.company__text-item{
  height: 100%;
}
</style>
