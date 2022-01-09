<template>
  <div class="container">
    <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('super_bright_gray')">      
      <div class="title"  v-mBox v-mLight></div>
      <div class="description" v-mLight></div>
      <div class="description" v-mLight></div>
      <div class="description" v-mLight></div>
      <div class="link"  v-mLight></div>
    </SkeletonScaffold>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
}
</script>

<style lang="scss" scoped>
.titleBox{
  font-size: 1rem;
  background: var(--super_bright_gray);
}
.card{
  font-size: 1em;
}
.link{
  max-width: 20em;
  margin: 4em;
  height: 2.8em;
}
.title{
  max-width: 40em;
  height: 4.8em;
  margin:  4em;
}
.description{
  max-width: 40em;
  height: 1.4em;
  margin: 0 0 2em 4em;
}
</style>
