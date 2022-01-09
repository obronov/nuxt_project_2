<template>
  <div class="filter-form">
    <div class="filter-form__group" v-for="item in values" :key="item.name">
      <div class="filter-form__group-title">{{item.title}}</div>
      <div class="filter-form__group-items">
        <label class="filter-value" v-for="(value, index) in item.values" :key="item.name + index">
          <input class="filter-value__input" :name="item.name" :checked="setChecked(item.name, value)" :value="value" type="checkbox" @change="$emit('changeValueFilter')">
          <span class="filter-value__icon">
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.96421 9.15631C3.73325 9.15616 3.50947 9.07607 3.33087 8.92965L0.344205 6.48298C-0.0641838 6.12821 -0.116398 5.51298 0.22636 5.09446C0.569118 4.67593 1.18256 4.60586 1.61087 4.93631L3.92421 6.82965L10.5909 0.689647C10.8415 0.391695 11.2422 0.266255 11.6179 0.368147C11.9937 0.470039 12.2761 0.780738 12.3418 1.16446C12.4076 1.54819 12.2446 1.93518 11.9242 2.15631L4.64421 8.88965C4.46 9.06225 4.21664 9.15769 3.96421 9.15631Z"/>
            </svg>
          </span>
          <span class="filter-value__caption">{{value}}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    values: Array
  },
  methods:{
    setChecked(name, value){
      let keyQuery = Object.keys(this.$route.query);
      let checked = false;

      keyQuery.forEach(element => {
        if(element == name){
          let valueQuery = this.$route.query[element].split(',')
          if(valueQuery.includes(value)){
            checked = true;
          }
        }
      });
      return checked
    }
  }
}

</script>

<style lang='scss' scoped>
  .filter-form{
    font-size: 1rem;
  }
  .filter-value{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1.2em;
    align-items: center;
    position: relative;
  }
    .filter-value__input {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      &:checked + .filter-value__icon svg{
        fill: var(--blue);
      }
  }

  .filter-value__icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2.2em;
    background: var(--white);
    & svg{
      display: block;
      width: 1.3em;
      height: 1em;
      fill: transparent
    }
  }
  .filter-form__group-title{
    font-family: var(--font-second);
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: var(--blue);
    margin: 0 0 17px;
  }
  .filter-form__group-items{
    max-height: 182px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--gray);
    display: grid;
    grid-gap: 18px 0;
  }
  .filter-form{
    display: grid;
    grid-gap: 25px 0;
  }
</style>