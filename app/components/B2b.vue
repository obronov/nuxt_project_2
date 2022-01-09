<template>
  <div class="b2b">
    <client-only>
      <B2bSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <B2bContent v-if="!isEmpty(info) && !getStateSkeleton()" :info="info"/>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.b2b{
  padding: 8.2em 0 9.7em;
}

@media screen and (max-width: 600px) {
  .b2b{
    padding: 6.4em 0 11.2em;
  }
}
</style>
