<template>
  <ul class="directions-content container">
    <li class="directions-content__item" v-for="item in directions.items" :key="item.slug">
     
      <NuxtLink class="direction-preview" :to="$route.path + '/' + item.slug" ref="imgBox">
        <img 
          :src="require(`@/assets/images/design/direction_${item.id_direction}.png`)" 
          :alt="item.name" 
          class="direction-preview__img"
          :class="item.id_direction"
        >
        <div class="direction-preview__info">
          <div class="direction-preview__title h2">{{item.name}}</div>
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
      const ratio = 30;

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
  grid-template-columns: 1fr 1fr;
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
  height: 30em;
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
    max-width: 45.9em;
    right: -5.2em;
    bottom: 2.1em;
  }
  &.oborudovanie{
    max-width: 26.5em;
    right: -3.1em;
    bottom: -10.5em;
  }
  &.kanaty{
    max-width: 23.2em;
    top: -2.8em;
    right: 0em;
  }
  &.remni{
    max-width: 32.5em;
    top: 6.2em;
    right: -9.3em;
  }

}
.direction-preview__info{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 4em;
}

.direction-preview__title{
  transition: .3s;
  margin: 0 0 .5em;
  color: var(--gray);
  max-width: 9em;
}
.direction-preview__btn{
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
@media screen and (max-width: 768px) {
  .direction-preview__title{
    font-size: 18px;
    line-height: 1.33;
  }
  .directions-content{
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
  .direction-preview__btn{
    font-size: 2.5em;
  }
  .direction-preview__img{
    &.kanaty{
      max-width: 22em;
      right: 0;
      top: -3.6em;
    }
    &.remni{
      max-width: 33.6em;
      right: -10.6em;
      top: 9.2em;
    }
    &.oborudovanie{
      max-width: 19.2em;
      right: 1.6em;
      bottom: 5.2em;
    }
    &.stropy{
      max-width: 35.2em;
      right: -2em;
      bottom: 4.4em;
    }
  }
}
</style>