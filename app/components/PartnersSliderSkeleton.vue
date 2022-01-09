<template>
  <div class="partners-skeleton">
      <div class="container">
        <SkeletonScaffold :padding="'0'" :primary="getColor('bright_gray')">
          <div class="title"  v-mBox v-mLight></div>
          <div class="slider"  v-mBox v-mLight ></div>
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
.title{
  max-width: 27.6em;
  height: 4em;
  margin: 0 0 4em;
}
.slider{
  height: 26em;
  margin: 0 0 4em;
}

</style>
