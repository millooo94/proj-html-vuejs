<template>
  <div>
    <section class="download-and-social">
      <div class="container p-3">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto right-block d-flex justify-content-between align-items-center">
            <div>Download App <button>iOS</button></div>
            <span>Advertise with us</span>
          </div>
          <div class="col-auto left-block d-flex align-items-center">
            <font-awesome-icon
              v-for="(item) in navigationData.social"
              :key="item"
              :icon="`fa-brands fa-${item}`"
            />
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
          >
            <a
              href="#"
              class="text-decoration-none"
            >{{ item }}</a>
          </li>
          <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>
        </ul>
      </nav>
    </section>
  </div>
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
.right-block {
  gap: 1.5rem;
  font-size: .8rem;
  color: #6a6b6c;
  button {
    padding: .3em .6em !important;
    border-radius: 3px;
    border: none !important;
    font-size: .5rem;
    background-color: #fc7525;
    color: white;
    font-weight: bold;
  }
}
.left-block {
  gap: 1.5rem;
  font-size: .9rem;
  color: #6a6b6c;
}

.logo-section {
  padding: 2rem;
}
.navigation-section ul {
  list-style: none;
  gap: 3rem;
  font-size: 1rem;
  font-weight: bold;
  color: #262628;
  a {
    color: black;
    &:visited, &:hover, &:active {
        color: inherit;
      }
  }
}

</style>
