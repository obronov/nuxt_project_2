<template>
  <div class='filter'>
    <div class="filter__desktop">

      <button 
        class="filter__btn-show-filter-desktop" 
        type="button" 
        @click="showFilterDesktop = !showFilterDesktop"
      >
        <span>{{filter.filter_info.filter_title}}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3966fc1a=""><path d="M18.0501 16.57C18.0528 16.7697 17.9747 16.9621 17.8334 17.1033C17.6922 17.2446 17.4998 17.3227 17.3001 17.32C16.8859 17.32 16.5501 16.9842 16.5501 16.57V8.5L7.22012 17.84C7.03314 18.0407 6.75156 18.1232 6.48583 18.0554C6.22009 17.9875 6.01259 17.78 5.94473 17.5143C5.87687 17.2486 5.95946 16.967 6.16012 16.78L15.5001 7.44H7.43012C7.0159 7.44 6.68012 7.10421 6.68012 6.69C6.68012 6.27579 7.0159 5.94 7.43012 5.94H17.3101C17.7243 5.94 18.0601 6.27579 18.0601 6.69L18.0501 16.57Z" fill="#0057B8" data-v-3966fc1a=""></path></svg>
      </button>

      <form action="/" class="filter-desktop__wrap-items" v-show="showFilterDesktop" ref="formDesktop">
        <CatalogFilterValues :values="filter.filters" @changeValueFilter="updateFilter($refs.formDesktop)"/>
      </form>

    </div>


    <div class="filter__mobile">

        <button 
          class="filter__btn-show-filter-mobile" 
          type="button" 
          @click="showFilterMobile = !showFilterMobile"
        >
          <span>{{filter.filter_info.filter_title}}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7691 11.6179C16.6701 11.5963 17.4749 11.0491 17.8263 10.2193C17.9013 10.2509 17.9815 10.2683 18.0629 10.2707H22.1771C22.6032 10.2707 22.9486 9.92534 22.9486 9.49935C22.9486 9.07336 22.6032 8.72802 22.1771 8.72802H18.1143C18.0699 8.72221 18.025 8.72221 17.9806 8.72802C17.686 7.57063 16.5523 6.83303 15.3746 7.0325C14.1969 7.23197 13.3695 8.30174 13.4726 9.49158C13.5756 10.6814 14.5747 11.593 15.7691 11.5871V11.6179ZM15.7691 8.58404C16.1838 8.58404 16.52 8.92017 16.52 9.3348C16.52 9.74943 16.1838 10.0856 15.7691 10.0856C15.3545 10.0856 15.0183 9.74943 15.0183 9.3348C15.0183 8.92017 15.3545 8.58404 15.7691 8.58404ZM5.77143 8.72802H11.9429C12.3689 8.72802 12.7143 9.07336 12.7143 9.49935C12.7143 9.92534 12.3689 10.2707 11.9429 10.2707H5.77143C5.34538 10.2707 5 9.92534 5 9.49935C5 9.07336 5.34538 8.72802 5.77143 8.72802ZM7.736 14.5427C8.05818 13.6315 8.91918 13.0219 9.88571 13.0206V13C11.0488 12.9985 12.029 13.8677 12.1663 15.0226C12.3037 16.1774 11.5548 17.2522 10.4237 17.5235C9.29271 17.7948 8.13762 17.1767 7.736 16.0853H5.77143C5.34538 16.0853 5 15.74 5 15.314C5 14.888 5.34538 14.5427 5.77143 14.5427H7.736ZM9.1361 15.3681C9.14317 15.7772 9.47652 16.1053 9.88571 16.1059V16.0647C10.3004 16.0647 10.6366 15.7286 10.6366 15.314C10.6141 14.9055 10.2687 14.5901 9.85978 14.6048C9.45086 14.6196 9.12903 14.959 9.1361 15.3681ZM13.9999 14.5426H22.2285C22.6546 14.5426 22.9999 14.888 22.9999 15.314C22.9999 15.74 22.6546 16.0853 22.2285 16.0853H13.9999C13.5739 16.0853 13.2285 15.74 13.2285 15.314C13.2285 14.888 13.5739 14.5426 13.9999 14.5426Z" fill="#0057B8"/>
          </svg>
        </button>

        <form action="/" class="filter-mobile__wrap-items" v-show="showFilterMobile" ref="formMobile">

          <div class="filter-mobile__header">
            <button class="filter-mobile__btn-close" type="button" @click="showFilterMobile = false">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L15 15" stroke="#A1A1A1" stroke-width="2" stroke-linecap="round"/>
                <path d="M1 15L15 1" stroke="#A1A1A1" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div class="filter-mobile__title">{{filter.filter_info.filter_title}}</div>
          </div>

          <div class="filter-mobile__middle">
            <CatalogFilterValues :values="filter.filters"/>
          </div>

          <div class="filter-mobile__footer">
            <button class="btn filter-mobile__btn" type="button" @click="updateFilter($refs.formMobile); showFilterMobile = false">{{filter.filter_info.filter_btn_name}}</button>
          </div>
        </form>

    </div>
  </div>
