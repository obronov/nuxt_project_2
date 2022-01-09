<template>
  <section class="branches" :class="{isMain: type== 'main'}" @mouseout.self="currentCity = null">
    <div class="branches__info" :style="{'--offsetLeftInfo': offsetLeftInfo + 'px'}">
      <h2 class="branches__title" v-if="title" v-html="cnangeColorTitle(30, title)"></h2>
      <div class="branches__description" v-if="description" v-html="description"></div>
      <ul class="branches__contacts" v-if="!$device.isMobile">
        <li class="branches__contacts-item" v-for="(item, index) in contacts.branches" :key="index">
          <button class="branches__contacts-btn" type="button" @click="currentCity = item.code">{{ item.name }}</button>
        </li>
      </ul>
      <Link class="linkToContacts" :url="getRootLink() + 'contacts'" :text="linkName" direction="right"/>
    </div>
    <div class="branches__map" v-if="!$device.isMobile" >
      <ul class="point-items">
        <div class="point-items__item moskva">
          <svg class="point__icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4555 14.5435L7.82359 12.092L3.16899 14.5208L4.0772 9.34542L0.353516 5.66821L5.53034 4.94182L7.8917 0.243164L10.1849 4.96451L15.3618 5.7363L11.5927 9.39083L12.4555 14.5435Z" fill="#E30D13"/>
          </svg>
        </div>
        <li class="point-items__item" :class="item.code" v-for="(item, index) in contacts.branches" :key="'map' + index">
          <div class="point" :class="{'isMainOffice': item.code == codeMainOffice}" @mouseover="currentCity = item.code" >
            <svg  class="point__icon" width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.585 12.0709C25.585 17.1169 22.681 21.8949 13.2295 40.9545C4.25331 22.3674 0.874023 17.4844 0.874023 12.0709C0.874023 5.40434 6.40577 0 13.2295 0C20.0533 0 25.585 5.40434 25.585 12.0709Z"/>
              <ellipse cx="13.5838" cy="13.4154" rx="4.23619" ry="4.23669" fill="white"/>
            </svg>

            <div class="point__city">{{item.name}}</div>

            <div class="point__wrap-info" :class="{show: currentCity == item.code}">
              <div class="point__info" @mouseout="currentCity = null">
                <div class="point__info-title" v-if="!isEmptyArr(item.info_office)" v-html="item.info_office[0].title"></div>
                <ul class="point__info-link">
                  <li v-for="(phone, index) in item.info_phone" :key="'phone' + index">
                    <a :href="'tel:' + convertPhone(phone.phone)" class="">{{phone.phone + ' ' + phone.add_number}}</a>
                  </li>
                </ul>
                <ul class="point__info-link">
                  <li v-for="(email, index) in item.info_email" :key="'email' + index">
                    <a :href="'mailto:' + email.email" class="">{{email.email}}</a>
                  </li>
                </ul>
                <div class="point__info-address" v-if="!isEmptyArr(item.info_office)" v-html="item.info_office[0].address"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="branches-map-image">
        <img v-if=" type== 'main'" :src="require('~/assets/images/design/map_image.png')" :alt="translate('alt_map_branches')">
        <img v-else :src="require('~/assets/images/design/map_image_white.png')" :alt="translate('alt_map_branches')">
      </div>
    </div>
  </section>
</template>


<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    contacts: Object,
    type: String,
    title: String,
    description: String,
    linkName: String
  },
  data(){
    return{      
      offsetLeftInfo: 0,
      currentCity: null
    }
  },
  methods:{
    setOffsetInfo(target, ref){
      
      try {
        let refOffset = document.querySelector(ref).offsetLeft;
        let parentOffset = document.querySelector(target).offsetLeft;

        this.offsetLeftInfo = refOffset - parentOffset;
      } catch (error) {
        console.log('Компонент BranchesContent' + error)
       }

    }
  },
  computed:{
    codeMainOffice(){
      let codeMainOffice = ''
      this.contacts.branches.forEach(element => {
        if(!this.isEmptyArr(element.info_office)){
          element.info_office.forEach(infoOffice => {
            if(infoOffice.main_office){
              codeMainOffice = element.code
            }
          });
        }

      });
      return codeMainOffice
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.setOffsetInfo('.branches', '.container');

      window.addEventListener('resize', ()=>{
        this.setOffsetInfo('.branches', '.container');
      })
    });
  }
}
</script>

<style lang="scss" scoped>
.branches {
  font-size: 1rem;
  background-color: var(--bright_gray);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  &.isMain{
    background-color: var(--white);
  }
}

.branches__info {  
  padding: 8em 4em 9.6em 5.5em;
  width: 46.6em;
  will-change: transform;
  transition: .3s;
  transform: translate3d(var(--offsetLeftInfo), 0 ,0);
  align-self: start;
}

.branches__title {
  color: var(--blue);
  &::v-deep b{
    display: block;
    color: var(--gray);
  }
}

