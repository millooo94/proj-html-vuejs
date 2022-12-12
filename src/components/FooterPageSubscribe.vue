<template>
  <div>
    <section class="subscribe d-flex justify-content-center align-items-center ">
      <div class="text">
        <h2 class="section-title text-center">
          Subscribe <span class="e-comm">&</span> Receive A Free Book
        </h2>
        <p class="section-paragraph text-center mt-4">
          Aliquam erat voluptat. Ut quis ligula a magna blandit finibus.
          Suspendisse maximum lacus non nunc lacinia lobortis.
        </p>
        <div class="email mt-5 mb-4">
          <label for="email">
            <input
              id="email"
              placeholder="Insert your email...*"
              class="me-3"
              type="email"
              name="email"
            >
            <button>SUBSCRIBE</button>
          </label>
        </div>
        <!-- eslint-disable-next-line -->
        <span class="subtitle d-flex justify-content-center">Cras porttitor pellentesque sem eu pretium</span>
      </div>
    </section>
    <section class="images">
      <div class="overflow-hidden">
        <div class="row">
          <div class="col-3 p-0">
            <div class="img-container">
              <img
                class="img-fluid"
                :src="popularRecipesData.recipeCard.img"
                :alt="popularRecipesData.recipeCard.title"
              >
            </div>
          </div>
          <div
            v-for="(item, index) in
              popularRecipesData.recipeImages.slice(0, 3)"
            :key="`${index * 65}`"
            class="col-3 p-0"
          >
            <div class="img-container">
              <img
                class="img-fluid"
                :src="item.img"
                :alt="item.title"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FooterPageSubscribe',
  props: {
    popularRecipesData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';

.section-title {
  font-family: "Vidaloka", serif;
  font-size: $text_4;
}
.subscribe {
  background-image: url('../../public/img/subscribe-sec-bg.png');
  background-size: 150%;
  background-position-y: 60%;
  background-position-x: 65%;
  padding: 10rem;
}
.section-paragraph {
  font-size: $text_1;
}
.subtitle {
  font-size: $text_0;
}

.e-comm {
  color: $primary-color
}

.email {
  width: 100%;
  margin: auto;
}

label {
  width: 100%;
  display: flex;
  justify-content: center;
}
.email input {
  width: 70%;
  height: 45px;
  &::placeholder {
    font-size: $text_1;
    padding-left: .7rem;
  }
}
button {
  background-color: $primary-color;
  color: white;
  border: none;
  font-size: $text_1;
  padding: .2em 3.5em;
}
</style>
