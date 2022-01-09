<template>
  <NuxtLink class="link" :class="{'right': direction=='right', 'left': direction=='left'}" :to="url">
    <div class="link__text">{{text}}</div>
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2704 8C17.2703 8.19885 17.1911 8.38949 17.0504 8.53L10.0504 15.53C9.85752 15.7176 9.57919 15.788 9.32029 15.7147C9.0614 15.6414 8.86127 15.4355 8.79529 15.1747C8.72932 14.9138 8.80752 14.6376 9.00045 14.45L15.4504 8L9.00045 1.55C8.79979 1.36303 8.7172 1.08145 8.78506 0.815715C8.85292 0.549981 9.06042 0.342483 9.32616 0.274619C9.59189 0.206756 9.87348 0.289351 10.0604 0.490004L17.0604 7.49C17.1927 7.62716 17.2678 7.8095 17.2704 8Z"/>
      <path d="M17.2617 8C17.2563 8.41196 16.9237 8.74461 16.5117 8.75L1.51172 8.75C1.24377 8.75 0.996174 8.60705 0.8622 8.375C0.728225 8.14295 0.728225 7.85705 0.8622 7.625C0.996174 7.39295 1.24377 7.25 1.51172 7.25L16.5117 7.25C16.9237 7.25539 17.2563 7.58804 17.2617 8Z"/>
      <path d="M17.2704 8C17.2703 8.19885 17.1911 8.38949 17.0504 8.53L10.0504 15.53C9.85752 15.7176 9.57919 15.788 9.32029 15.7147C9.0614 15.6414 8.86127 15.4355 8.79529 15.1747C8.72932 14.9138 8.80752 14.6376 9.00045 14.45L15.4504 8L9.00045 1.55C8.79979 1.36303 8.7172 1.08145 8.78506 0.815715C8.85292 0.549981 9.06042 0.342483 9.32616 0.274619C9.59189 0.206756 9.87348 0.289351 10.0604 0.490004L17.0604 7.49C17.1927 7.62716 17.2678 7.8095 17.2704 8Z"/>
      <path d="M17.2617 8C17.2563 8.41196 16.9237 8.74461 16.5117 8.75L1.51172 8.75C1.24377 8.75 0.996174 8.60705 0.8622 8.375C0.728225 8.14295 0.728225 7.85705 0.8622 7.625C0.996174 7.39295 1.24377 7.25 1.51172 7.25L16.5117 7.25C16.9237 7.25539 17.2563 7.58804 17.2617 8Z"/>
    </svg>
  </NuxtLink>
</template>

<script>

export default {
  props:{
    url: String,
    text: String,
    direction: String
  }
}

</script>

<style lang='scss' scoped>
.link, .link:visited {
  font-family: var(--font-second);
  font-size: 1.6rem;
  line-height: 175%;
  font-weight: bold;
  color: var(--blue);
  transition: .3s;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0 .625em;
  align-items: center;
  text-decoration: none;
  &.link_titleBox{    
    color: var(--white);
    &:hover,
    &:focus{
      color: var(--gray);
      & svg {
        fill: var(--gray);
      }
    }
    svg {
      fill: var(--white);
    }
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
      line-height: 200%;
    }
  }
  &.link_titleBox-second{    
    color: var(--blue);
    svg {
      fill: var(--blue);
    }
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
      line-height: 200%;
    }
  }
  &.link_titleBox-third{    
    color: var(--white);
    svg {
      fill: var(--white);
    }
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
      line-height: 200%;
    }
  }
  &.left{
    & .link__text{
      grid-column: 2;
      grid-row: 1;
    }
    & svg{
      transform: rotate(180deg);
    }
  }
  &:hover,
  &:focus{
   color: var(--dark_gray);
    & svg{
      fill: var(--dark_gray);
    }
  }
  &:active{
    color: var(--dark_blue);
    & svg {
      fill: var(--dark_blue);
    }
  }
  & svg{
    transition: .3s;
    fill: var(--blue);
    display: block;
    width: 1.125em;
    height: 1em;
  }
}

@media (max-width: 768px) {
  .page-nav {
    a.link {
      color: transparent;

      &.left {
        text-align: left;
      }

      &.right {
        text-align: right;
      }

      &:hover,
      &:focus {
        .link__text {
          &::first-line {
            color: var(--dark_gray);
          }
        }
      }

      .link__text {
        display: block;
        width: 105px;
        word-wrap: break-word;
        font-size: 0;
        line-height: 0;

        &::first-line {
          font-size: 1.6rem;
          line-height: 2.8rem;
          color: var(--blue);
        }
      }
    }
  }
}
</style>
