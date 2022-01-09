<template>
  <div class="content-wysiwyg-file"> 
    <div class="file">
      <div class="file__description" v-if="info.title" v-html="info.title"></div>
      <div class="file__links">
        <a :href="info.link" class="file-link" download>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3109 16.54L7.58086 12.82C7.42269 12.6624 7.33379 12.4483 7.33379 12.225C7.33379 12.0017 7.42269 11.7876 7.58086 11.63C7.91349 11.3113 8.43822 11.3113 8.77086 11.63L11.0609 13.93V3.84C11.0609 3.37608 11.4369 3 11.9009 3C12.3648 3 12.7409 3.37608 12.7409 3.84V13.93L15.0309 11.63C15.3635 11.3113 15.8882 11.3113 16.2209 11.63C16.379 11.7876 16.4679 12.0017 16.4679 12.225C16.4679 12.4483 16.379 12.6624 16.2209 12.82L12.4909 16.54C12.3369 16.7009 12.1235 16.7913 11.9009 16.79C11.6777 16.7937 11.4634 16.7029 11.3109 16.54ZM17.1209 8.42H18.3309C20.8471 8.47468 22.8455 10.5536 22.8009 13.07V16.88C22.8455 19.3964 20.8471 21.4753 18.3309 21.53L5.47086 21.45C2.95462 21.3953 0.956211 19.3164 1.00086 16.8V12.99C0.971355 11.7762 1.4261 10.6005 2.26474 9.72245C3.10338 8.84442 4.25696 8.33621 5.47086 8.31H6.68086C7.14478 8.31 7.52086 8.68608 7.52086 9.15C7.52086 9.61392 7.14478 9.99 6.68086 9.99H5.47086C4.70152 10.0134 3.97354 10.3437 3.44936 10.9074C2.92519 11.471 2.64844 12.221 2.68086 12.99V16.77C2.64844 17.539 2.92519 18.289 3.44936 18.8526C3.97354 19.4163 4.70152 19.7466 5.47086 19.77L18.3309 19.91C19.1002 19.8866 19.8282 19.5563 20.3524 18.9926C20.8765 18.429 21.1533 17.679 21.1209 16.91V13.1C21.1533 12.331 20.8765 11.581 20.3524 11.0174C19.8282 10.4537 19.1002 10.1234 18.3309 10.1H17.1209C16.6569 10.1 16.2809 9.72392 16.2809 9.26C16.2809 8.79608 16.6569 8.42 17.1209 8.42Z" fill="#0057B8"/>
          </svg>
        </a>
        <a :href="info.link" class="file-link" rel="noopener noreferer" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.12549 12.148C9.12549 10.6036 10.3178 9.35166 11.7886 9.35166C13.2595 9.35166 14.4518 10.6036 14.4518 12.148C14.4518 13.6923 13.2595 14.9443 11.7886 14.9443C10.3178 14.9443 9.12549 13.6923 9.12549 12.148ZM10.8638 12.1475C10.8638 12.6847 11.2785 13.1202 11.7901 13.1202C12.3017 13.1202 12.7164 12.6847 12.7164 12.1475C12.7164 11.6104 12.3017 11.1749 11.7901 11.1749C11.2785 11.1749 10.8638 11.6104 10.8638 12.1475Z" fill="#0057B8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2425 7.00519L22.0825 11.0659C22.3955 11.329 22.5776 11.7271 22.5776 12.148C22.5776 12.5689 22.3955 12.967 22.0825 13.23L17.2425 17.2908C14.0525 19.9643 9.52511 19.9643 6.33513 17.2908L1.49513 13.23C1.18217 12.967 1 12.5689 1 12.148C1 11.7271 1.18217 11.329 1.49513 11.0659L6.33513 7.00519C9.52511 4.3316 14.0525 4.3316 17.2425 7.00519ZM7.41197 15.9291C9.9737 18.0699 13.6039 18.0699 16.1657 15.9291L20.5888 12.148L16.1657 8.42766C13.6039 6.28685 9.9737 6.28685 7.41197 8.42766L2.98881 12.148L7.41197 15.9291Z" fill="#0057B8"/>
          </svg>
        </a>
      </div>
      <div class="file__dots">
        <svg width="412" height="128" viewBox="0 0 412 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="412" height="128" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.0485437" height="0.15625">
          <use xlink:href="#image0_1294_7766" transform="scale(0.00485437 0.015625)"/>
          </pattern>
          <image id="image0_1294_7766" width="10" height="10" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNEOTUwODAzNDdDQzExRUE5OUM1QzMwMzJBREVBNjU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNEOTUwODA0NDdDQzExRUE5OUM1QzMwMzJBREVBNjU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q5NTA4MDE0N0NDMTFFQTk5QzVDMzAzMkFERUE2NTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q5NTA4MDI0N0NDMTFFQTk5QzVDMzAzMkFERUE2NTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz75/lnHAAAALElEQVR42mJkKN3/n4GBgfF/lwMDPsAEUsRABGD8//8/MerAJo4qxAkAAgwAK3MHDs6FWa8AAAAASUVORK5CYII="/>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    info: Object
  }
}

</script>

<style lang='scss' scoped>

.file{
  padding: -0 0 0 4em;
  background: var(--white);
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1.7fr;
  grid-template-rows: 1fr auto;
  grid-gap: 1.6em 2em;
  max-width: 793px;
}
.file__dots{
  grid-row: 1/3;
  grid-column: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  margin: 4em 0 0;
  & svg{
    display: block;
    min-width: 412px;
  }
}
.file__description{
  grid-row: 1;
  grid-column: 1;
  font-family: var(--font-second);
  color: var(--blue);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 133%;
  margin: 0 0 .5em;
  padding: 1.33em 0 0 0;
}
.file__description::v-deep *{
  color: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  font-size: inherit;
}
.file__links{
  grid-row: 2;
  grid-column: 1;
}

.file__links{
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0 1.6em;
  justify-content: start;
  align-items: center;
  margin: 0 0 2.4em;
}
.file-link{
  display: block;
  width: 3em;
  height: 3em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 992px) {
  .file__description{
    font-size: 2.4em;
    line-height: 133%;
  }
}
@media screen and (max-width: 768px) {
  .file{
    grid-template-columns: 1fr 1fr;
    grid-gap: 6em 2.66em;
    padding: 0;
  }
  .file__description{
    font-size: 3em;
    grid-row: 1;
    grid-column: 1/3;
    margin: 0;
    padding: 1.33em 0 0 1.33em;
  }
  .file__links{
    padding: 0 0 0 4em;
    margin: 0 0 2.66em;
  }
  .file__dots{
    grid-row: 2;
    grid-column: 2;
    margin: 0;
    max-height: 52px;
  }
}
@media screen and (max-width: 576px) {
  .file{
    grid-gap: 7.2em 3.2em;
  }

  .file__description{
    font-size: 3.6em;
  }
  .file__links{
    padding: 0 0 0 4.8em;
    margin: 0 0 3.2em;
  }
}
</style>