<template>
  <section class="transports-companies">
    <div class="container">
      <h2 class="transports-companies__title" v-html="info.title"></h2>
      <div class="transports-companies__description" v-html="info.description"></div>
      <ul class='transports-companies__items'>
        <li class='transports-companies__item' 
          v-for="(item, index) in info.items" :key="'del' + index">
          
          <ModalWidget 
            v-if="showWidget == 'del' + index" 
            :maxWidth='500'
            @closeModal="showWidget = null"
          >
            <div class="modal-widget" v-html="item.widget"></div>
          </ModalWidget>

          <div v-else class="delivery">
            <div class="delivery__title">{{item.title}}</div>
            <div class="delivery__description" v-html="item.description"></div>
            <div class="delivery__wrap-btn">
              <button class="btn btn-primary delivery_btn" @click="showWidget = 'del' + index" type="button">{{info.btn_name}}</button>
            </div>
          </div>



        </li>
      </ul>
    </div>
    
  </section>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  },
  data(){
    return{
      showWidget: null
    }
  }
}

</script>

<style lang='scss' scoped>
.modal-widget{
/*   background: var(--white); */
  position: relative;
  display: flex;
  justify-content: center;
}
.transports-companies{
  font-size: 1rem;
  background: var(--white);
  padding: 8em 0 9.6em;
  position: relative;
}
.transports-companies__title{
  color: var(--blue);
}
.transports-companies__description{
  max-width: 79.3em;
  margin: 0 0 5.6em;
}
.transports-companies__items{
  font-size: 1em;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}
.transports-companies__item{
  padding: 0;
  margin: 0;  
  overflow: auto;
  &:before{
    display: none;
  }
}
.delivery{
  padding: 4em 0 0;
  background: var(--super_bright_gray);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.delivery__title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 133%;
  color: var(--blue);
  margin: 0 0 .916em;
  padding: 0 1.66em;
}
.delivery__description{
  padding: 0 4em;
  &::v-deep *{
    margin: 0 0 1em;
    &:last-child{
      margin: 0;
    }
  }
}

.delivery__wrap-btn{
  padding: 3.5em 4em;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 70% auto;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY4IiBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDI2OCAxMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iMjY4IiBoZWlnaHQ9IjExMiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIwLjA3NDYyNjkiIGhlaWdodD0iMC4xNzg1NzEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTAyOV82NDY4IiB0cmFuc2Zvcm09InNjYWxlKDAuMDA3NDYyNjkgMC4wMTc4NTcxKSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzEwMjlfNjQ2OCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlOcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTRJRGM1TGpFMk5EQXpOaXdnTWpBeE9TOHdPQzh4TXkwd01Ub3dOam8xTnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJeExqQWdLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa05FT1RVd09EQXpORGREUXpFeFJVRTVPVU0xUXpNd016SkJSRVZCTmpVM0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rTkVPVFV3T0RBME5EZERRekV4UlVFNU9VTTFRek13TXpKQlJFVkJOalUzSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlEwUTVOVEE0TURFME4wTkRNVEZGUVRrNVF6VkRNekF6TWtGRVJVRTJOVGNpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UTBRNU5UQTRNREkwTjBORE1URkZRVGs1UXpWRE16QXpNa0ZFUlVFMk5UY2lMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejc1L2xuSEFBQUFMRWxFUVZSNDJtSmtLTjMvbjRHQmdmRi9sd01EUHNBRVVzUkFCR0Q4Ly84L01lckFKbzRxeEFrQUFnd0FLM01IRHM2RldhOEFBQUFBU1VWT1JLNUNZSUk9Ii8+CjwvZGVmcz4KPC9zdmc+Cg==');
}
.delivery_btn{
  font-size: 16px;
  line-height: 175%;
}
@media screen and (max-width: 1200px) {
  .transports-companies{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px) {
  .transports-companies{
    font-size: .8rem;
  }
  .transports-companies__items{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3em;
  }
  .delivery__title{
    font-size: 18px;
    margin: 0 0 .916em;
    padding: 0 24px;
  }
  .delivery__description{
    padding: 0 24px;
  }
  .delivery__wrap-btn{
    padding: 40px 24px 24px;
  }

}
@media screen and (max-width: 768px) {
  .transports-companies{
    font-size: .7rem;
  }
  .transports-companies__items{
    grid-template-columns: 1fr;
    grid-gap: 4em;
  }
}
@media screen and (max-width: 576px) {
  .transports-companies{
    font-size: .5rem;
    padding: 6.4em 0 11.2em;
  }
  .delivery{
    padding: 4.8em 0 0;
  }
}

</style>