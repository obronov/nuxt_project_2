<template>
  <div class="production__wrapper">

    <section class="page-content">
      <div class="container">

        <div class="page-content__row">

          <div class="page-content__left">
            <div class="text-block">
              <p>18-летний опыт производства позволил компании СтальПром достичь высочайшего уровня качества продукции и стать
              лидером по объему выпускаемого грузоподъемного оборудования.
              </p>
              <p>Компания СтальПром имеет собственный производственно-складской комплекс площадью более 15-и гектаров, который
                состоит из нескольких цехов, складов, офисов, выставочного зала, гаража и прочих сооружений.
              </p>
              <p>Производственно-складская база оснащена необходимым для производства оборудованием, которое постоянно обновляется:
                закупаются современные станки и высокотехнологичное оборудование. Всю производимую продукцию Вы можете увидеть в каталоге.
              </p>
            </div>
          </div>

          <div class="page-content__right">
            <div class="extra-text">
              <p>{{ production.content[1].description }}</p>
            </div>
          </div>

        </div>

        <div class="page-content__row">

          <div class="page-content__left">
            <h2>Наши цеха</h2>
            <div class="text-block">
              <ul>
                <li>Цех по изготовлению канатных и цепных стропов.</li>
                <li>Цех по производству текстильных стропов. Здесь производятся ленточные и круглопрядные стропы, буксировочные и стяжные ремни, высокопрочные мягкие монтажные полотенца.</li>
                <li>Цех по производству текстильной ленты. В подразделении производятся ленты полиэфирные для изготовления стропов.</li>
                <li>Цех по производству комплектующих 3 класса прочности для изготовления канатных стропов.</li>
                <li>Цех по изготовлению траверс и захватов для подъема любых видов грузов, как по чертежам заказчика, так и на основе собственных разработок конструкторского отдела.</li>
                <li>Цех по производству крупногабаритных и нестандартных изделий.</li>
              </ul>
            </div>
          </div>

          <div class="page-content__right"></div>

        </div>


        <div class="page-content__row padding-min">

          <div class="page-content__left">
           
          </div>

          <div class="page-content__right">
            <div class="extra-text">
              <p>{{ production.content[1].description }}</p>
            </div>
          </div>

        </div>

        <div class="page-content__row">

          <div class="page-content__left">
            <h2>Складской комплекс</h2>
            <div class="text-block">
              <p>Компания СтальПром немало внимания уделяет качеству упаковки и бережности хранения на своих складах,
                потому что недостаточно произвести качественный продукт, еще его необходимо качественно упаковать и сохранить.
              </p>
              <p>Именно поэтому специалистами компании разработана высококачественная герметичная упаковка для идеальной
                сохранности текстильных стропов, продукции во время транспортировки и ее удобной погрузки и разгрузки на
                месте монтажа. Траверсы и захваты при отгрузке упаковываются с мягкую ткань, оборачиваемую стрейч-пленкой,
                для исключения потери товарного вида при транспортировке.
              </p>
              <h3>Складской комплекс включает в себя следующие склады:</h3>
              <ul>
                <li>склад готовой продукции;</li>
                <li>склад канатов;</li>
                <li>склады сырья и комплектующих</li>
              </ul>
            </div>
            
          </div>

          <div class="page-content__right"></div>

        </div>

        <div class="page-content__row">

          <div class="page-content__left">
            <h2>Поставщики и материалы</h2>
            <div class="text-block">
              <p>Компания СтальПром изготавливает продукцию только из высококачественных материалов, которые идеально сочетают
                в себе прочность, долговечность, стойкость к различным погодным условиям (возможность изготовления комплектующих
                из высокопрочной стали для холодных климатических условий).
              </p>
              <p>Качество нашей продукции — это первостепенная задача для компании СтальПром, и добиться его возможно только при наличии качественного сырья.</p>
            </div>
            
          </div>

          <div class="page-content__right"></div>

        </div>


        <div class="page-content__row">

          <div class="page-content__left">
            <h2>Технология качества и гарантия</h2>
            <div class="text-block">
              <p>Используемая система менеджмента качества компании ИСО 9001 формирует единые требования и принципы в области
                качества для всех производственных площадок. Наша компания обладает:
              </p>
              <ul>
                <li>специалистами сварочного производства 2 и 3 уровня (система НАКС);</li>
                <li>лабораторией неразрушающего контроля, осуществляющей ультразвуковой и визуально-измерительный контроль;</li>
                <li>лабораторией разрушающего контроля;</li>
                <li>испытательными стендами для заводских испытаний до 100 тонн.</li>
              </ul>
              <p>Вся продукция сертифицирована, декларирована (наличие деклараций таможенного союза, тех. регламент о безопасности
                машин и оборудования) и проходит обязательные заводские испытания по согласованным программам федеральной службы Ростехнадзора.
              </p>
            </div>
          </div>

          <div class="page-content__right">
            <div class="extra-text">
              <p>{{ production.content[1].description }}</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
import global from "~/mixins/global"
import PhotoSlider from '@/components/PhotoSlider'

export default {
  mixins: [global],
  components: {
    PhotoSlider
  },
  props: {
    production: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding-bottom: 80px;
}

.page-content__wrapper {
  padding-right: 33.3%;
  padding-top: 40px;

  &:first-child {
    padding-top: 0;
  }

  h2 {
    margin: 40px 0;
    color: var(--blue);
  }

  h3 {
    margin-bottom: 10px;
    color: var(--blue);
  }
}

.text-block {

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin-bottom: 0;

    li {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.page-content__row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;

  &.padding-min {
    padding-top: 40px;

    .page-content__left {
      .slider__wrapper {
        margin-top: -40px;
      }
    }
  }
}

.page-content__left {
  width: 66.6%;

  h2 {
    color: var(--blue);
  }

  h3 {
    margin-top: 35px;
    margin-bottom: 25px;
    color: var(--blue);
  }
}

.page-content__right {
  width: 33.3%;
  padding-left: 8.33%;
}

.extra-text {
  p {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: var(--gray);
  }
}

</style>
