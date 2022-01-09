<template>
  <div class="container">
    <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('super_bright_gray')">          
      <div class="title"  v-mBox v-mLight></div>
      <div class="script" v-mBox v-mLight></div>
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

.card{
  font-size: 1em;
}

.title{
  max-width: 40em;
  height: 4.8em;
  margin: 2em 0 5.6em;
}
.script{
  height: 50vh;

}
</style>
