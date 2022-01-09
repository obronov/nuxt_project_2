<template>
  <ul class="directions-content container">
    <li class="directions-content__item" v-for="item in directions.items" :key="item.slug">
     
      <NuxtLink class="direction-preview" :to="getRootLink() + 'directions/' + item.slug" ref="imgBox">
        <img 
          v-if="$device.isDesktop"
          :src="require(`@/assets/images/design/direction_${item.id_direction}_mini.png`)" 
          :alt="item.name" 
          class="direction-preview__img"
          :class="item.id_direction"
        >

        <img 
          v-else
          :src="require(`@/assets/images/design/direction_${item.id_direction}_mini_main.png`)" 
          :alt="item.name" 
          class="direction-preview__img"
          :class="item.id_direction"
        >
        <div class="direction-preview__info">
          <div class="direction-preview__title">{{item.name}}</div>
          <div class="direction-preview__btn btn btn-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
              <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
              <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
              <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
            </svg>
          </div>
        </div>

      </NuxtLink>
    </li>
    <li class="directions-content__link">
      <NuxtLink class="direction-link-catalog" :to="getRootLink() + 'catalog'">
        <span>{{directions.link_name_catalog}}</span>
        <div class="direction-link-catalog-btn btn btn-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
            <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
            <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
            <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
          </svg>
        </div>
      </NuxtLink>
    </li>
    <li class="directions-content__download">
      <a class="direction-download-catalog" download :href="directions.file_catalog.src">
        <span>{{directions.file_catalog.title}}</span>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4944 24.1208L11.0548 18.6958C10.8242 18.466 10.6945 18.1538 10.6945 17.8281C10.6945 17.5025 10.8242 17.1903 11.0548 16.9604C11.5399 16.4956 12.3051 16.4956 12.7902 16.9604L16.1298 20.3146V5.6C16.1298 4.92345 16.6783 4.375 17.3548 4.375C18.0314 4.375 18.5798 4.92345 18.5798 5.6V20.3146L21.9194 16.9604C22.4045 16.4956 23.1697 16.4956 23.6548 16.9604C23.8855 17.1903 24.0151 17.5025 24.0151 17.8281C24.0151 18.1538 23.8855 18.466 23.6548 18.6958L18.2152 24.1208C17.9907 24.3555 17.6796 24.4873 17.3548 24.4854C17.0294 24.4909 16.7168 24.3584 16.4944 24.1208ZM24.9673 12.2792H26.7319C30.4014 12.3589 33.3158 15.3906 33.2507 19.0604V24.6167C33.3158 28.2865 30.4014 31.3182 26.7319 31.3979L7.97775 31.2812C4.30824 31.2015 1.39388 28.1698 1.459 24.5V18.9437C1.41597 17.1736 2.07914 15.459 3.30216 14.1786C4.52517 12.8981 6.20747 12.157 7.97775 12.1187H9.74234C10.4189 12.1187 10.9673 12.6672 10.9673 13.3438C10.9673 14.0203 10.4189 14.5687 9.74234 14.5687H7.97775C6.85579 14.6028 5.79416 15.0846 5.02973 15.9066C4.26531 16.7285 3.86171 17.8223 3.909 18.9437V24.4562C3.86171 25.5777 4.26531 26.6715 5.02973 27.4934C5.79416 28.3154 6.85579 28.7972 7.97775 28.8312L26.7319 29.0354C27.8539 29.0013 28.9155 28.5196 29.6799 27.6976C30.4444 26.8756 30.848 25.7819 30.8007 24.6604V19.1042C30.848 17.9827 30.4444 16.8889 29.6799 16.067C28.9155 15.245 27.8539 14.7632 26.7319 14.7292H24.9673C24.2908 14.7292 23.7423 14.1807 23.7423 13.5042C23.7423 12.8276 24.2908 12.2792 24.9673 12.2792Z"/>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>

import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    directions: Object
  },  
  methods:{
    moveImg(imgBox){
      let self = this;
      const speed = 0.5;
      const ratio = 20;

      let positionX= 0, positionY = 0;
      let coordXprocent = 0, coordYprocent = 0;

      let setMouseParallaxStyle = (positionX, positionY, coordXprocent, coordYprocent) => {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = (positionX + (distX * speed)) / ratio;
        positionY = (positionY + (distY * speed)) / ratio;

        imgBox.$el.style.setProperty('--offsetTop', `${positionY}%`)
        imgBox.$el.style.setProperty('--offsetLeft', `${positionX}%`)

      }
      
      imgBox.$el.addEventListener('mousemove', (event)=>{
        const parallaxWidth = imgBox.$el.offsetWidth;
        const parallaxHeight = imgBox.$el.offsetHeight;

        const coordX = event.pageX - parallaxWidth / 2;
        const coordY = event.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
 
        setMouseParallaxStyle(positionX, positionY, coordXprocent, coordYprocent);

      });

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$refs.imgBox.forEach(element => {
        this.moveImg(element);
      });
    });
  }
}

