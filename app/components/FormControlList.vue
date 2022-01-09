<template>
  <div class='controls'>
    <div class="controls-group" v-for="item in form.controls" :key="item.name">
      <FormControlText v-if="item.type != 'comment' && item.type != 'file'" :info="item"/>
      <FormControlFile v-if="item.type == 'file'" :info="form"/>
      <FormControlComment v-if="item.type == 'comment'" :info="item"/>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    form: Object
  }
}

</script>

<style lang='scss' scoped>

</style>