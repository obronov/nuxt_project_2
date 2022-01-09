<template>
  <div class="directions-skeleton container">
    <div class="directions-skeleton__inner">
      <div class="directions-skeleton__item" v-for="item in [1,2,3,4, 5,6]" :key="item">
        <SkeletonScaffold class="card" :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="directions-skeleton__title"  v-mBox v-mLight ></div>
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
}
.directions-skeleton__item{
  height: 40em;
  & .card {
    height: 100%;
    &::v-deep .skeleton-card{
      height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      justify-content: space-between;
    }
  }


  &:nth-of-type(5),
  &:nth-of-type(6){
    height: 10em;
    .directions-skeleton__title{
      height: 2.8em;
      margin: 0 2.4em;
    }
    .directions-skeleton__btn{
      margin: 0 2.2em;
    }
    & .card {
      height: 100%;
      &::v-deep .skeleton-card{
        height: 100%;
        grid-template-columns: 1fr auto;
        grid-template-rows: initial;
        align-items: center;
      }
    }
  }
  &:nth-of-type(5){
    grid-column: 1/3;
    
  }
  &:nth-of-type(6){
    grid-column: 3/5;
  }
}
.directions-skeleton__btn{
  width: 5.2em;
  height: 5.2em;
  margin: 2.2em;
  border-radius: 100%;
}
.directions-skeleton__title{
  width: 20em;
  height: 4em;
  margin: 2.3em 3.2em;
}
@media screen and (max-width: 768px) {
  .directions-skeleton__inner{
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
  .directions-skeleton__item{
    height: 30em;

    &:nth-of-type(5),
    &:nth-of-type(6){
      height: 8.3em;
      grid-column: initial;
      & .card {
        &::v-deep .skeleton-card{
          justify-content: center;
          justify-items: center;
          grid-template-columns: 20em auto;
        }
      }
    }
}
}
</style>
