<template>
  <div>
    <div class="documents-list"> 
      <div class="documents-item" v-for="(item, index) in documents" :key="index">
        <Photoswipe :options="pswipeOptions">
          <button class="documents-item__preview" type="button" >
              <div class="documents-item__show-pop-up" v-pswp="item.img_src"></div>
              <span class="documents-item__title">{{ item.title }}</span>
              <span class="documents-item__icon">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.2704 12C20.2703 12.1988 20.1911 12.3895 20.0504 12.53L13.0504 19.53C12.8575 19.7176 12.5792 19.788 12.3203 19.7147C12.0614 19.6414 11.8613 19.4355 11.7953 19.1747C11.7293 18.9138 11.8075 18.6376 12.0004 18.45L18.4504 12L12.0004 5.55C11.7998 5.36303 11.7172 5.08145 11.7851 4.81571C11.8529 4.54998 12.0604 4.34248 12.3262 4.27462C12.5919 4.20676 12.8735 4.28935 13.0604 4.49L20.0604 11.49C20.1927 11.6272 20.2678 11.8095 20.2704 12V12Z" fill="none"/>
                  <path d="M20.2617 12C20.2563 12.412 19.9237 12.7446 19.5117 12.75L4.51172 12.75C4.24377 12.75 3.99617 12.6071 3.8622 12.375C3.72823 12.1429 3.72823 11.8571 3.8622 11.625C3.99617 11.3929 4.24377 11.25 4.51172 11.25L19.5117 11.25C19.9237 11.2554 20.2563 11.588 20.2617 12V12Z" fill="none"/>
                  <path d="M20.2704 12C20.2703 12.1988 20.1911 12.3895 20.0504 12.53L13.0504 19.53C12.8575 19.7176 12.5792 19.788 12.3203 19.7147C12.0614 19.6414 11.8613 19.4355 11.7953 19.1747C11.7293 18.9138 11.8075 18.6376 12.0004 18.45L18.4504 12L12.0004 5.55C11.7998 5.36303 11.7172 5.08145 11.7851 4.81571C11.8529 4.54998 12.0604 4.34248 12.3262 4.27462C12.5919 4.20676 12.8735 4.28935 13.0604 4.49L20.0604 11.49C20.1927 11.6272 20.2678 11.8095 20.2704 12V12Z" fill="none"/>
                  <path d="M20.2617 12C20.2563 12.412 19.9237 12.7446 19.5117 12.75L4.51172 12.75C4.24377 12.75 3.99617 12.6071 3.8622 12.375C3.72823 12.1429 3.72823 11.8571 3.8622 11.625C3.99617 11.3929 4.24377 11.25 4.51172 11.25L19.5117 11.25C19.9237 11.2554 20.2563 11.588 20.2617 12V12Z" fill="none"/>
                </svg>
              </span>
              <span class="documents-item__bg">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0_1002_4335" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="204" height="73">
                    <rect width="204" height="73" fill="url(#pattern0)"/>
                  </mask>
                  <g mask="url(#mask0_1002_4335)">
                    <rect width="204" height="73" fill="none"/>
                  </g>
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.0980392" height="0.273973">
                      <use xlink:href="#image0_1002_4335" transform="scale(0.00980392 0.0273973)"/>
                    </pattern>
                    <image id="image0_1002_4335" width="10" height="10" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNEOTUwODAzNDdDQzExRUE5OUM1QzMwMzJBREVBNjU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNEOTUwODA0NDdDQzExRUE5OUM1QzMwMzJBREVBNjU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q5NTA4MDE0N0NDMTFFQTk5QzVDMzAzMkFERUE2NTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q5NTA4MDI0N0NDMTFFQTk5QzVDMzAzMkFERUE2NTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz75/lnHAAAALElEQVR42mJkKN3/n4GBgfF/lwMDPsAEUsRABGD8//8/MerAJo4qxAkAAgwAK3MHDs6FWa8AAAAASUVORK5CYII="/>
                  </defs>
                </svg>

              </span>
          </button>
        </Photoswipe>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    documents: Array    
  },
  data() {
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
}
</script>

<style lang="scss" scoped>

.documents-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
}

.documents-item {
  width: 31.3%;
  margin: 0 1% 30px 1%;
  &::v-deep .pswipe-gallery{
    height: 100%;
  }
  &:last-child{
    .documents-item__preview{
      background-color: var(--blue);
      color: var(--white);
    }
    .documents-item__icon {
      svg path {
        fill: var(--white);
      }
    }
  }
  .documents-item__show-pop-up{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .documents-item__preview {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 40px;
    background-color: var(--super_bright_gray);
    text-decoration: none;
    transition: .2s;
    border: none;
    text-align: left;
    color: var(--blue);
    position: relative;
    &:hover,
    &:focus {
      background-color: var(--blue);
      color: var(--white);

      .documents-item__icon {
        left: 50px;

        svg path {
          fill: var(--white);
        }
      }

      .documents-item__bg {
        bottom: 20px;

        svg g rect {
          fill: var(--white);
        }
      }
    }
  }
}

.documents-item__title {
  color: inherit;
  font-size: 2.4rem;
  margin: 0 0 100px;
  transition: .3s;
  display: block;
}

.documents-item__icon {
  position: absolute;
  bottom: 30px;
  left: 40px;
  transition: .3s;
  display: block;
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: var(--blue);
      transition: .3s;
    }
  }
}

.documents-item__bg {
  position: absolute;
  bottom: -10px;
  right: 0;
  transition: .3s;
  display: block;
  svg {
    width: 204px;
    height: 73px;

    g rect {
      fill: var(--blue);
      transition: .3s;
    }
  }
}

@media (max-width: 1200px) {
  .documents-item {
    margin-bottom: 20px;
  }

  .documents-item__title {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {

  .documents-item {
    width: 48%;
    margin-bottom: 15px;
  }

  .documents-item__title {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {

  .documents-item {
    .documents-item__preview {
      padding: 25px;

      &:hover {
        .documents-item__icon {
          left: 35px;
        }

        .documents-item__bg {
          bottom: 0;
        }
      }
    }
  }

  .documents-item__title {
    margin-bottom: 80px;
  }

  .documents-item__icon {
    bottom: 15px;
    left: 25px;
  }

  .documents-item__bg {
    svg {
      width: 150px;
      height: 53px;
    }
  }
}

@media (max-width: 576px) {
  .documents-item {
    width: 100%;
    margin: 0 0 15px;
  }

  .documents-item__title {
    margin-bottom: 60px;
  }
}
</style>
