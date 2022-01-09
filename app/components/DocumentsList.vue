<template>
  <div>
    <client-only>
      <DocumentsListSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <DocumentsListContent v-if="!isEmpty(documents) && !isEmptyArr(documents.results) && !getStateSkeleton()" :documents="documents.results" />
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


</style>
