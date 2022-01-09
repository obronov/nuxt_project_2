<template>
  <div class="gallery-wrapper">
    <div class="container">
      <SkeletonScaffold :primary="getColor('super_bright_gray')">
        <div class="gallery-info">
          <div v-mBox v-mDark class="skeleton-title"></div>
          <div v-mBox v-mDark class="skeleton-qty"></div>
        </div>
        <div class="gallery-list">
          <div class="gallery-item" v-for="(item, index) in gallery" :key="index">
            <div v-mBox v-mLight class="skeleton-img"></div>
          </div>
        </div>
      </SkeletonScaffold>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props: {
    gallery: Array
  }
}
</script>

<style lang="scss" scoped>
.skeleton-title {
  width: 50%;
}

.skeleton-qty {
  width: 20%;
}

.skeleton-img {
  width: 100%;
  height: 100%;
}

.gallery-wrapper {
  padding: 80px 0;
  background: var(--bright_gray);
  border-bottom: 1px solid #d8d8d8;
}

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
  padding: 40px 0 60px;
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

.gallery-item__video {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: 9;
    width: 50px;
    height: 50px;
    background-color: var(--blue);
    background-image: url('~@/static/img/play.svg');
    background-size: 12px;
    background-position: 20px center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
}

@media (max-width: 1200px) {
  .gallery-item {
    height: 220px;
    margin: 0 1% 20px 1%;
  }
}

@media (max-width: 768px) {
  .gallery-wrapper {
    padding: 50px 0;
  }

  .gallery-title {
    font-size: 3.2rem;
  }

  .gallery-qty {
    font-size: 1.6rem;
  }

  .gallery-list {
    padding: 40px 0;
  }

  .gallery-item {
    width: 48%;
    margin: 0 1% 10px 1%;
  }
}

@media (max-width: 576px) {
  .skeleton-title {
    width: 100%;
  }

  .skeleton-qty {
    width: 40%;
  }

  .gallery-wrapper {
    padding: 30px 0;
  }

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
    padding: 30px 0;
  }

  .gallery-item {
    width: 100%;
    height: 200px;
    margin: 0 0 15px;
  }
}
</style>
