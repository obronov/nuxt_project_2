<template>
  <div class="video__wrapper">
    <div class="video__item">
      <img :src="video.img_src" :alt="video.alt">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.video__wrapper {
  padding-top: 40px;
}

.video__item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 405px;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: 9;
    width: 100px;
    height: 100px;
    background-color: var(--blue);
    background-image: url('~@/static/img/play.svg');
    background-size: 30px;
    background-position: 38px center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }

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

@media (max-width: 992px) {
  .video__item {
    height: 300px;

    &::before {
      width: 80px;
      height: 80px;
      background-size: 20px;
      background-position: 32px center;
    }
  }
}

@media (max-width: 768px) {
  .video__wrapper {
    width: calc(100% + 30px);
    margin: 0 -15px;
    padding-top: 30px;
  }
}

@media (max-width: 576px) {
  .video__item {
    height: 220px;

    &::before {
      width: 50px;
      height: 50px;
      background-size: 15px;
      background-position: 20px center;
    }
  }
}
</style>
