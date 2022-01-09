<template>
  <div class="titleBox">
    <div class="titleBox__wrapper">
      <div class="container">
        <SkeletonScaffold class='card' :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="breadcrumbs" v-mBox v-mLight></div>
          <div class="btnBack" v-mButton v-mLight></div>
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
  background: var(--super_bright_gray);
  margin: 0 0 2.6em;
  height: 45em;
}
.card{
  padding: 0;
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
@media screen and (max-width: 1200px){
  .titleBox {
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .titleBox {
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px){
  .titleBox__inner{
    height: 48.8em;  
  }
  .titleBox {
    font-size: .5rem;
  }
}
</style>
