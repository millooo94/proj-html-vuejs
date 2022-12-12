<template>
  <section class="navigation">
    <div class="row p-5">
      <div class="col-4 d-flex flex-column align-items-end py-3 px-5 border-end border-1">
        <div class="logo-container">
          <img
            class="w-100"
            src="img/avada-food-logo-mob-2x.png"
            alt="logo avada food"
          >
        </div>
        <div class="col-auto left-block d-flex align-items-center fs-6">
          <a
            v-for="(item, index) in navigationData.social"
            :key="`${index * 29}`"
            title="social-icon"
            aria-label="social-icon"
            href=""
          >
            <font-awesome-icon
              :icon="`fa-brands fa-${item}`"
            />
          </a>
        </div>
      </div>
      <div class="col-2 border-end border-1">
        <ul class="menu d-flex flex-column">
          <li
            v-for="item in navigationData.menu"
            :key="item"
            class="h-100 pb-2 mb-3"
          >
            <a
              class="h-100"
              href="#"
            >{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="contacts col-2 border-end border-1 px-5">
        <h4 class="mb-4 fs-6">
          CONTACT
        </h4>
        <div class="content">
          <div
            v-for="item in contactData"
            :key="item"
            class="content-block d-flex mb-4"
          >
            <div class="icon-containe fs-6">
              <font-awesome-icon :icon="`fa-solid fa-${item.icon}`" />
            </div>

            <div class="text">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 download">
        <h4 class="mb-4 fs-6">
          GET YOUR APP!
        </h4>
        <div class="img-container mb-3">
          <a
            class="h-100"
            href="#"
          >
            <img
              class="img-fluid w-100"
              src="img/download-android.png"
              alt="google play download"
            >
          </a>
        </div>
        <div class="img-container">
          <a
            class="h-100"
            href="#"
          >
            <img
              class="img-fluid w-100"
              src="img/download-app-store.png"
              alt="app store download"
            >
          </a>
        </div>
      </div>
    </div>
    <section class="sub-footer position-relative d-flex justify-content-center align-items-center">
      <div class="chevron-circle">
        <a
          title="chevron-up"
          aria-label="chevron-up"
          class="w-100 h-100 d-flex justify-content-center alig-items-center"
          href="#"
        >
          <font-awesome-icon
            icon="fa-solid fa-chevron-up"
          />
        </a>
      </div>
      <!-- eslint-disable-next-line  -->
      &copy; Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by Wordpress
    </section>
  </section>
</template>

<script>
export default {
  name: 'FooterPageNavigation',
  props: {
    navigationData: Object,
    contactData: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
.logo-container {
  width: 60%;
  margin-bottom: 2rem;
}
.left-block {
  align-self: center;
  transform: translateX(20px);
  gap: 1rem;
  color: $gray;
}
.menu {
  list-style: none;
  font-size: $text_2;
  font-weight: 600;
}
h4 {
    font-family: 'Cabin', sans-serif;
    letter-spacing: .2rem;
    font-size: $text_3;
    color: $primary-color
  }

.contacts {
  font-size: $text_1;
  color: $gray;
  .content > div {
    font-size: $text_1;
    gap: 1rem;
  }
}
.download {
  padding-left: 2rem;

  .img-container {
    width: 60%;
  }
}
.sub-footer {
  height: 1rem;
  background-color: $secondary-color;
  padding: 2.5rem;
  font-size:  $text_0;
}
li {
  width: fit-content;
  position: relative;
    &:hover {
      color: $primary-color
    }
    &:hover::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: $primary-color;
      }
}
.chevron-circle {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #39403e;
  color: white;
  top: 10%;
  left: 4%;
  padding: .9em;
}

</style>