.branches__description{
  font-size: 14px;
  line-height: 171%;  
  margin: 0 0 2.28em;
}
.branches__description::v-deep *{
  font-size: inherit;
  line-height: inherit;
  margin: 1em 0;
  &:last-child{
    margin: 0;
  }
}
.branches__contacts {
  padding: 0;
  margin: 3.2em 0;
  column-count: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.3em;
  font-size: 1em;
}
.branches__contacts-item {
  font-weight: 700;
  margin: 0;
}
.branches__contacts-btn {
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 1.6em;
  line-height: 1.2;
  color: var(--blue);
  padding: 0;
  background: none;
  border: none;
  text-align: left;
  &:hover,
  &:focus{    
    color: var(--dark_gray);
  }
  &:active{    
    color: var(--dark_blue);
  }
}
.branches__map {
  position: relative;
  width: 81.2em;
  height: 68.4em;
}
.branches-map-image{

  & img{
    display: block;
    width: 100%;
  }
}
.point-items{
  padding: 0;
  margin: 0;
  font-size: 1em;
}
.point-items__item{
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  &:before{
    display: none;
  }
  &.moskva{
    top: 41%;
    left: 30%;
    & .point__icon{
      width: 1.6em;
      height: 1.5em;
    }
  }
  &.beloretsk{
    top: 70%;
    left: 50.5%;
    & .point__wrap-info{
      left: -1.5em;
    }
  }
  &.ekaterinburg{
    top: 60%;
    left: 59.5%;
    & .point__wrap-info{
      left: -0.6em;
    }
  }
  &.kazan{
    top: 52.7%;
    left: 41.7%;
    & .point__wrap-info{
      left: -2.2em;
    }
  }
  &.krasnodar{
    top: 63.5%;
    left: 6.5%;
    & .point__wrap-info{
      left: -1.3em;
    }
  }
  &.chelyabinsk{
    top: 68%;
    left: 58%;
    & .point__wrap-info{
      left: -1.3em;
    }
  }
  &.naberezhnye_chelny{
    top: 57%;
    left: 42%;
    & .point__wrap-info{
      left: 1em;
    }
  }
  &.surgut{
    top: 55.5%;
    left: 81%;
    & .point__info:after{
      left: 80%;
    }
    & .point__wrap-info{
      left: -19em;
    }
  }
  &.ufa{
    top: 65%;
    left: 48.5%;
    & .point__wrap-info{
      left: -2.4em;
    }
  }
  &.cankt-peterburg,
  &.sankt-peterburg{
    top: 17.5%;
    left: 29%;
    & .point__wrap-info{
      left: .2em;
    }
  }
}
.point__city{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 1em;
  line-height: 124%;
  color:var(--gray);
  text-align: center;
}
.point{
  position: relative;
  & svg{
    fill: var(--blue);
  }
  &.isMainOffice svg{
    fill: #E30D13;
  }
}

.point__icon{
  display: block;
  width: 2.6em;
  height: 4.1em;
  margin: 0 auto;
}
.point__wrap-info{
  position: absolute;
  bottom: 9.1em;
  left: 0;
  /* padding: 0 0 4.1em; */
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  z-index: 10;
  &.show{
    opacity: 1;
    visibility: visible;
  }
}
.point__info{
  background: var(--blue);
  color: var(--white);
  padding: 2em;
  width: 24.2em;
  position: relative;
  &:after{
    content: '';
    display: block;
    width: 2.5em;
    height: 2.5em;
    background: var(--blue);
    transform: rotate(45deg);
    position: absolute;
    top: calc(100% - 1.25em);
    left: 11%;
  }
}
.point__info-title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 1.6em;
  line-height: 150%;
  margin: 0 0 1.25em;
}
.point__info-link{
  padding: 0;
  margin: 0 0 .6em;
  font-size: 1em;
  & li{
    margin: 0;
    padding: 0;
    &:before{
      display: none;      
    }
  }
  & a{
    color: inherit;
    text-decoration: none;
    font-size: 1.2em;
    line-height: 133%;
    &:hover,
    &:focus,
    &:active{
      color: inherit;
    }
  }
}

@media screen and (max-width: 1280px){
  .branches{
    font-size: .8rem;
  }
  .branches__info{
    padding: 8em 4em 9.6em 15px;
    width: 50em;
  }
  .branches__contacts,
  .point-items{
    font-size: 1.25em;
  }
  .point__icon{
    width: 1.9em;
    height: 3.1em;
  }
  .point-items__item{
    &.moskva{
      & .point__icon{
        width: 1.1em;
        height: 1em;
      }
    }
    &.beloretsk{
      top: 70%;
      left: 49.5%;
    }
    &.ekaterinburg{
      top: 60%;
      left: 59.5%;
    }
    &.kazan{
      top: 52.7%;
      left: 41.7%;
    }
    &.krasnodar{
      top: 63.5%;
      left: 6%;
    }
    &.chelyabinsk{
      top: 68%;
      left: 58%;
    }
    &.naberezhnye_chelny{
      top: 57%;
      left: 42%;
    }
    &.surgut{
      top: 55.5%;
      left: 81%;
    }
    &.ufa{
      top: 65%;
      left: 48.5%;
    }
    &.cankt-peterburg{
      top: 18.5%;
      left: 28%;
    }
  }
}

@media screen and (max-width: 1060px){
  .branches{
    /* font-size: .7rem; */
    grid-template-columns: 1fr;
    & .linkToContacts, 
    & .linkToContacts:visited{
      font-size: 1.4rem;
    }
  }
/*   .branches__contacts,
  .point-items{
    font-size: 1.42em;
  }
 */
  .branches__map{
    justify-self: end;
  }
  .branches__info{
    padding: 8em 15px 4em;
    width: 100%;
  }
  .branches__contacts{
    max-width: 50em;
  }
  .branches__description{
    line-height: 142%;  
  }
  
}
@media screen and (max-width: 768px){
  .branches__title {
    &::v-deep b{
      display: inline;
    }
  }
  .branches{
    font-size: .7rem;
  }
  .branches__description{
    margin: 0 0 1.42em;
  }
  .branches__info{
    padding: 4.5em 15px;
  }
}
@media screen and (max-width: 576px){
  .branches{
    font-size: .5rem;
  }

}

</style>
