<template>
  <div class='supplier container'>
    <h2 class="supplier__title" v-if="info.title" v-html="info.title"></h2>
    <div  class="supplier__script" v-if="info.script" v-html="info.script">
      
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  }
}

</script>

<style lang='scss' scoped>
.supplier__title{
  color: var(--blue);
  margin: 0;
}
.supplier__script{
  margin: 5.6em 0 0;
  background: var(--white);
}
</style>