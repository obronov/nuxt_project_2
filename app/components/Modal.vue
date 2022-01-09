<template>

  <div class="modal" @click.self="closeModal">
    <div class="modal-container" :style="{'--widthModal': (maxWidth) ? maxWidth + 'px' : '834px' }">
      <div class="modal-header">
        <button class="modal-btnClose" type="button" title='Закрыть' @click="closeModal">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6485 17.9883L11.6563 10.0005L19.6485 2.07142C20.049 1.60753 20.0273 0.911385 19.5987 0.473678C19.1701 0.0359716 18.479 0.00426739 18.0127 0.400914L9.99706 8.27113L2.12168 0.342093C1.66594 -0.114031 0.929898 -0.114031 0.474157 0.342093C0.252954 0.562984 0.12853 0.863671 0.12853 1.17735C0.12853 1.49102 0.252954 1.79171 0.474157 2.0126L8.33785 9.92987L0.345627 17.8471C0.124424 18.068 0 18.3687 0 18.6824C0 18.9961 0.124424 19.2968 0.345627 19.5177C0.566136 19.7379 0.864651 19.8606 1.17523 19.8588C1.48011 19.8607 1.77363 19.7424 1.99315 19.5294L9.99706 11.5886L18.0127 19.6588C18.2332 19.879 18.5317 20.0018 18.8423 20C19.1488 19.9987 19.4425 19.8762 19.6602 19.6588C19.8798 19.4364 20.0022 19.1348 20 18.8211C19.9978 18.5074 19.8712 18.2076 19.6485 17.9883Z"/>
          </svg>
        </button>
      </div>
      <div class="modal-content">
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
      this.$store.commit('closeModal')
    }
  }
}

</script>

<style lang='scss' scoped>
.modal{
  background: var(--bgModal);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 15px 10.6em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100vh;  
  font-size: 1rem;
}
.modal-content {
  max-height: calc(100vh - 10em);
  overflow-y: auto;
}
.modal-container{
  max-width: var(--widthModal);
  width: 100%;  
  margin: 6em 0 0;
  background: var(--white);
  padding: 6em 7em 7em;
}
.modal-header{
  position: relative;
}

.modal-btnClose{
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  padding: 0;
  font-size: 1em;
  position: absolute;
  top: -2.8em;
  right: -3.8em;
  transition: .3s;
  svg{
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--gray);
    transition: inherit;
  }

}

.modal__text{
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 4.2em;
  line-height: 140%;
  color: #162E68;
  align-self: start;
  text-align: center;
}
.modal__icon{
  width: 7.6em;
  height: 6.5em;
  display: block;
  stroke: #162E68;
}
@media screen and (max-width: 1366px){
  .modal{
    font-size: .9rem;
  }
}

@media screen and (max-width: 992px){
  .modal{
    font-size: .6rem;
    padding: 15px;
  }
  .modal-btnClose{
    right: 0;
  }
}
@media screen and (max-width: 768px){
  .modal{
    font-size: .6rem;
    padding: 15px;
  }
  .modal-btnClose{
    right: 0;
  }

  .modal-container{
    padding: 6em 3em 7em;
  }
}

@media screen and (max-width: 576px){
  .modal{
    font-size: .4rem;
  }
}
</style>