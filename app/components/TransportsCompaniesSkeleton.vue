<template>
  <div class="titleBox">
    <div class="container">
      <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('super_bright_gray')">
        <div class="title"  v-mBox v-mLight></div>
        <div class="description" v-mBox v-mRandomWidth v-mLight></div>
        <div class="description" v-mBox v-mRandomWidth v-mLight></div>
        <div class="description" v-mBox v-mRandomWidth v-mLight></div>
        <div class="services-list" >
          <div class="services-list__item" v-for="(item, index) in [1,2,3]" :key="index" >
            <div class="services-list__item-title" v-mBox v-mLight></div>
            <div class="services-list__item-text" v-mBox v-mRandomWidth v-mLight></div>
            <div class="services-list__item-text" v-mBox v-mRandomWidth v-mLight></div>
            <div class="services-list__item-text" v-mBox v-mRandomWidth v-mLight></div>
            <div class="services-list__item-text" v-mBox v-mRandomWidth v-mLight></div>
            <div class="services-list__item-text" v-mBox v-mRandomWidth v-mLight></div>
            <div class="services-list__item-btn" v-mBox v-mDark></div>
          </div>
        </div>
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
.titleBox{
  font-size: 1em;
  background: var(--white);
}

.description{
  margin: 2em;
  height: 1.6em;
}

.title{
  max-width: 40em;
  height: 4.8em;
  margin: 8em 2em 4em;
}
.services-list {
  margin: 5.6em 1em;
  display: flex;
  flex-flow: row wrap;
}
.services-list__item{
  flex: 1 1 300px;
  margin: 0 1em 2em;
}
.services-list__item-title{
  height: 3.2em;
  margin: 0 0 2.2em;
}
.services-list__item-text{
  height: 1.6em;
  margin: 0 0 1em;
}
.services-list__item-btn{
  height: 4.3em;
  margin: 4.1em 0 3.5em;
}
</style>
