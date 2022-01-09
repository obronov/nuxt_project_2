<template>
  <div class="contacts__wrapper">
    <div class="container">
      <div class="skeleton__wrapper">
        <SkeletonScaffold :primary="getColor('super_bright_gray')">
          <div class="contacts__row">

            <div class="contacts__info">

              <h2 class="contacts__title">
                <div v-mBox v-mDark v-mRandomWidth></div>
              </h2>

              <div class="contacts__list">
                <div class="contacts__item">
                  <div v-mBox v-mDark v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                </div>
                <div class="contacts__item">
                  <div v-mBox v-mDark v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                </div>
                <div class="contacts__item">
                  <div v-mBox v-mDark v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                </div>
                <div class="contacts__item">
                  <div v-mBox v-mDark v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                </div>
              </div>

              <div class="contacts__list">
                <div class="contacts__item">
                  <div v-mBox v-mDark v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                </div>
                <div class="contacts__item">
                  <div v-mBox v-mDark v-mRandomWidth></div>
                  <div v-mBox v-mLight v-mRandomWidth></div>
                </div>
              </div>

            </div>

            <div class="contacts-map">
              <div v-mBox v-mDark class="skeleton-map"></div>
            </div>

          </div>
        </SkeletonScaffold>
      </div>

    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global]
}
</script>

<style lang="scss" scoped>
.skeleton__wrapper {
  padding: 60px 0;
}

.skeleton-map {
  width: 100%;
  height: 100%;
}

.contacts__wrapper {
  background-color: var(--bright_gray);
  border-bottom: 1px solid #d8d8d8;
}

.contacts__row {
  display: flex;
  flex-wrap: wrap;
}

.contacts__info {
  width: 50%;
  padding: 60px 50px 80px 0;
}

h2.contacts__title {
  margin-bottom: 40px;
  font-size: 4rem;
  color: var(--blue);
}

.contacts__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
}

.contacts__item {
  width: 48%;
  margin: 0 1% 30px 1%;
}

.contacts-map {
  position: relative;
  height: inherit;
  width: 50%;
}

@media (max-width: 1200px) {
  h2.contacts__title {
    font-size: 3.2rem;
  }
}

@media (max-width: 992px) {
  .skeleton__wrapper {
    padding: 40px 0;
  }

  .contacts__info {
    width: 100%;
    padding: 40px 0 60px 0;
  }

  .contacts-map {
    position: relative;
    width: calc(100% + 30px);
    height: 400px;
    margin: 0 -15px;
    overflow: hidden;
  }
}

@media (max-width: 576px) {

  .skeleton__wrapper {
    padding: 30px 0;
  }

  .contacts__info {
    padding: 30px 0;
  }

  h2.contacts__title {
    margin-bottom: 30px;
    font-size: 2.4rem;
  }

  .contacts__item {
    width: 100%;
    margin: 0 0 30px;
  }

  .contacts-map {
    height: 200px;
  }
}
</style>
