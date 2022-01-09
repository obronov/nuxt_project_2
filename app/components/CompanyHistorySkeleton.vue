<template>
  <div class="company-history">
    <div class="company-history__inner">
      <div class="company-history__year">
        <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="company-history__year-number" v-mBox v-mLight></div>
        </SkeletonScaffold>
      </div>
      <div class="company-history__content">
        <SkeletonScaffold :padding="'0'" :primary="getColor('super_bright_gray')">
          <div class="company-history__content-text" v-mBox v-mLight  v-mRandomWidth></div>
          <div class="company-history__content-text" v-mBox v-mLight  v-mRandomWidth></div>
          <div class="company-history__content-text" v-mBox v-mLight  v-mRandomWidth></div>
          <div class="company-history__content-text" v-mBox v-mLight  v-mRandomWidth></div>
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
.company-history__inner{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 0 5.3em;
  align-items: center;
  max-width: 925px;
  padding: 0 15px;
  margin: 0 auto;
}

.company-history__year-number{
  margin: 2.5em 0;
  height: 14.4em;
}
.company-history__content-text{
  margin: 1em 0;
  height: 1.6em;
}
@media screen and (max-width: 768px) {
  .company-history__year-number{
    height: 2.4em;
  }
  .company-history__content-text{
    height: 1.2em;
  }
}

</style>
