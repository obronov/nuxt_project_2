<template>
  <div class="content-wysiwyg-video">
    <button class="video" type="button" @click="showModalVideo(info)">
      <img :src="info.img_src" :alt="info.img_alt">
      <div class="video__icon">
        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 13L0.499999 25.9904L0.5 0.00961873L23 13Z" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  methods:{
    showModalVideo(item){
      let info = {
        "videoId": item.video_id,
        "nameModal": "modalVideo"
      }

      this.$store.commit('showModalVideo', info);
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wysiwyg-video {
  margin: 0 0 3em;
  font-size: 1em;
}
.video__icon{
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
    width: 2.3em;
    height: 2.6em;
    fill: var(--white);
  }
}
.video {
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border: none;
  background: var(--gray);
  padding: 0;
  font-size: 1em;
  &:focus,
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  &:hover .video__icon,
  &:focus .video__icon{
    background: var(--super_bright_gray);
  }
  &:hover .video__icon svg,
  &:focus .video__icon svg{
    fill: var(--blue);
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    transition: .5s;
  }
}


@media screen and  (max-width: 768px) {
  .video {
    width: calc(100% + 30px);
    margin: 0 -15px;
  }
}
@media screen and (max-width: 576px) {
  .content-wysiwyg-video{
    margin: 0 0 6em;
  }
}
</style>
