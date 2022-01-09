<template>
  <div class='info'>
    <div class="info__container container">
      <div class="info__text" v-html="infoCookie.text"></div>
      <button class="btn info__btn" @click="close()" type="button">{{infoCookie.btn_name}}</button>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    infoCookie: Object
  },
  methods:{
    close(){
      this.$cookies.set('infoCookie', false,{path: '/', maxAge: 60 * 60 * 24 * 30});
      this.$store.commit('setShowInfoCookie', false);
    }
  }
}

</script>

<style lang='scss' scoped>
.info{
  font-size: 1rem;
  background: var(--dark_gray);
  padding: 2.4em 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  opacity: .9;
}
.info__container{
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 2em;
  align-items: start;
}
.info__text{
  font-size: 1.6em;
  line-height: 119%;
  color: var(--white);
}
.info__text::v-deep *{
  font-size: inherit;
  color: inherit;
}
.info__text::v-deep *{
  margin: 0 0 1em;
  &:last-child{
    margin: 0;
  }
}

/* .info__btn{
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 125%;
  text-transform: uppercase;
  color: var(--color-7);
  background: transparent;
  transition: .3s;
  padding: .83em 1.66em;
  margin: 0 auto;
  &:hover,
  &:focus{
    background: var(--color-7);
    color: var(--color-4);
  }
} */
@media screen and (max-width: 768px) {
  .info{
    font-size: .8rem;
  }
  .info__container{
    grid-template-columns: 1fr;
    grid-gap: 5em 0;
    justify-content: center;
  }
}
@media screen and (max-width: 576px) {
  .info{
    font-size: .5rem;
  }
  .info__btn{
    font-size: 2.8em;
    padding: .5em 1em;
  }
  .info__text{
    font-size: 2.8em;
  }
}
</style>