<template>
  <div class="titleBox">
    <div class="list container">
      <SkeletonScaffold 
        class='card' 
        :padding="'0'" 
        :primary="getColor('super_bright_gray')"
        v-for="(item, index) in [1,2,3,4]" 
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
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 2em;
  & :nth-child(1){
    grid-row: 1/3;
    grid-column: 1;
    & .img{
      height: 45.6em;
    }
  }
  & :nth-child(2){
    grid-row: 1;
    grid-column: 2/4;
    & .img{
      height: 17em;
    }
  }
  & :nth-child(3){
    grid-row: 2;
    grid-column: 2;
    & .img{
      height: 17em;
    }
  }
  & :nth-child(4){
    grid-row: 2;
    grid-column: 3;
    & .img{
      height: 17em;
    }
  }
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
.date{
  height: 2.4em;
  margin: 1em ;
}
.title{
  height: 2.4em;
  margin: 1em;
}

</style>
