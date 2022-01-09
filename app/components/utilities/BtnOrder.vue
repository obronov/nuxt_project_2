<template>
  <button class="btn btnOrder" type="button" @click="$store.commit('showModal', 'formBuy'); $store.commit('setToggleMenu', false);">
    <span class="btnOrder__caption">{{caption}}</span>
    <span  class="btnOrder__number" v-if="number">{{number}}</span>
  </button>
</template>

<script>

export default {
  props:{
    caption: String,
    number: Number
  }
}

</script>

<style lang='scss' scoped>
.btnOrder{
  position: relative;
  overflow: visible;
  & .btnOrder__number{
    position: absolute;
    top: -1em;
    right: 2em;
    border-radius: 100%;
    background: var(--super_bright_gray);
    font-weight: bold;
    font-size: .625em;
    line-height: 120%;
    color: var(--blue);
    padding: .4em .5em;
    transition: inherit;
    min-width: 2.1em;
    min-height: 2.1em;
  }
  &:hover .btnOrder__number,
  &:focus .btnOrder__number,
  &:active .btnOrder__number{
    background: var(--blue);
    color: var(--white);
  }

  &:disabled .btnOrder__number{
    background: var(--bright_gray);
    color: var(--gray);
  }
}
</style>