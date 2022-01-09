<template>
  <div class="titleBox">
    <div class="titleBox__wrapper">
      <div class="container">
        <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('blue')">
          <div class="breadcrumbs" v-mBox v-mLight></div>
          <div class="btnBack" v-mButton v-mLight></div>
          <div class="title"  v-mBox v-mLight></div>
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
.titleBox{
  font-size: 1rem;
  background: var(--blue);
}
.card{
  font-size: 1rem;
}
.breadcrumbs{
  max-width: 40em;
  margin: 2em 0;
  height: 1em;
}
.btnBack{
  max-width: 20em;
  margin: 2em 0;
  height: 2.8em;
}
.title{
  max-width: 40em;
  height: 4.8em;
  margin: 2em 0;
}

</style>