</script>

<style lang='scss' scoped>
.directions-content{
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  font-size: 1em;
}
.directions-content__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.direction-preview{
  display: block;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  height: 40em;
  background: var(--super_bright_gray);
  
  &:hover .direction-preview__title,
  &:focus .direction-preview__title{
    color: var(--blue);
  }
}
.direction-preview__img{
  display: block;
  max-width: 100%;
  position: absolute;
  will-change: transform;
  transition: ease;
  transform: translate3d(var(--offsetLeft), var(--offsetTop), 0);
  &.stropy{
    max-width: 23.8em;
    right: -3.4em;
    bottom: 1.9em;
  }
  &.oborudovanie{
    max-width: 14em;
    right: 2.4em;
    bottom: 2.5em;
  }
  &.kanaty{
    max-width: 21.1em;
    bottom: -3.3em;
    right: 0em;
  }
  &.remni{
    max-width: 27.4em;
    bottom: -3em;
    right: -3.5em;
  }

}
.direction-preview__info{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1px;
}

.direction-preview__title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.33;
  transition: .3s;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 1.33em 1em 1em 1.33em;
}
.direction-preview__btn{
  margin: 0 1.375em 1.1875em 1.375em;
  &:hover,
  &:active{
    background: var(--blue);
  }
  & svg,
  &:hover:not(:disabled) svg,
  &:focus:not(:disabled) svg{
    fill: var(--white);
  }
}

.directions-content__link{
  grid-column: 1/3;
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.directions-content__download{
  grid-column: 3/5;
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.direction-link-catalog, .direction-link-catalog:visited{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.16;
  color: var(--gray);
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 .83em;
  align-items: center;
  padding: 1em 1em 1em 1.33em;
  height: 100%;
  background-size: cover;
  background: url('~/assets/images/design/direction-link-catalog.png') no-repeat;
  &:hover .direction-link-catalog-btn,
  &:focus .direction-link-catalog-btn{
    background: var( --super_bright_gray);
    color: var(--blue);
    & svg{
      fill: var(--blue);
    }
  }
}
.direction-link-catalog-btn{
  font-size: 0.66em;
}
.direction-download-catalog{
    font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.16;
  color: var(--white);
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 .83em;
  align-items: center;
  background: var(--blue);
  padding: 1em 1em 1em 1.33em;
  height: 100%;
  transition: .3s;
  & svg{
    display: block;
    width: 1.45em;
    height: 1.45em;
    fill: var(--white);
    transition: inherit;
  }
  &:hover,
  &:focus{
    background: var( --super_bright_gray);
    color: var(--blue);
    & svg{
      fill: var(--blue);
    }
  }
}
@media screen and (max-width: 768px) {
  .direction-preview__title{
    font-size: 18px;
    margin: 15px;
    max-width: 11em;
  }
  .directions-content{
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
  .direction-preview__btn{
    font-size: 2.5em;
    margin: 15px;
  }
  .direction-preview{
    height: 30em;
  }
  .direction-preview__img{
    &.stropy{
      max-width: 176px;
      right: -10px;
      bottom: 22px;
    }
    &.oborudovanie{
      max-width: 96px;
      right: 8px;
      bottom: 26px;
    }
    &.kanaty{
      max-width: 110px;
      bottom: -28px;
      right: 0;
    }
    &.remni{
      max-width: 168px;
      bottom: -65px;
      right: -53px;
    }

  }
  .directions-content__link,
  .directions-content__download{
    grid-column: initial;
  }
  .direction-link-catalog, .direction-link-catalog:visited{
    background: var( --super_bright_gray);
    color: var(--blue);
    font-size: 16px;
    line-height: 1.75;
    grid-gap: 0 .8em;
    grid-template-columns: auto auto;
    justify-content: center;
    padding: .47em;
    & svg{
      fill: var(--blue);
    }
  }
  .direction-link-catalog-btn{
    font-size: 0.4em;
    padding: 0;
    background: var( --super_bright_gray);
  }
  .direction-download-catalog{
    font-size: 16px;
    line-height: 1.75;
    grid-gap: 0 .8em;
    grid-template-columns: auto auto;
    justify-content: center;
    padding: .47em;
    & svg{
      width: 1.25em;
      height: 1.25em;
    }
  }
}
</style>