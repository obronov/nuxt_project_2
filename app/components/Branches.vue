<template>
  <div class="branches">
    <client-only>
      <BranchesSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <BranchesContent  
      v-if="!isEmptyArr(contacts.branches) && contacts.titles.delivery_show && !getStateSkeleton()" 
      :contacts="contacts" 
      :type="type"
      :title="title"
      :linkName="linkName"
      :description="description"
    />
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    contacts: Object,
    title: String,
    description: String,
    type: String,
    linkName: String
  }
}
</script>

<style lang="scss" scoped>


</style>
