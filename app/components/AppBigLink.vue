<template>
  <div>
    <a 
      v-if="info.regularLink"
      class="link" 
      :href="info.url" 
      :class="{gray: info.colorSchema == 'gray'}"
      :target="addTargetBlank(info.targetBlank)"
      rel="noopener noreferer"
    >
      <div class="link__header">
        <div class="link__title" v-if="info.title" v-html="info.title"></div>
        <div class="link__text" v-if="info.text" v-html="info.text"></div>
      </div>
      <div class="link__footer" :class="{notIcon: !info.icon}">
        <svg v-if="info.icon == 'arrow'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08144 11.7846 4.81571C11.8524 4.54997 12.0599 4.34247 12.3257 4.27461C12.5914 4.20675 12.873 4.28934 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
          <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z" />
          <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08144 11.7846 4.81571C11.8524 4.54997 12.0599 4.34247 12.3257 4.27461C12.5914 4.20675 12.873 4.28934 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
          <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z" />
        </svg>

        <svg v-if="info.icon == 'download'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3109 16.54L7.58086 12.82C7.42269 12.6624 7.33379 12.4483 7.33379 12.225C7.33379 12.0017 7.42269 11.7876 7.58086 11.63C7.91349 11.3113 8.43822 11.3113 8.77086 11.63L11.0609 13.93V3.84C11.0609 3.37608 11.4369 3 11.9009 3C12.3648 3 12.7409 3.37608 12.7409 3.84V13.93L15.0309 11.63C15.3635 11.3113 15.8882 11.3113 16.2209 11.63C16.379 11.7876 16.4679 12.0017 16.4679 12.225C16.4679 12.4483 16.379 12.6624 16.2209 12.82L12.4909 16.54C12.3369 16.7009 12.1235 16.7913 11.9009 16.79C11.6777 16.7937 11.4634 16.7029 11.3109 16.54ZM17.1209 8.42H18.3309C20.8471 8.47468 22.8455 10.5536 22.8009 13.07V16.88C22.8455 19.3964 20.8471 21.4753 18.3309 21.53L5.47086 21.45C2.95462 21.3953 0.956211 19.3164 1.00086 16.8V12.99C0.971355 11.7762 1.4261 10.6005 2.26474 9.72245C3.10338 8.84442 4.25696 8.33621 5.47086 8.31H6.68086C7.14478 8.31 7.52086 8.68608 7.52086 9.15C7.52086 9.61392 7.14478 9.99 6.68086 9.99H5.47086C4.70152 10.0134 3.97354 10.3437 3.44936 10.9074C2.92519 11.471 2.64844 12.221 2.68086 12.99V16.77C2.64844 17.539 2.92519 18.289 3.44936 18.8526C3.97354 19.4163 4.70152 19.7466 5.47086 19.77L18.3309 19.91C19.1002 19.8866 19.8282 19.5563 20.3524 18.9926C20.8765 18.429 21.1533 17.679 21.1209 16.91V13.1C21.1533 12.331 20.8765 11.581 20.3524 11.0174C19.8282 10.4537 19.1002 10.1234 18.3309 10.1H17.1209C16.6569 10.1 16.2809 9.72392 16.2809 9.26C16.2809 8.79608 16.6569 8.42 17.1209 8.42Z"/>
        </svg>

      </div>
    </a>


    <NuxtLink 
      v-else
      class="link" 
      :to="info.url" 
      :class="{gray: info.colorSchema == 'gray'}"
      :target="addTargetBlank(info.targetBlank)"
      rel="noopener noreferer"
    >
      <div class="link__header">
        <div class="link__title" v-if="info.title" v-html="info.title"></div>
        <div class="link__text" v-if="info.text" v-html="info.text"></div>
      </div>
      <div class="link__footer" :class="{notIcon: !info.icon}">
        <svg v-if="info.icon == 'arrow'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08144 11.7846 4.81571C11.8524 4.54997 12.0599 4.34247 12.3257 4.27461C12.5914 4.20675 12.873 4.28934 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
          <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z" />
          <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08144 11.7846 4.81571C11.8524 4.54997 12.0599 4.34247 12.3257 4.27461C12.5914 4.20675 12.873 4.28934 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
          <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z" />
        </svg>

        <svg v-if="info.icon == 'download'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3109 16.54L7.58086 12.82C7.42269 12.6624 7.33379 12.4483 7.33379 12.225C7.33379 12.0017 7.42269 11.7876 7.58086 11.63C7.91349 11.3113 8.43822 11.3113 8.77086 11.63L11.0609 13.93V3.84C11.0609 3.37608 11.4369 3 11.9009 3C12.3648 3 12.7409 3.37608 12.7409 3.84V13.93L15.0309 11.63C15.3635 11.3113 15.8882 11.3113 16.2209 11.63C16.379 11.7876 16.4679 12.0017 16.4679 12.225C16.4679 12.4483 16.379 12.6624 16.2209 12.82L12.4909 16.54C12.3369 16.7009 12.1235 16.7913 11.9009 16.79C11.6777 16.7937 11.4634 16.7029 11.3109 16.54ZM17.1209 8.42H18.3309C20.8471 8.47468 22.8455 10.5536 22.8009 13.07V16.88C22.8455 19.3964 20.8471 21.4753 18.3309 21.53L5.47086 21.45C2.95462 21.3953 0.956211 19.3164 1.00086 16.8V12.99C0.971355 11.7762 1.4261 10.6005 2.26474 9.72245C3.10338 8.84442 4.25696 8.33621 5.47086 8.31H6.68086C7.14478 8.31 7.52086 8.68608 7.52086 9.15C7.52086 9.61392 7.14478 9.99 6.68086 9.99H5.47086C4.70152 10.0134 3.97354 10.3437 3.44936 10.9074C2.92519 11.471 2.64844 12.221 2.68086 12.99V16.77C2.64844 17.539 2.92519 18.289 3.44936 18.8526C3.97354 19.4163 4.70152 19.7466 5.47086 19.77L18.3309 19.91C19.1002 19.8866 19.8282 19.5563 20.3524 18.9926C20.8765 18.429 21.1533 17.679 21.1209 16.91V13.1C21.1533 12.331 20.8765 11.581 20.3524 11.0174C19.8282 10.4537 19.1002 10.1234 18.3309 10.1H17.1209C16.6569 10.1 16.2809 9.72392 16.2809 9.26C16.2809 8.79608 16.6569 8.42 17.1209 8.42Z"/>
        </svg>

        <svg v-if="info.icon == 'add'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9391 21.9771L12.9367 12.9374L21.9431 12.9732C22.4321 12.9373 22.8136 12.5313 22.8188 12.0412C22.8239 11.5511 22.4509 11.1423 21.9627 11.1028L12.9763 11.0206L13.0067 2.08024C13.0069 1.56441 12.5905 1.14805 12.0747 1.14826C11.8246 1.14809 11.5841 1.2478 11.4067 1.42524C11.2293 1.60268 11.1295 1.84316 11.1297 2.09325L11.0994 11.0203L2.09965 10.9779C1.84956 10.9777 1.60908 11.0774 1.43164 11.2549C1.2542 11.4323 1.15449 11.6728 1.15467 11.9229C1.15484 12.1722 1.25426 12.4105 1.43097 12.5852C1.60239 12.7587 1.8353 12.8579 2.07999 12.8615L11.0997 12.8972L11.0688 21.9967C11.069 22.246 11.1684 22.4843 11.3451 22.659C11.5192 22.8317 11.7547 22.9285 12.0008 22.9287C12.2509 22.9271 12.4907 22.8257 12.6669 22.647C12.8431 22.4684 12.9411 22.2272 12.9391 21.9771Z"/>
        </svg>

      </div>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  props:{
    info: Object
  },
  methods:{
    addTargetBlank(target){
      if(target){
        return '_blank'
      }else{
        return '_self'
      }
    }
  },
  computed:{
    url(){

    }
  }
}

