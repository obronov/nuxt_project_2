<template>
  <div class="history">
    <div class="history__inner">
      <div class="history__year-main">
        <div class="history__floating-number" ref="floatingYear">{{history.number}}</div>
      </div>
      <ul class="years-list">
        <li class="years-list__item" 
          ref="year"
          :class="{isActive: activeBox == 'year' + index}" 
          v-for="(item, index) in history.years" 
          v-if="item.number"
          :key="'year' + index"
        >
          <div class="years-list__number">{{sliceNumber(item.number)}}</div>
          <div class="years-list__content">
            <ContentWysiwyg v-if="!isEmptyArr(item.content)" :content="item.content"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    history: Object
  },
  data(){
    return{
      activeBox: null
    }
  },
  methods:{
    setActiveState(){
      window.addEventListener('scroll', ()=>{
        try {
            let offseTopFloatingYear = this.$refs.floatingYear.offsetTop;

            this.$refs.year.forEach((element, index) => {
              let offseTopYear = element.offsetTop;
              let heightYear = element.clientHeight; 
              let offsetBottomYear = offseTopYear + heightYear; 

              if(offseTopFloatingYear >= offseTopYear && offseTopFloatingYear <= offsetBottomYear){
                this.activeBox = 'year' + index;
              }

            });
        
        } catch {  }

      });
    },
    sliceNumber(number){
      let partNumber = '';
      let currentNumber = String(number);

      if(currentNumber.length > 0){
        partNumber = currentNumber.slice(2)
      }

      return partNumber
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.setActiveState();
    });
  }
}
</script>

<style lang="scss" scoped>
.history__inner{
  display: grid;
  grid-template-columns: 16.5em 1fr;
  max-width: 925px;
  padding: 0 15px;
  margin: 0 auto;
  overflow: visible;
}
.history__year-main{
  padding: 8em 0;
}
.history__floating-number,
.years-list__number{
  font-weight: 900;
  font-size: 14.4em;
  line-height: 0.8;
  color: var(--blue);
}
.history__floating-number{
  position: sticky;
  top: 5em;
}
.years-list{
  padding: 0;
  margin: 0;
  font-size: 1em;
}
.years-list__item{
  padding: 8em 0;
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 5.3em;
  border-bottom: 1px solid var(--gray);
  &:last-child{
    border: none;
  }
  &:before{
    display: none;
  }
  & .years-list__number{
    color: var(--super_bright_gray);
    transition: .3s;
  }
  &.isActive .years-list__number{
    color: var(--blue);
  }
}
@media screen and (max-width: 1366px) {
  .history__floating-number{
    top: 2.75em;
  }
}
@media screen and (max-width: 1200px) {
  .history__floating-number{
    top: 3.47em;
  }
}
@media screen and (max-width: 992px) {
  .history__floating-number{
    top: 4.47em;
  }
}
@media screen and (max-width: 768px) {
  .history__floating-number,
  .years-list__number{
    font-size: 9em;
  }
  .history__inner{
    grid-template-columns: 10.2em 1fr;
  }
  .history__year-main{
    padding: 5.4em 0;
  }
  .years-list__item{
   padding: 5.4em 0;
   grid-gap: 0 5.3em;
  }
}
@media screen and (max-width: 576px) {
  .history__floating-number,
  .years-list__number{
    font-size: 24px;
  }
  .history__inner{
    grid-template-columns: 27.5px 1fr;
  }
  .years-list__content{
    &::v-deep *{
      font-size: 12px;
      line-height: 1.66;
    }
  }
  .years-list__item{
    grid-gap: 0 16px;
  }
}
</style>
