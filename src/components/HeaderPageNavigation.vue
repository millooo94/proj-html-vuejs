<template>
  <section class="upper-header">
    <section class="download-and-social">
      <div class="container p-3">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto left-block d-flex justify-content-between align-items-center">
            <div class="button-container d-flex align-items-center">
              <div>Download App</div>
              <button>iOS</button>
            </div>
            <span>Advertise with us</span>
          </div>
          <div class="col-auto right-block d-flex align-items-center fs-6">
            <a
              v-for="(item) in navigationData.social"
              :key="item"
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
      </div>
    </section>
    <section class="logo-section d-flex justify-content-center">
      <a href="#">
        <img
          src="/img/avada-food-logo.png"
          alt="logo avada"
        >
      </a>
    </section>
    <section class="navigation-section">
      <nav>
        <ul class="d-flex justify-content-center">
          <li
            v-for="item in navigationData.menu"
            :key="item"
            class="pb-2 h-100"
          >
            <a
              href="#"
              class="text-decoration-none h-100"
            >{{ item }}</a>
          </li>
          <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
        </ul>
      </nav>
    </section>
  </section>
</template>

<script>
export default {
  name: 'HeaderPageNavigation',
  props: {
    navigationData: Object,
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

.upper-header {
  font-family: 'Roboto', sans-serif;
}
.right-block {
  gap: 1.5rem;
  font-size: $text_1;
  color: $gray;

}
.left-block {
  gap: 1.5rem;
  color: $gray;
  font-size: $text_0;
  .button-container {
    gap: .4rem;
    button {
    padding: .4em .6em !important;
    border-radius: 3px;
    border: none !important;
    font-size: .5rem;
    background-color: $primary-color;
    color: white;
    font-weight: 500;
  }
  }
}

.logo-section {
  padding: 2rem;
}
.navigation-section ul {
  list-style: none;
  gap: 3rem;
  font-size: $text_2;
  font-weight: bold;
  color: $black;
  li {
    height: 100%;
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
  span:hover {
  color: $primary-color;
}
}

</style>
