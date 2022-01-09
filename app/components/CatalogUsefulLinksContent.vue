<template>
  <div class="useful-links-content">
    <h2 
      class="useful-links__title container" 
      v-if="info.page_settings.title_individual_block"
      v-html="cnangeColorTitle(30, info.page_settings.title_individual_block)"
    ></h2>

    <ul class="useful-links__list container">
      <li class="useful-links__item">
        <NuxtLink class="useful-links__link" :to="'/'">
          <div class="useful-links__link-title">{{info.page_settings.title_orders}}</div>
          <div class="useful-links__link-header">
            <div class="useful-links__link-description">{{info.page_settings.description_orders}}</div>
            
            <svg class="useful-links__link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
              <path d="M20.26 12C20.2546 12.412 19.922 12.7446 19.51 12.75L4.51001 12.75C4.24206 12.75 3.99447 12.6071 3.86049 12.375C3.72652 12.1429 3.72652 11.8571 3.86049 11.625C3.99447 11.3929 4.24206 11.25 4.51001 11.25L19.51 11.25C19.922 11.2554 20.2546 11.588 20.26 12Z"/>
              <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
              <path d="M20.26 12C20.2546 12.412 19.922 12.7446 19.51 12.75L4.51001 12.75C4.24206 12.75 3.99447 12.6071 3.86049 12.375C3.72652 12.1429 3.72652 11.8571 3.86049 11.625C3.99447 11.3929 4.24206 11.25 4.51001 11.25L19.51 11.25C19.922 11.2554 20.2546 11.588 20.26 12Z"/>
            </svg>

          </div>
        </NuxtLink>
      </li>
      <li class="useful-links__item">
        <button class="useful-links__link blue" type="button" @click="$store.commit('showModal','formConsultation')">
          <div class="useful-links__link-title">{{info.page_settings.title_consultation}}</div>
          <div class="useful-links__link-header">
            <div class="useful-links__link-description">{{info.page_settings.description_consultation}}</div>
            
            <svg class="useful-links__link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
              <path d="M20.26 12C20.2546 12.412 19.922 12.7446 19.51 12.75L4.51001 12.75C4.24206 12.75 3.99447 12.6071 3.86049 12.375C3.72652 12.1429 3.72652 11.8571 3.86049 11.625C3.99447 11.3929 4.24206 11.25 4.51001 11.25L19.51 11.25C19.922 11.2554 20.2546 11.588 20.26 12Z"/>
              <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
              <path d="M20.26 12C20.2546 12.412 19.922 12.7446 19.51 12.75L4.51001 12.75C4.24206 12.75 3.99447 12.6071 3.86049 12.375C3.72652 12.1429 3.72652 11.8571 3.86049 11.625C3.99447 11.3929 4.24206 11.25 4.51001 11.25L19.51 11.25C19.922 11.2554 20.2546 11.588 20.26 12Z"/>
            </svg>

          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  }
}

</script>

