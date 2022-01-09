<template>
  <div class="city-selection" :class="{isMobile: !$device.isDesktop}">
    <div class="modal-title h2" v-if="cities.title" v-html="cnangeColorTitle(20, cities.title)"></div>
    <ul class="city__items">
      <li class="city__item" v-for="item in cities.cities" :key="item.code">
        <button 
          class="city__btn" 
          :class="{isActive: item.code == $store.state.city}"
          type="button" 
          @click="$emit('onChangeCity', item.code)"
        >
        {{item.city}}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    cities: Object
  }
}

</script>

<style lang='scss' scoped>
.isMobile{
  .city__btn{
    &:hover,
    &:focus,
    &:active,
    &.isActive{
      color: var(--blue);
      font-weight: normal;
    }
  }
}
.city__items{
  font-size: 1em;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 2em 1em;
}
.city__item{
  margin: 0;
  font-size: 1rem;
  &:before{
    top: 0.9em;
  }
}
.city__btn{
  border: none;
  background: none;
  padding: 0;
  font-size: 1.6em;
  line-height: 1.75;
  text-align: left;
  color: var(--dark_gray);
  &:hover,
  &:focus,
  &:active,
  &.isActive{
    color: var(--blue);
    font-weight: bold;
  }

}
@media screen and (max-width: 768px) {
  .city__items{
    grid-template-columns: repeat(2, auto);
  }
  .city__btn{
    font-size: 14px;
    line-height: 24px;
  }

}
</style>