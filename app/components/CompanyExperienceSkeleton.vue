<template>
  <div class="company-experience-skeleton">
    <div class="company-experience-skeleton__inner">
      <div class="company-experience-skeleton__number">
        <SkeletonScaffold  :padding="'0'" :primary="getColor('blue')">
          <div class="company-experience-skeleton__number-text"  v-mBox v-mLight></div>
        </SkeletonScaffold>
      </div>
      <div class="company-experience-skeleton__description">
        <SkeletonScaffold  :padding="'0'" :primary="getColor('blue')">
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>
          <div class="company-experience-skeleton__description-text"  v-mBox v-mLight v-mRandomWidth></div>

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
.company-experience-skeleton{
  padding: 7.7em 0 9em;
  font-size: 1rem;
  background: var(--blue);
}
.company-experience-skeleton__inner{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 0 8.6em;
  max-width: 794px;
  padding: 0 15px;
  margin: 0 auto;
}
.company-experience-skeleton__number-text{
  height: 17.6em;
  margin: 2em 0;
}
.company-experience-skeleton__description-text{
  height: 1.6em;
  margin: 1em 0;
}
@media screen and (max-width: 1366px) {
  .company-experience-skeleton{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .company-experience-skeleton{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .company-experience-skeleton{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .company-experience-skeleton{
    font-size: .6rem;
  }
  .company-experience-skeleton__inner{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
  .company-experience-skeleton__number-text{
    height: 16.8em;
  }
  .company-experience-skeleton__description-text{
    height: 1.4em;
  }
}
@media screen and (max-width: 576px) {
  .company-experience-skeleton{
    font-size: .5rem;
    padding: 4em 0 6.4em;
  }

}
</style>
