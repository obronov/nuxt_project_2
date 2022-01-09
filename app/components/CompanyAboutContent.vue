<template>
  <div class="company">
    <div class="company__video">
      <button v-if="!showVideo" class="company__video-btn" type="button" @click="showVideo = !showVideo" >
        <img class="company__video-img" 
          :src="aboutCompany.video_preview_src" 
          :alt="aboutCompany.video_preview_alt"
        >
        <div class="company__video-icon">
          <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 13L0.499999 25.9904L0.5 0.00961873L23 13Z" />
          </svg>
        </div>
      </button>
      <iframe v-else width="100%" height="100%" :src="`https://www.youtube.com/embed/${aboutCompany.video_id}?autoplay=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="company__text container">
      <div class="company__text-title-subtitle">
        <h2 class="company__title" 
          v-if="aboutCompany.title" 
          v-html="cnangeColorTitle(15, aboutCompany.title)"
        ></h2>
        <div class="company__mission">
          <h3 class="company__mission-title" v-if="aboutCompany.subtitle" v-html="aboutCompany.subtitle"></h3>
          <p class="company__mission-description" v-if="aboutCompany.description" v-html="aboutCompany.description"></p>
        </div>
      </div>
      <div class="company__text-content" :class="{'columns-two': aboutCompany.text_1 && aboutCompany.text_2}">
        <div class="company__text-content-column" v-if="aboutCompany.text_1" v-html="aboutCompany.text_1"></div>
        <div class="company__text-content-column" v-if="aboutCompany.text_2" v-html="aboutCompany.text_2"></div>
        <div class="company__wrap-link">
          <Link class="company__link" :url="getRootLink() + 'company'" :text="aboutCompany.link_name" direction="right"/>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    aboutCompany: Object
  },
  data(){
    return{
      showVideo: false
    }
  }
}
</script>

<style lang="scss" scoped>
.company__video{
  height: 72em;
}
.company__video-btn{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  border: none;
  padding: 0;
  height: 100%;
  font-size: 1em;
}
.company__video-img{
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.company__video-icon{
  position: absolute;
  top: 0;
  left: 0;
}
.company__video-icon{
  position: absolute;
  width: 10em;
  height: 10em;
  top: calc(50% - 5em);
  left: calc(50% - 5em);
  background: var(--blue);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  transition: .5s;
  & svg{
    transition: inherit;
    display: block;
    width: 3em;
    height: 3em;
    fill: var(--white);
  }
}
.company__text{
  margin: 4em auto 0;
  padding: 4em 15px 8.6em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 2em;
  position: relative;
  &:before{
    content: '';
    display: block;
    width: calc(100% - 30px);
    height: 1px;
    opacity: .3;
    background: var(--gray);
    position: absolute;
    top: 0;
    left: 15px;
  }
}

.company__title{
  margin: 0 0 1.55em;
  background: var(--white);
  padding: 0 0 .75em;
  max-width: 407px;  
  &::v-deep b{
    color: var(--gray)
  }
}
.company__mission{
  background: var(--white);
  padding: 1.5em 0;
  max-width: 407px;
  align-self: start;
}
.company__mission-title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.33;
  color: var(--blue);
  margin: 0 0 .41em;
}
.company__mission-description{
  font-family: var(--font-second);
  font-size: 2.4em;
  line-height: 1.33;
  color: var(--blue);
  margin: 0;
}
.company__text-title-subtitle{
  display: grid;
  grid-template-rows: auto 1fr;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAANElEQVRYhe3XsQkAIBADwODQLuhgCrbfPghyB2lSpE8y177p0rw3SgMAAHzFJwEAAB5JcgA3CBHFUVRgigAAAABJRU5ErkJggg==')
}
.company__text-content{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 2.6em 2em;
  &.columns-two{
    grid-template-columns: 1fr 1fr;
    & .company__text-content-column{
      &:first-of-type{
        grid-row: 1/3;
      }
    }
  }
}
.company__text-content-column{
  &::v-deep *{
    margin: 0 0 1.71em;
    &:last-child{
      margin: 0;
    }
  }
  &::v-deep ul li{
    margin: 0;
    padding: 0 0 0 1em;
    &:before{
      width: 3px;
      height: 3px;
      border-radius: 100%;
      background: var(--dark_gray);
      top: 0.7em;
      border: none;
    }
    &:last-child{
      margin: 0;
    }
  }
}

@media screen and (max-width: 992px) {
  .company__text{
    grid-template-columns: 1fr;
    grid-gap: 32px 0;
  }
  .company__title{
    margin: 0 0 50px;
    padding: 0 0 32px;
  }
  .company__mission{
    padding: 0;
  }
  .company__text-title-subtitle{
    background-position: 0 -13px;
  }
  .company__mission-title{
    font-size: 18px;
    line-height: 1.11;
    margin: 0 0 0.33em;
  }
  .company__mission-description{
    font-size: 18px;
    line-height: 1.11;
  }
  .company__wrap-link{
    & .company__link{
      font-size: 14px;
      line-height: 2;
    }
  }
}
@media screen and (max-width: 768px) {
  .company__text-content{
    &.columns-two{
      grid-template-columns: 1fr;
      grid-gap: 16px 0;
      & .company__text-content-column{
        &:first-of-type{
          grid-row: initial;
        }
        &:nth-of-type(2){
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .company__text{
    margin: 6.4em auto 0;
    padding: 4em 15px 6.4em;
  }
  .company__title{
    margin: 0;
  }
  .company__mission{
    padding: 32px 0 0;
  }
  .company__text-content-column{
    &::v-deep *{
      margin: 0 0 1.14em;
    }
  }
  .company__text-title-subtitle{
    background: none;
    &:before{
      content: '';
      display: block;
      height: 50px;
      grid-row: 2;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAANElEQVRYhe3XsQkAIBADwODQLuhgCrbfPghyB2lSpE8y177p0rw3SgMAAHzFJwEAAB5JcgA3CBHFUVRgigAAAABJRU5ErkJggg==')
    }
  }
}

</style>
