<template>
  <form action="/" method="POST" class="form-search"  @submit.prevent="onSearch()">
    <button class="form-search__btn" type="submit">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0887 13.1763C14.2712 12.1041 15.0112 10.572 15.0112 8.87097C15.0112 5.62852 12.3224 3 9.0056 3C5.6888 3 3 5.62852 3 8.87097C3 12.1134 5.6888 14.7419 9.0056 14.7419C10.5823 14.7419 12.0172 14.1479 13.0887 13.1763ZM13.0887 13.1763L17 17" stroke="#0057B8" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <input class="form-search__input"       
      v-model.trim="searchQuery" 
      @input="validForm()" 
      type="search" 
      name="search" 
      :placeholder="translate('search')"
    >
    <div class="form-search__error" v-if="showError">{{translate('search__error')}}</div>
  </form>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data(){
    return{
      searchQuery: '',
      showError: false,
    }
  },
  methods:{
    validForm(){
      if(this.searchQuery.length < 4){
        this.showError = true
      }else{
        this.showError = false
      }
    },
    onSearch(){      
      if(this.searchQuery.length >= 4){        
        this.$router.push({path: 'search', query:{search: this.searchQuery}})
        this.searchQuery = ''
        this.showError = false
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.form-search__btn{
  border: none;
  background: none;
  font-size: 1em;
  width: 2em;
  height: 2em;
  padding: 0;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.form-search{
  border-bottom: 1px solid #DDDDDD;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 1.6em;
  align-items: center;
  padding: 0 0 .8em;
  position: relative;
}
.form-search__input{
  color: var(--dark_gray);  
  font-size: 1.4em;
  line-height: 171%;
  border: none;
  width: 100%;
  background: none;  
  &::placeholder{
    color: var(--dark_gray);
    opacity: 1;
  }
}
.form-search__error{
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  font-size: 1.4em;
  line-height: 171%;
  color: var(--blue);  
  background: #DDDDDD;
  padding: 0.5em;
}
</style>