<style lang='scss' scoped>
.useful-links-content{  
  padding: 6.4em 0 8em;
  background: var(--super_bright_gray);
}
.useful-links__title{
  margin: 0 auto 1.4em;
  &::v-deep b{
    color: var(--gray)
  }
}
.useful-links__link, .useful-links__link:visited{
  height: 100%;
  width: 100%;
  text-decoration: none;
  display: block;
  border: none;
  font-size: 1em;
  text-align: left;
  color: var(--blue);
  transition: .3s;
  background: var(--white);
  padding: 0;
  &:hover,
  &:focus{
    color: var(--white);
    background: var(--blue);

    .useful-links__link-header{
      background: var(--blue);
    }
    .useful-links__link-title{
      background: var(--blue);
      background-position: right top;
      background-repeat: no-repeat;
      background-size: 8.16em auto;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAABgCAYAAABCK92TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dsxDQAgEATBD/49Q0PyCKCAy4yAdbBVAAAAAAAAAAAAAPCsudUleno/90YBAAAAAAAAAAAAAAAAAJDGc6un1zzVAAAAAAAAAAAAAAAAAAB5PLd6es1TDQAAAAAAAAAAAAAAAACQx3Orp9c81QAAAAAAAAAAAAAAAAAAeTy3enrNUw2HBcP2joqElLk3AAAAAElFTkSuQmCC');
    }
    .useful-links__link-icon{
      fill: var(--white);
    }
  }
  &.blue{
    color: var(--white);
    background: var(--blue);

    .useful-links__link-header{
      background: var(--blue);
    }
    .useful-links__link-title{
      background: var(--blue);
      background-position: right top;
      background-repeat: no-repeat;
      background-size: 8.16em auto;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAABgCAYAAABCK92TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dsxDQAgEATBD/49Q0PyCKCAy4yAdbBVAAAAAAAAAAAAAPCsudUleno/90YBAAAAAAAAAAAAAAAAAJDGc6un1zzVAAAAAAAAAAAAAAAAAAB5PLd6es1TDQAAAAAAAAAAAAAAAACQx3Orp9c81QAAAAAAAAAAAAAAAAAAeTy3enrNUw2HBcP2joqElLk3AAAAAElFTkSuQmCC');
    }
    .useful-links__link-icon{
      fill: var(--white);
    }
    &:hover,
    &:focus{
      color: var(--blue);
      background: var(--white);
      
      .useful-links__link-header{
        background: var(--white);
      }
      .useful-links__link-title{
        background: var(--white);
        background-position: right top;
        background-repeat: no-repeat;
        background-size: 8.16em auto;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAABgCAYAAACpHGaQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACRSURBVHgB7duxCQAhEETR5Xq++ixNwUxYI6OB92DS38FUAQAAAAAAAAAAAACv/jH39PT0Dl8BAAAAAAAAAAAAAAAAAEAgH2M9vZYPOQAAAAAAAAAAAAAAAAAAkXyM9fRaPuQAAAAAAAAAAAAAAAAAAETyMdbTa/mQAwAAAAAAAAAAAAAAAAAQycdYT6/lQw4XC2YP2/d6WS1sAAAAAElFTkSuQmCC');
      }
      .useful-links__link-icon{
        fill: var(--blue);
      }
    }
  }
}
.useful-links__list{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  font-size: 1em;
}
.useful-links__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.useful-links__link-title{
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  font-family: var(--font-second);
  background: var(--white);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.33;
  color: inherit;
  margin: 0 0 .29em;
  padding: .5em 8.4em .5em 1.66em;
  min-height: 4em;
  transition: inherit;
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 8.16em auto;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAABgCAYAAACpHGaQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACRSURBVHgB7duxCQAhEETR5Xq++ixNwUxYI6OB92DS38FUAQAAAAAAAAAAAACv/jH39PT0Dl8BAAAAAAAAAAAAAAAAAEAgH2M9vZYPOQAAAAAAAAAAAAAAAAAAkXyM9fRaPuQAAAAAAAAAAAAAAAAAAETyMdbTa/mQAwAAAAAAAAAAAAAAAAAQycdYT6/lQw4XC2YP2/d6WS1sAAAAAElFTkSuQmCC');
}
.useful-links__link-description{
  font-size: 1.4em;
  line-height: 1.71;
  color: inherit;
  transition: inherit;
}
.useful-links__link-icon{
  display: block;
  width: 2.4em;
  height: 2.4em;
  fill: var(--blue);
  transition: inherit;
}
.useful-links__link-header{
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 2em;
  align-items: end;
  background: var(--white);
  transition: inherit;
  padding: 0 3.2em 3.2em 4em;
}
@media screen and (max-width: 768px) {
  .useful-links__list{
    grid-template-columns: 1fr;
    grid-gap: 3.2em 0;
  }
  .useful-links__link-title{
    font-size: 18px;
    padding: .5em 8.4em .5em 24px;
    margin: 0 0 22px;
  }
  .useful-links__link-description{
    font-size: 12px;
  }
  .useful-links__link-header{
    padding: 0 24px 24px ;
  }
  .useful-links__link-icon{
    width: 20px;
    height: 20px;
  }
}
@media screen and (max-width: 576px) {
  .useful-links-content{
    padding: 6.4em 0;
  }
  .useful-links__link-description{
    font-size: 10px;
    line-height: 1.4;
  }
  .useful-links__link-title{
    background-size: 8.16em auto;
    padding: 0.5em 5.16em 0.5em 24px;
    background-size: 5.16em auto;
    background-position: right top;
    background-repeat: no-repeat;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABICAYAAAB/XULoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABUSURBVHgB7dnBCQAgEAPBw56tz9IULMLIMQP5poGtAgAAgL/Nte/8Pf0bBQAAAAAAALSgkUb+NFcAAAAAAABoQiON/GmuAAAAAAAA0IRGGvnTXEMOhY1YAeo6kZUAAAAASUVORK5CYII=');
  }
  .useful-links__link, .useful-links__link:visited{
    &:hover,
    &:focus{
      .useful-links__link-title{
        background-position: right top;
        background-repeat: no-repeat;
        background-size: 5.16em auto;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABICAYAAAB/XULoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgB7dlBDQAhEATByfn3fHwQwINkyKZKQBvoBAAAAJ72b7lE78wXAAAAAAAAYAKPtNPzXAEAAAAAAGAGj7TT81wBAAAAAABgBo+00/NcSxasTZ9pVSxIRgAAAABJRU5ErkJggg==');
      }
    }
    &.blue{
      .useful-links__link-title{
        background-size: 5.16em auto;
        background-position: right top;
        background-repeat: no-repeat;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABICAYAAAB/XULoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgB7dlBDQAhEATByfn3fHwQwINkyKZKQBvoBAAAAJ72b7lE78wXAAAAAAAAYAKPtNPzXAEAAAAAAGAGj7TT81wBAAAAAABgBo+00/NcSxasTZ9pVSxIRgAAAABJRU5ErkJggg==');
      }
      &:hover,
      &:focus{
        .useful-links__link-title{
          background-size: 5.16em 72px;
          background-position: right top;
          background-repeat: no-repeat;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABICAYAAAB/XULoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABUSURBVHgB7dnBCQAgEAPBw56tz9IULMLIMQP5poGtAgAAgL/Nte/8Pf0bBQAAAAAAALSgkUb+NFcAAAAAAABoQiON/GmuAAAAAAAA0IRGGvnTXEMOhY1YAeo6kZUAAAAASUVORK5CYII=');
        }
      }
    }
  }
}

</style>