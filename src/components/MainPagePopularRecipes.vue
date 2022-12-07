<template>
  <section class="popular-recipes">
    <h2 class="text-center">
      POPULAR RECIPES
    </h2>
    <!-- eslint-disable-next-line -->
    <p class="section-paragraph text-center mt-4 mb-5">Aliquam erat voluptat. Ut quis ligula a magna blandit finibus. Suspendisse maximum lacus non nunc lacinia lobortis</p>
    <div class="row">
      <div class="col-6">
        <RecipesCard
          :popular-recipes-data="popularRecipesData"
        />
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
import RecipesCard from '@/components/RecipesCard.vue';

export default {
  name: 'MainPagePopularRecipes',
  components: {
    RecipesCard,
  },
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
</style>
