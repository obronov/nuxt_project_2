<template>
  <header class='header'>
    <div class="header__inner container">
      <HeaderDesktop class='header__desktop' v-if="$device.isDesktop" :common="common"/>
      <HeaderMobile class='header__mobile' v-if="!$device.isDesktop" :common="common"/>
    </div>
  </header>
</template>

<script>
import global from "~/mixins/global";
export default {  
  mixins: [global],
  data(){
    return{
      common: this.$store.state.common,
      showMenuMobile: false,
      switchStateHeader: false,
    }
  },
  methods:{
    fixedeHeader () {
      let header = document.querySelector('.header');
      let heightHeader = header.clientHeight;
      
      window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > heightHeader * 5){
          this.switchStateHeader = true;
        }else{
          this.switchStateHeader = false;
        }
      });
    }
  },
  watch:{
    switchStateHeader(){
      this.$store.commit('setFixedHeader', this.switchStateHeader);      
    },
    $route(){
      this.showMenuMobile = false;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.fixedeHeader();
    });
  }
}

</script>

<style lang='scss' scoped>
.header{  
  border-bottom: 1px solid var(--super_bright_gray);
  background: var(--white);
  &.mainPage {
    position: relative;
    z-index: 10;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    &::v-deep{
      .nav__link, .nav__link:visited,
      .phone:not(.phone_mobile),
      .langLink:not(.langLink_mobile){
        color: var(--white);
        & svg path{
          fill: var(--white);
        }
      }
      .searchLink{
        color: var(--white);
        & svg path{
          stroke: var(--white);
        }
      }
      .btnCall:not(.btnCall_mobile) {
        border: 1px solid var(--white);
        svg{
          fill: var(--white);
        }
      }
      .btnToggleMenu{
        svg rect{
          fill: var(--white);
        }
      } 
      .btnChangeCity{
        color: var(--white);
      }
    } 

  }
}
.mainPage .header{  
  border-bottom: 1px solid red;
}
.header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
}
</style>