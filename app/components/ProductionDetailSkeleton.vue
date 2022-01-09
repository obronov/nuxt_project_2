<template>
  <div>
    <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('super_bright_gray')">          
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
      <div class="title"  v-mBox v-mLight v-mRandomWidth></div>
    </SkeletonScaffold>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
}
</script>

<style lang="scss" scoped>

.title{
  height: 1.6em;
  margin: 1em;
}

</style>
