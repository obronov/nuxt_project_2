<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-header">
      <button class="modal-btnClose" type="button" title='Закрыть' @click="closeModal">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.6485 22.9883L16.6563 15.0005L24.6485 7.07142C25.049 6.60753 25.0273 5.91139 24.5987 5.47368C24.1701 5.03597 23.479 5.00427 23.0127 5.40091L14.9971 13.2711L7.12168 5.34209C6.66594 4.88597 5.9299 4.88597 5.47416 5.34209C5.25295 5.56298 5.12853 5.86367 5.12853 6.17735C5.12853 6.49102 5.25295 6.79171 5.47416 7.0126L13.3379 14.9299L5.34563 22.8471C5.12442 23.068 5 23.3687 5 23.6824C5 23.9961 5.12442 24.2968 5.34563 24.5177C5.56614 24.7379 5.86465 24.8606 6.17523 24.8588C6.48011 24.8607 6.77363 24.7424 6.99315 24.5294L14.9971 16.5886L23.0127 24.6588C23.2332 24.879 23.5317 25.0018 23.8423 25C24.1488 24.9987 24.4425 24.8762 24.6602 24.6588C24.8798 24.4364 25.0022 24.1348 25 23.8211C24.9978 23.5074 24.8712 23.2076 24.6485 22.9883Z"/>
        </svg>
      </button>
    </div>
    <div class="modal-container" :style="{'--widthModal': (maxWidth) ? maxWidth + 'px' : '847px' }">
      <div class="modal-content">
        <div class="clock-loader-wrap">          
          <div class="clock-loader"></div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    maxWidth: Number
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
    }
  }
}

</script>

<style lang='scss' scoped>
.modal{
  position: static;
  height: 100%;
  padding: 55px 15px 15px;
}
.modal-content{
  overflow: auto;
}
.modal-btnClose {
    width: 25px;
    height: 25px;
    padding: 3px;
}
.modal-container{
  margin: 0;
  max-width: var(--widthModal);
}
@media screen and (max-width: 992px) {
  .modal-btnClose{
    right: 2.1em;
  }
}
@media screen and (max-width: 380px) {
  .modal {
    padding: 55px 0 15px;
  }
}
</style>