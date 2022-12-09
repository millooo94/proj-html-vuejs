<template>
  <section class="popular-recipes fs-6">
    <h2 class="text-center">
      POPULAR RECIPES
    </h2>
    <!-- eslint-disable-next-line -->
    <p class="section-paragraph text-center mt-4 mb-5">Aliquam erat voluptat. Ut quis ligula a magna blandit finibus. Suspendisse maximum lacus non nunc lacinia lobortis</p>
    <div class="row">
      <div class="col-6">
        <RecipesCard
          :popular-recipes-data="popularRecipesData"
          if-not-button="false"
          if-not-read-more="true"
        />
      </div>
      <div class="col-6">
        <div class="row row-cols-2 g-3">
          <div
            v-for="(item, index) in popularRecipesData.recipeImages"
            :key="index"
            class="col"
          >
            <div class="img-container">
              <img
                class="img-fluid h-100"
                :src="item.img"
                :alt="item.title"
              >
              <div class="overlay d-flex flex-column justify-content-center align-items-center">
                <a
                  href="#"
                  title="social-icon"
                  aria-label="social-icon"
                >
                  <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-link" />
                  </div>

                </a>

                <div class="text-center">
                  {{ item.title }}
                </div>
              </div>
            </div>
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
    popularRecipesData: Object,
    foodieJournalData: Array,
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';

.popular-recipes {
  padding-top: 3rem;
}

h2 {
  font-size: $text_2;
}

.section-paragraph {
  font-size: $text_1;
}

.section-paragraph {
  max-width: 600px;
  margin: auto;
}
.img-container {
  position: relative;
}
</style>
