<template>
  <main>
    <div class="container_ m-auto">
      <MainPagePopularRecipes
        :popular-recipes-data="popularRecipesData"
        :foodie-journal-data="foodieJournalData"
      />
      <MainPageCulinaryCollection
        :culinary-collection-data="culinaryCollectionData"
      />
      <MainPageFarmToTable
        :popular-recipes-data="popularRecipesData"
        :foodie-journal-data="foodieJournalData"
        :farm-to-table-data="farmToTableData"
        :navigation-data="navigationData"
      />
    </div>
  </main>
</template>

<script>
import MainPagePopularRecipes from '@/components/MainPagePopularRecipes.vue';
import MainPageCulinaryCollection from '@/components/MainPageCulinaryCollection.vue';
import MainPageFarmToTable from '@/components/MainPageFarmToTable.vue';

export default {
  name: 'MainPage',
  components: {
    MainPagePopularRecipes,
    MainPageCulinaryCollection,
    MainPageFarmToTable,
  },
  props: {
    foodieJournalData: Array,
    navigationData: Object,
    popularRecipesData: Object,
  },
  data() {
    return {
      culinaryCollectionData: [
        {
          img: '/img/drinks-recipes.png',
          name: 'drinks',
        },
        {
          img: '/img/soups-recipes.png',
          name: 'soups',
        },
        {
          img: '/img/baking-recipes.png',
          name: 'bakery',
        },
        {
          img: '/img/dinner-recipes.png',
          name: 'dinner',
        },
        {
          img: '/img/healthy-recipes.png',
          name: 'healthy',
        },
        {
          img: '/img/staff-picks.png',
          name: 'staff picks',
        },
        {
          img: '/img/premium-recipes.png',
          name: 'appetisers',
        },
        {
          img: '/img/quick-easy-recipes.png',
          name: 'quick & easy',
        },
      ],
      farmToTableData: [
        {
          img: '/img/ad-bg.jpg',
          title: 'view our latest recipes',
        },
        {
          img: '/img/singapore-featured-image.jpg',
          title: 'City Guide: Singapore',
          date: 'February 27th, 2019',
        },
        {
          img: '/img/slide1-bg-66x66.jpg',
          title: '6 Nutritional Tips to Help Burn Body Fat',
          date: 'February 28th, 2019',
        },
        {
          userImg: '/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png',
          name: 'ThemeFusion',
          username: '@Theme_Fusion',
          tweetFirstPart: 'Do you need sublime WordPress hosting for your nex website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with',
          tweetSecondPart: 'on WP Engine hosting & get 30% Off this Black Friday',
          link: 'bit.ly/3kjLLE2',
          postImg: '/img/En2TRxLW4AEiWUN.jpeg',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
main {
  background-color: $secondary-color;
}
.container_ {
  max-width: 950px;
}

</style>
