<template>
  <div class="titleBox">
    <div class="list container">
      <SkeletonScaffold 
          class='card' 
          :padding="'0'" 
          :primary="getColor('super_bright_gray')"
        >
          <div class='title-section' v-mBox v-mLight v-mRandomWidth></div>
          <div class='link' v-mRandomWidth v-mLight></div>
      </SkeletonScaffold>
      <SkeletonScaffold 
        class='card' 
        :padding="'0'" 
        :primary="getColor('super_bright_gray')"
        v-for="(item, index) in [1,2,3,4,5]" 
        :key="index"
      >        
        <div class='img' v-mBox v-mDark></div>
        <div class='date' v-mButton v-mLight></div>
        <div class='title' v-mBox v-mLight v-mRandomWidth></div>
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
}
.list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  & .img{
    height: 20.4em;
  }
  & .card{
    &:nth-child(1){
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-child(2){
      grid-row: 1;
      grid-column: 2/4;
    }
    &:nth-child(3){
      grid-row: 1/3;
      grid-column: 4;
      & .img{
        height: 51em;
      }
    }
    &:nth-child(4){
      grid-row: 2;
      grid-column: 1;
    }
    &:nth-child(5){
      grid-row: 2;
      grid-column: 2;
    }
    &:nth-child(6){
      grid-row: 2;
      grid-column: 3;
    }
  }
}

.card{
  font-size: 1em;
  height: 100%;
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
.date{
  height: 2.4em;
  margin: 1em ;
}
.title{
  height: 2.4em;
  margin: 1em;
}
.title-section{
  height: 8em;
  margin: 2em;
}
.link{
  height: 2.8em;
  margin: 2em;
}
@media screen and (max-width: 768px) {
  .list{
  grid-template-columns: repeat(3, 1fr);
  & .img{
    height: 20.4em;
  }
  & .card{
    &:nth-child(1){
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-child(2){
      grid-row: 1;
      grid-column: 2;
    }
    &:nth-child(3){
      grid-row: 1;
      grid-column: 3;
      & .img{
        height: 20.4em;
      }
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6){
      display: none;
    }
  }

}

}
@media screen and (max-width: 576px) {
  .list{
    grid-template-columns: 1fr;
    & .card{
      &:nth-child(1){
        grid-row: initial;
        grid-column: initial;
      }
      &:nth-child(2){
        grid-row: initial;
        grid-column: initial;
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6){
        display: none;
      }
    }

}
}
</style>
