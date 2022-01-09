<template>
  <div class="documents-slider">
    <client-only>
      <DocumentsSliderSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <DocumentsSliderContent v-if="!isEmpty(documents) && !isEmptyArr(documents.items) && !getStateSkeleton()" :documents="documents" />
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    documents: Object
  }
}
</script>

<style lang="scss" scoped>

.documents-slider{
  background: var(--super_bright_gray);
  padding: 8em 0 6em;
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .documents-slider{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .documents-slider{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .documents-slider{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .documents-slider{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .documents-slider{
    font-size: .5rem;
    padding: 6.4em 0;
  }

}

</style>
