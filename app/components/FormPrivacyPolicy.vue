<template>
   <div class="privacyPolicy">
    <label class="privacyPolicy__inner">
      <input class="privacyPolicy__checkbox" type="checkbox" name="privacypolicy" v-model='checked' @change="changeState">
      <div class="privacyPolicy__icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.96421 12.1561C5.73325 12.1559 5.50947 12.0758 5.33087 11.9294L2.3442 9.48274C1.93582 9.12796 1.8836 8.51274 2.22636 8.09421C2.56912 7.67569 3.18256 7.60562 3.61087 7.93607L5.92421 9.8294L12.5909 3.6894C12.8415 3.39145 13.2422 3.26601 13.6179 3.3679C13.9937 3.46979 14.2761 3.78049 14.3418 4.16422C14.4076 4.54795 14.2446 4.93494 13.9242 5.15607L6.64421 11.8894C6.46 12.062 6.21664 12.1574 5.96421 12.1561Z"/>
        </svg>
      </div>
      <div class="privacyPolicy__text" v-html="text"></div>
    </label>
  </div>
</template>


<script>
  export default {
    props:{
      'text': String
    },
    data(){
      return{
        checked: false,
      }
    },
    methods: {
      changeState(event){
        this.$emit('changeState', this.checked);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .privacyPolicy{
    font-size: 1rem;
  }
  .privacyPolicy__inner{
    position: relative;
  }
 
  .privacyPolicy__checkbox {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      &:checked + .privacyPolicy__icon svg{
        fill: var(--blue);
      }
  }
  .privacyPolicy__icon{
    width: 22px;
    height: 22px;
    border: 1px solid var(--gray);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg{
      fill: transparent;
      transition: .3s;
      width: 16px;
      height: 16px;
    }
  }
  .privacyPolicy__text{
    margin: 0;
    font-weight: normal;
    font-size: 10px;
    line-height: 1.6;
    color: var(--dark_gray);
    &::v-deep *{
      font-size: inherit;
      line-height: inherit;
      color: inherit;
      margin: 0;
    }
    
  }

.privacyPolicy__inner{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 1em;
}






</style>