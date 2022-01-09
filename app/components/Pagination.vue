<template>
  <ul class="pagination">
    <li class="pagination-item" v-if="linksPagination">
      <NuxtLink  class="pagination-icon" :to="prev" v-if="prev">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.000915189 7.74903C-0.000739721 7.94787 0.0783914 8.13851 0.219084 8.27903L7.21908 15.279C7.41201 15.4666 7.69034 15.537 7.94924 15.4637C8.20814 15.3904 8.40826 15.1845 8.47424 14.9237C8.54021 14.6628 8.46201 14.3866 8.26908 14.199L1.81908 7.74903L8.26908 1.29903C8.46974 1.11206 8.55233 0.830472 8.48447 0.564738C8.41661 0.299005 8.20911 0.091506 7.94337 0.0236425C7.67764 -0.044221 7.39606 0.0383749 7.20908 0.239028L0.209085 7.23903C0.0768484 7.37618 0.00176655 7.55853 -0.000915189 7.74903Z"/>
          <path d="M0.00976566 7.74902C0.015152 8.16098 0.347803 8.49364 0.759766 8.49902L15.7598 8.49902C16.0277 8.49902 16.2753 8.35607 16.4093 8.12402C16.5433 7.89197 16.5433 7.60607 16.4093 7.37402C16.2753 7.14197 16.0277 6.99902 15.7598 6.99902L0.759766 6.99902C0.347803 7.00441 0.015152 7.33706 0.00976566 7.74902Z"/>
          <path d="M-0.000915189 7.74903C-0.000739721 7.94787 0.0783914 8.13851 0.219084 8.27903L7.21908 15.279C7.41201 15.4666 7.69034 15.537 7.94924 15.4637C8.20814 15.3904 8.40826 15.1845 8.47424 14.9237C8.54021 14.6628 8.46201 14.3866 8.26908 14.199L1.81908 7.74903L8.26908 1.29903C8.46974 1.11206 8.55233 0.830472 8.48447 0.564738C8.41661 0.299005 8.20911 0.091506 7.94337 0.0236425C7.67764 -0.044221 7.39606 0.0383749 7.20908 0.239028L0.209085 7.23903C0.0768484 7.37618 0.00176655 7.55853 -0.000915189 7.74903Z"/>
          <path d="M0.00976566 7.74902C0.015152 8.16098 0.347803 8.49364 0.759766 8.49902L15.7598 8.49902C16.0277 8.49902 16.2753 8.35607 16.4093 8.12402C16.5433 7.89197 16.5433 7.60607 16.4093 7.37402C16.2753 7.14197 16.0277 6.99902 15.7598 6.99902L0.759766 6.99902C0.347803 7.00441 0.015152 7.33706 0.00976566 7.74902Z"/>
        </svg>
      </NuxtLink>
    </li>
    <li class="pagination-item" v-for="(item, index) in linksPagination" :key="index">
      <NuxtLink  class="pagination-link" :class="{'nuxt-link-exact-active nuxt-link-active': setActiveClass() && index == 0}" :to="createUrl(item)">{{item}}</NuxtLink>
    </li>
    <li class="pagination-item" v-if="linksPagination">
      <NuxtLink  class="pagination-icon" :to="next" v-if="next">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5107 7.74903C16.5105 7.94787 16.4314 8.13851 16.2907 8.27903L9.29068 15.279C9.09776 15.4666 8.81943 15.537 8.56053 15.4637C8.30163 15.3904 8.1015 15.1845 8.03553 14.9237C7.96955 14.6628 8.04776 14.3866 8.24068 14.199L14.6907 7.74903L8.24068 1.29903C8.04003 1.11206 7.95743 0.830472 8.0253 0.564738C8.09316 0.299005 8.30066 0.091506 8.56639 0.0236425C8.83213 -0.044221 9.11371 0.0383749 9.30068 0.239028L16.3007 7.23903C16.4329 7.37618 16.508 7.55853 16.5107 7.74903Z"/>
          <path d="M16.5 7.74902C16.4946 8.16098 16.162 8.49364 15.75 8.49902L0.75 8.49902C0.482051 8.49902 0.234456 8.35607 0.100481 8.12402C-0.0334937 7.89197 -0.0334937 7.60607 0.100481 7.37402C0.234455 7.14197 0.482051 6.99902 0.75 6.99902L15.75 6.99902C16.162 7.00441 16.4946 7.33706 16.5 7.74902Z"/>
          <path d="M16.5107 7.74903C16.5105 7.94787 16.4314 8.13851 16.2907 8.27903L9.29068 15.279C9.09776 15.4666 8.81943 15.537 8.56053 15.4637C8.30163 15.3904 8.1015 15.1845 8.03553 14.9237C7.96955 14.6628 8.04776 14.3866 8.24068 14.199L14.6907 7.74903L8.24068 1.29903C8.04003 1.11206 7.95743 0.830472 8.0253 0.564738C8.09316 0.299005 8.30066 0.091506 8.56639 0.0236425C8.83213 -0.044221 9.11371 0.0383749 9.30068 0.239028L16.3007 7.23903C16.4329 7.37618 16.508 7.55853 16.5107 7.74903Z"/>
          <path d="M16.5 7.74902C16.4946 8.16098 16.162 8.49364 15.75 8.49902L0.75 8.49902C0.482051 8.49902 0.234456 8.35607 0.100481 8.12402C-0.0334937 7.89197 -0.0334937 7.60607 0.100481 7.37402C0.234455 7.14197 0.482051 6.99902 0.75 6.99902L15.75 6.99902C16.162 7.00441 16.4946 7.33706 16.5 7.74902Z"/>
        </svg>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    countPage: Number,
    countAll: Number
  },
  data(){
    return{
      numberLinksPagination: 5,
      currentGroupLinksPagination: 0
    }
  },
  methods:{
    setActiveClass(){
      let active = false
      let currentPage = this.$route.query.page;


      if(!currentPage){
        active = true
      }

      return active
    },
    goTop(){
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    },
    setCurrentGroupLinksPagination(){
      let currentNumberPage = Number(this.$route.query.page);

      this.arrLinksPagination.forEach((element, index) => {

        if(element.includes(currentNumberPage)){
          this.currentGroupLinksPagination = index
        }
      });
      
    },
    createUrl(pageNumber){
      let query = this.$route.query;
      let arrQuery = [];
      let newQuery = {};

      for (const key in query) {
        if (Object.hasOwnProperty.call(query, key)) {          
          newQuery[key] = query[key]
        }
      }

      newQuery.page = pageNumber;

      for (const key in newQuery) {
        if (Object.hasOwnProperty.call(newQuery, key)) {
          let element = '';
            element =  key + '=' + newQuery[key];

          arrQuery.push(element)
        }
      }

      return '?' + arrQuery.join('&');
    }
  },
  computed:{

    prev(){
      let url = null;
      let currentPage = this.$route.query.page;

      if(currentPage){
        if(currentPage != 1){
          url = this.createUrl(currentPage - 1)
        }
      }

      return url;
    },
    next(){
      let url = null;
      let currentPage = this.$route.query.page;

      
      if(currentPage){
        if(currentPage != Math.ceil(this.countAll / this.countPage)){
          url = this.createUrl(currentPage * 1 + 1)
        }
      }else{
        url = this.createUrl(2)
      }


      return url;
    },
     linksPagination(){
       this.setCurrentGroupLinksPagination()
       return  this.arrLinksPagination[this.currentGroupLinksPagination]
    },
    arrLinksPagination(){
      let lengthArr = Math.ceil(this.countAll / this.countPage);
      let indexGroupLinks = 0;
      let arr = [];
      let sliced_array = [];
      let array_size = this.numberLinksPagination;

      for (let index = 1; index <= lengthArr; index++) {
        arr.push(index);
      }

      for (let i = 0; i <arr.length; i += array_size) {
          sliced_array.push(arr.slice(i, i + array_size));
      }

      return  sliced_array
    }
  },
  watch:{
    $route(){
      this.setCurrentGroupLinksPagination()
      this.setActiveClass()
      this.goTop()
    }
  }
}

</script>

<style lang='scss' scoped>
.pagination{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0 -5px;
  padding: 0;
  list-style: none;
  font-size: 1em;
}
.pagination-item{
  padding: 0;
  margin: 0 2px;
  &:before{
    display: none;
  }
  &:first-child{
    margin: 0 20px 0 2px;
  }
  &:last-child{
    margin: 0 2px 0 20px;
  }
}
.pagination-link, .pagination-link:visited{
  font-family: var(--font-second);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  padding: .2em;
  color: var(--black);
  background: transparent;
  transition: .3s;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  &:hover,
  &:focus,
  &.nuxt-link-exact-active{
    color: var(--white);
    background: var(--blue);
  }

}
.pagination-icon{
  & svg{
    display: block;
    width: 17px;
    height: 16px;
     fill: var(--blue)
  }
}
@media (max-width: 576px) {
  .pagination-link, .pagination-link:visited{
    font-size: 16px;
  }
  .pagination-icon{
    & svg{
      width: 13px;
      height: 12px;
    }
  }
  .pagination{
    justify-content: center;
  }
}
</style>