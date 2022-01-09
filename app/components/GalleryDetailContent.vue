<template>
  <div class="gallery-wrapper">
    <div class="container">

      <div class="gallery-info">
        <h1 class="gallery-title" v-if="title">{{ title }}</h1>
        <p class="gallery-qty"> 
          <span v-if="qtyPhoto">{{ qtyPhoto }} {{qtyPhotoCaption}} </span>
          <span v-if="qtyVideo">{{ qtyVideo }} {{qtyVideoCaption}}</span>
        </p>
      </div>

      <Photoswipe :options="pswipeOptions">
        <div class="gallery-list">
          <div class="gallery-item" v-for="(item, index) in gallery.results" :key="index">

            <button 
              v-if="Boolean(item.video_id)" 
              class="gallery-item__video" 
              type="button" 
              @click="showModalVideo(item)"
            >
              <img :src="item.img_thumb" :alt="item.img_alt">
              <div class="video__icon">
                <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 13L0.499999 25.9904L0.5 0.00961873L23 13Z" />
                </svg>
              </div>
            </button>

            <img v-else :src="item.img_thumb" v-pswp="item.img_src" :alt="item.img_alt">

          </div>
        </div>
      </Photoswipe>

    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  components: {},
  props: {
    sections: Array,
    gallery: Object
  },
  data () {
    return {
      pswipeOptions: {
        bgOpacity: 0.6,
        counterEl: false,
        fullscreenEl: false,
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        clickToCloseNonZoomable: false,
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
      }
    }
  },
  methods:{
    showModalVideo(item){
      let info = {
        "videoId": item.video_id,
        "nameModal": "modalVideo"
      }

      this.$store.commit('showModalVideo', info);
    }
  },
  computed: {
    qtyPhotoCaption(){
      let caption = ''
      let words = this.translate('galleryCaption').photo;

      if(this.$store.state.lang == 'ru'){
        caption = this.declOfNum(this.qtyPhoto, words)
      }else{
        if(this.qtyPhoto == '1'){
          caption = words[0]
        }else{
          caption = words[1]
        }
      }
      return caption
    },
    qtyVideoCaption(){
      let caption = ''
      let words = this.translate('galleryCaption').video;

      if(this.$store.state.lang == 'ru'){
        caption = this.declOfNum(this.qtyVideo, words)
      }else{
        if(this.qtyVideo == 1){
          caption = words[0]
        }else{
          caption = words[1]
        }
      }
      return caption
    },
    title(){
      let title = '';
      this.sections.forEach(element => {
        if(element.slug == this.$route.query.album){
          title =  element.title;
        }
      });

      return title;
    },
    qtyPhoto: function () {
      let count = 0;
       this.gallery.results.forEach(element => {
        if(!element.video_id){
          count++
        }
      });
      return count;
    },
    qtyVideo: function () {
      let count = 0;
       this.gallery.results.forEach(element => {
        if(element.video_id){
          count++
        }
      });

      return count;
    }
  }
}
</script>

<style lang="scss" scoped>

.gallery-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.gallery-title {
  margin: 0;
  font-size: 4rem;
  color: var(--blue);
}

.gallery-qty {
  margin: 0;
  font-size: 1.8rem;

  span {
    padding-left: 20px;
  }
}

.gallery-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
  padding: 40px 0 0;
}

.gallery-item {
  width: 31.3%;
  height: 250px;
  margin: 0 1% 25px 1%;
  background-color: #000;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s;
  }
}

.video__icon{
  position: absolute;
  width: 3.84em;
  height: 3.84em;
  top: calc(50% - 1.92em);
  left: calc(50% - 1.92em);
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
    width: 1.15em;
    height: 1.15em;
    fill: var(--white);
  }
}
.gallery-item__video {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none; 
}

@media (max-width: 1200px) {
  .gallery-item {
    height: 220px;
    margin: 0 1% 20px 1%;
  }
}

@media (max-width: 768px) {

  .gallery-title {
    font-size: 3.2rem;
  }

  .gallery-qty {
    font-size: 1.6rem;
  }

  .gallery-list {
    padding: 40px 0 0;
  }

  .gallery-item {
    width: 48%;
    margin: 0 1% 10px 1%;
  }
}

@media (max-width: 576px) {

  .gallery-info {
    display: block;
  }

  .gallery-title {
    font-size: 2.4rem;
    margin-bottom: 15px;
  }

  .gallery-qty {
    font-size: 1.4rem;
  }

  .gallery-list {
    margin: 0;
    padding: 30px 0 0;
  }

  .gallery-item {
    width: 100%;
    height: 200px;
    margin: 0 0 15px;
  }
}
</style>
