<template>
  <div class="directions-skeleton container">
    <div class="directions-skeleton__inner">
      <div class="directions-skeleton__item" v-for="item in [1,2,3,4]" :key="item">
        <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="directions-skeleton__title"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="directions-skeleton__btn"  v-mBox v-mLight></div>
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
.directions-skeleton{
  font-size: 1em;
}
.directions-skeleton__inner{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}

.directions-skeleton__btn{
  width: 5.2em;
  height: 5.2em;
  margin: 4em;
  border-radius: 100%;
}
.directions-skeleton__title{
  height: 4em;
  margin: 4em;
}
@media screen and (max-width: 768px) {
  .directions-skeleton__inner{
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
}
</style>
