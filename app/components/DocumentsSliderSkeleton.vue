<template>
  <div class="documents container">
    <div class="documents__box-title">
      <SkeletonScaffold :padding="'0'" :primary="getColor('bright_gray')">
        <div v-mBox v-mLight v-mRandomWidth></div>      
      </SkeletonScaffold>
    </div>
    <div class="documents__box-link">
      <SkeletonScaffold :padding="'0'" :primary="getColor('bright_gray')">
        <div v-mBox v-mLight v-mRandomWidth></div>
      </SkeletonScaffold>
    </div>
    <div class="documents__box-list">
      <SkeletonScaffold :padding="'0'" :primary="getColor('bright_gray')">
        <div v-mBox v-mLight v-mRandomWidth></div>      
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
.documents{
  font-size: 1em;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 3.2em;
}

.documents__box-list{  
  grid-row: 1/3;
  grid-column: 2;
  &::v-deep .skeleton-box{
    height: 25.1em;
  }
}
.documents__box-link{
  &::v-deep .skeleton-box{
    height: 2.8em;
  }
}
.documents__box-title{
  &::v-deep .skeleton-box{
    height: 8em;
  }
}
@media screen and (max-width: 768px) {
  .documents{
    grid-template-columns: 3fr 1fr;
  }
  .documents__box-list{  
    grid-row: initial;
    grid-column: 1/3;
  }
}
</style>