</template>

<script>

export default {
  props:{
    filter: Object
  },
  data(){
    return{
      showFilterDesktop: false,
      showFilterMobile: false
    }
  },
  methods:{
    updateFilter(form){
      let params = {}
      let query = {}

      for (const key in form.elements) {
        if (Object.hasOwnProperty.call(form.elements, key)) {
          const element = form.elements[key];
          if(element.checked == true){
            params[element.name] = []
          }
        }
      }

      for (const key in form.elements) {
        if (Object.hasOwnProperty.call(form.elements, key)) {
          const element = form.elements[key];
          if(element.checked == true){
            params[element.name].push(element.value)
          }
        }
      }

      for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
          const element = params[key];
          query[key] = element.join(',');
        }
      }

      this.$router.push({ path: this.$route.path, query: query })
    }
  }
}

</script>

<style lang='scss' scoped>
  .filter__desktop{
    background: var(--super_bright_gray);
  }

  .filter__btn-show-filter-desktop{
    border: none;
    background: var(--super_bright_gray);
    padding: .9em .75em .8em 1em;
    font-weight: bold;
    font-size: 2em;
    line-height: 1.2;
    color: var(--blue);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 0 .5em;
    align-items: center;
    width: 100%;
    text-align: left;
    & svg{
      display: block;
      width: 1.2em;
      height: 1.2em;
    }
  }

.filter-desktop__wrap-items{
  padding: 16px 21px 32px 22px;
  position: relative;
  &:before{
    content: '';
    display: block;
    width: calc(100% - 43px);
    border: 1px solid var(--gray);
    position: absolute;
    top: 0;
    left: 22px;
    opacity: 0.3;
  }
}
  .filter__mobile{
    display: none;
  }
  .filter__btn-show-filter-mobile{
    border: none;
    background: none;
    padding: 0;
    font-weight: bold;
    font-size: 14px;
    line-height: 2;
    color: var(--blue);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 0 5px;
    align-items: center;
    text-align: left;
    & svg{
      display: block;
      width: 1.71em;
      height: 1.71em;
    }
  }
  .filter-mobile__wrap-items{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--white);
    z-index: 40;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .filter-mobile__middle{
    overflow-y: auto;
    padding: 0 15px;
    &::v-deep .filter-value__icon{
      border: 1px solid var(--gray)
    }
  }
  .filter-mobile__btn{
    font-size: 1.6rem;
  }
  .filter-mobile__footer{
    border-top: 1px solid var(--super_bright_gray);
    padding: 16px;
  }
  .filter-mobile__header{
    display: grid;
    grid-gap: 22px 0;
    padding: 16px 15px 32px;
    border-bottom: 1px solid var(--super_bright_gray);
  }
  .filter-mobile__btn-close{
    padding: 0;
    border: none;
    background: none;
    width: 16px;
    height: 16px;
    justify-self: end;
    & svg{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .filter-mobile__title{
    font-family: var(--font-second);
    font-weight: bold;
    font-size: 24px;
    line-height: 1.16;
    color: var(--blue);
  }
  @media (max-width: 768px) {
    .filter__desktop{
      display: none
    }
    .filter__mobile{
      display: block
    }
  }
</style>