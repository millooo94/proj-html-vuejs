<template>
  <section class="popular-recipes">
    <h2 class="text-center">
      POPULAR RECIPES
    </h2>
    <!-- eslint-disable-next-line -->
    <p class="section-paragraph text-center mt-4 mb-5">Aliquam erat voluptat. Ut quis ligula a magna blandit finibus. Suspendisse maximum lacus non nunc lacinia lobortis</p>
    <div class="row">
      <div class="col-6">
        <div
          class="card"
          style="width: 100%;"
        >
          <img
            :src="popularRecipesData[0].img"
            class="card-img-top rounded-0"
            :alt="popularRecipesData[0].title"
          >
          <div class="card-body">
            <h3 class="card-title">
              {{ popularRecipesData[0].title }}
            </h3>
            <span>{{ popularRecipesData[0].tags }}</span>
            <hr class="my-3">
            <p class="card-text">
              {{ popularRecipesData[0].paragraph }}
            </p>
            <button
              href="#"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row row-cols-2 g-3">
          <div
            v-for="item in popularRecipesData[1]"
            :key="item"
            class="col"
          >
            <img
              class="img-fluid h-100"
              :src="item"
              :alt="item"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainPagePopularRecipes',
  props: {
    popularRecipesData: Array,
  },

};
</script>

<style lang="scss" scoped>

.popular-recipes {
  padding-top: 3rem;
}

h2 {
  font-size: 1.2rem;
}

p {
  font-size: .8rem;
}

.section-paragraph {
  max-width: 600px;
  margin: auto;
}

.card {
  border-radius: 2px !important;
  border: none !important;
}
.card-body {
  padding: 2rem;

  h3 {
  font-size: 1.2rem;
  margin: 0 !important;
}
span {
  font-size: .7rem;
}
p {
  font-size: .8rem;
  line-height: 200%;
}
hr {
  border-top: 1px dotted ;
}

button {
  background-color: #fc7525;
  color: white;
  font-size: .8rem;
  border: none;
  padding: .4em 1.5em;
}
}

</style>
