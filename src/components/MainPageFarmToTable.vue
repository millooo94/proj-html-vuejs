<template>
  <section class="farm-to-table">
    <div class="row justify-content-between">
      <div class="text-block col-auto">
        <h2>FARM TO TABLE</h2>
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
    <div class="row">
      <div class="col-8">
        <RecipesCard
          :popular-recipes-data="popularRecipesData"
        />
        <div class="row row-cols-2">
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
    popularRecipesData: Array,
    foodieJournalData: Array,
    farmToTableData: Array,
    navigationData: Object,
  },

};
</script>

<style lang="scss" scoped>
.farm-to-table {
  padding-top: 10rem;
}
.text-block {
  max-width: 500px;
  h2 {
    font-size: 1.2rem;
  }
  p {
    font-size: .8rem;
  }
}
.read-our-blog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fc7525;
  color: white;
  font-size: .8rem;
  border: none;
  padding: .4em 1.5em;
  gap: .5rem;
}
</style>
