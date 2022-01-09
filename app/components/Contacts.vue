<template>
  <div>
    <client-only>
      <ContactsSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <ContactsContent 
      v-if="!isEmpty(contactsBranche) && !getStateSkeleton()" 
      :contactsBranche="contactsBranche"
      :titles="titles"
    />
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props: {
    titles: Object,
    contactsBranche: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