</script>

<style lang='scss' scoped>
.link{
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr auto;
  background: var(--blue);
  font-size: 1em;
  transition: .3s;
  min-height: 19.8em;
  height: 100%;
  width: 100%;
  &:hover,
  &:focus{
    background: var(--super_bright_gray);
    & .link__title{
      color: var(--blue);
    }
    & .link__text{
      color: var(--dark_gray);
    }
    & .link__footer svg{
      fill: var(--blue)
    }
    & .link__footer{
      &:after{
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAA0CAYAAABy6SGJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgB7duxCQAgDETR4JKu6nYK1pbhbN6DtH+CXNVc+14XPb2HUQAAAAAAAAAAAAAAxPl51wv0bAYAAAAAAAAAAAAAAD7w864X6NkMAAAAAAAA0OwAfXJipyPptvAAAAAASUVORK5CYII=')
      }
    }
  }
  &:active{
    background: var(--white);
  }
  & .link__footer svg{
    fill: var(--white)
  }
  &.gray{
    background: var(--super_bright_gray);
    &:hover,
    &:focus{
      background: var(--blue);
      & .link__title,
      & .link__text{
        color: var(--white);
      }
      & .link__footer svg{
        fill: var(--white)
      }
      & .link__footer{
        &:after{
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAA1CAYAAAC5tfIsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7dsxDQAgEATBD0bwrwopT0FLSS4hmRGwCu6qu1cfsx7Q07sZBQAAAAAAAAAAAABAms27XqLnMwAAAAAAAAAAAAAAkGfzrpfo+QwAAAAAAAAAP9oO8Ab2dXu/SQAAAABJRU5ErkJggg==')
        }
      }
    }
    &:active{
      background: var(--dark_blue);
    }
    & .link__title{
      color: var(--blue);
    }
    & .link__text{
      color: var(--dark_gray);
    }
    & .link__footer svg{
      fill: var(--blue)
    }
    & .link__footer{
      &:after{
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAA0CAYAAABy6SGJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgB7duxCQAgDETR4JKu6nYK1pbhbN6DtH+CXNVc+14XPb2HUQAAAAAAAAAAAAAAxPl51wv0bAYAAAAAAAAAAAAAAD7w864X6NkMAAAAAAAA0OwAfXJipyPptvAAAAAASUVORK5CYII=')
      }
    }
  }
}
.link__title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1.33;
  color: var(--white);
  transition: inherit;
}
.link__text{
  font-size: 1.6em;
  line-height: 1.5;
  color: var(--white);
  transition: inherit;
  margin: .9375em 0 0;
}
.link__footer{
  padding: .1em 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 2em;
  justify-content: space-between;
  align-items: end;
  &.notIcon{
    justify-content: end;
    grid-template-columns: auto;
  }
  &:after{
    content: '';
    display: block;
    width: 15.3em;
    height: 5.3em;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAA1CAYAAAC5tfIsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7dsxDQAgEATBD0bwrwopT0FLSS4hmRGwCu6qu1cfsx7Q07sZBQAAAAAAAAAAAABAms27XqLnMwAAAAAAAAAAAAAAkGfzrpfo+QwAAAAAAAAAP9oO8Ab2dXu/SQAAAABJRU5ErkJggg==')
  }
  & svg{
    display: block;
    width: 2.4em;
    height: 2.4em;
    margin:  .5em 0 2.2em  4em;
  }
}

.link__header{
  padding: 3.2em 3.2em 0.5em;
}
@media screen and (max-width: 768px){
  .link__title{
    font-size: 18px;
  }
  .link__text{
    font-size: 14px;
    line-height: 1.42;
  }
  .link__footer{
    & svg{
      width: 3.3em;
      height: 3.3em;
      margin: 0 0 0 4em;
      align-self: center;
    }
    &:after{
      width: 22.5em;
      height: 8.2em;
    }
  }
}
</style>