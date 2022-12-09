<template>
  <div
    class="card mb-5"
    style="width: 100%;"
  >
    <div class="img-container">
      <img
        :src="popularRecipesData.recipeCard.img"
        class="card-img-top rounded-0"
        :alt="popularRecipesData.recipeCard.title"
      >
      <div class="overlay d-flex flex-column justify-content-center align-items-center">
        <a
          href="#"
          title="social-icon"
          aria-label="social-icon"
        >
          <div class="icon w-100 h-100">
            <font-awesome-icon icon="fa-solid fa-link" />
          </div>
        </a>
        <div class="text-center">
          {{ popularRecipesData.recipeCard.title }}
        </div>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">
        {{ popularRecipesData.recipeCard.title }}
      </h3>
      <span class="tags">{{ popularRecipesData.recipeCard.tags }}</span>
      <hr class="my-3">
      <p class="card-text">
        {{ popularRecipesData.recipeCard.paragraph }}
      </p>
      <button
        v-if="(ifNotButton == 'false')"
        href="#"
      >
        LEARN MORE
      </button>
      <div
        v-if="(IfNotReadMore == 'false')"
        class="read-more d-flex justify-content-between align-items-center"
      >
        <div class="block-left d-flex align-items-center">
          <span class="read-more-text">Read More</span>
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <div class="block-right d-flex align-items-center">
          <font-awesome-icon icon="fa-regular fa-comments" />
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesCard',
  props: {
    popularRecipesData: Object,
    IfNotReadMore: String,
    ifNotButton: String,
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
.card {
  border-radius: 2px !important;
  border: none !important;
}
.card-body {
  padding: 2rem;

  h3 {
  font-size: $text_2;
  margin: 0 !important;
}
.tags {
  font-size: $text_1;
  color: $gray;
}
.card-text {
  font-size: $text_1;
  line-height: 200%;
}
hr {
  border-top: 1px dotted ;
}

button {
  background-color: $primary-color;
  color: white;
  font-size: $text_1;
  border: none;
  padding: .4em 1.5em;
  font-weight: 600;
}
}
.img-container {
  position: relative;
}
.block-right, .block-left {
  gap: .2rem;
  font-size: $text_0;
}
.read-more-text {
  font-size: $text_0;
}
</style>
