<template>
  <section class="farm-to-table">
    <div class="row justify-content-between">
      <div class="text-block col-auto">
        <h2 class="fs-6">
          FARM TO TABLE
        </h2>
        <p class="section-paragraph mt-4 mb-5">
          Aliquam erat voluptat. Ut quis ligula a magna blandit finibus.
          Suspendisse maximum lacus non nunc lacinia lobortis
        </p>
      </div>
      <div class="col-auto">
        <button class="read-our-blog">
          <span>READ OUR BLOG</span>
          <font-awesome-icon icon="fa-solid fa-book-open-reader" />
        </button>
      </div>
    </div>
    <div class="row main-content row-cols-2 g-5">
      <div class="col-8">
        <RecipesCard
          :popular-recipes-data="popularRecipesData"
          :foodie-journal-data="foodieJournalData"
          if-not-button="true"
          if-not-read-more="false"
        />
        <div class="foodie.journal-card-container row row-cols-2 g-4">
          <FoodieJournalCard
            v-for="item in foodieJournalData.slice(1)"
            :key="item.img"
            :img="item.img"
            :title="item.title"
            :date="item.date"
            if-not-title="false"
          />
        </div>
        <button class="load-more-posts w-100">
          LOAD MORE POSTS
        </button>
      </div>
      <div class="col-4">
        <FarmToTableAside
          :farm-to-table-data="farmToTableData"
          :navigation-data="navigationData"
          :foodie-journal-data="foodieJournalData"
        />
      </div>
    </div>
  </section>
</template>

<script>
import RecipesCard from '@/components/RecipesCard.vue';
import FoodieJournalCard from '@/components/FoodieJournalCard.vue';
import FarmToTableAside from '@/components/FarmToTableAside.vue';

export default {
  name: 'MainPageFarmToTable',
  components: {
    RecipesCard,
    FoodieJournalCard,
    FarmToTableAside,
  },
  props: {
    popularRecipesData: Object,
    foodieJournalData: Array,
    farmToTableData: Array,
    navigationData: Object,
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
.farm-to-table {
  padding-top: 10rem;
  padding-bottom: 5rem;
}
.text-block {
  max-width: 500px;
  h2 {
    font-size: $text_2;
  }
  .section-paragraph {
    font-size: $text_1;
  }
}
.read-our-blog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-color;
  color: white;
  font-size: $text_1;
  border: none;
  padding: .4em 1.5em;
  gap: .5rem;
}
button {
  background-color: $secondary-color_1;
  border: none;
  color: $black;
  font-weight: 600;
  padding: .5rem;
  margin-top: 2rem;
}
</style>
