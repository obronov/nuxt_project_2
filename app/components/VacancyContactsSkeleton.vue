<template>
  <div class="vacancy-contacts-skeleton container">
    <div class="vacancy-contacts-skeleton__title">      
      <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="title__box" v-mBox v-mLight v-mRandomWidth></div>
      </SkeletonScaffold>
    </div>
    <div class="vacancy-contacts-skeleton__items " v-for="item in [1,2,3,4]" :key="item">
      <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="title" v-mBox v-mLight v-mRandomWidth></div>
        <div class="subtitle"  v-mBox v-mLight v-mRandomWidth></div>
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

.title__box{
  height: 4em;
  margin: 1em;
}
.title{
  height: 3.2em;
  margin: 4em;
}
.subtitle{
  height: 2.4em;
  margin: 1.5em 4em 8.7em;
}
.vacancy-contacts-skeleton{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
}
.vacancy-contacts-skeleton__title{
  grid-column: 1/5;
}
@media screen and (max-width: 768px) {
  .vacancy-contacts-skeleton{
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
  .vacancy-contacts-skeleton__title{
    grid-column: initial;
  }
}
</style>
