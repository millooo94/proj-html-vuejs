<template>
  <main>
    <div class="container_ m-auto">
      <MainPagePopularRecipes
        :popular-recipes-data="popularRecipesData"
      />
      <MainPageCulinaryCollection
        :culinary-collection-data="culinaryCollectionData"
      />
      <MainPageFarmToTable />
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
  data() {
    return {
      popularRecipesData: [
        {
          img: '/img/Yogurt-Nan.jpg',
          title: 'Lunch Favourite with Salad, Naan and Beans',
          tags: 'Bakery, Featured, Healthy, Latest Recipes, Staff Picks',
          paragraph: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orcis varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin, integer vitae elementum ex. Sed porttitor, diam get convallis volutpat, arcu tellus facilis nulla, id dignissim orci leo id',
        },
        [
          '/img/Mixed-fruits.jpg',
          '/img/r-rachel-park-366508-unsplash-min.jpg',
          '/img/r-michelle-tsang-500721-unsplash-min.jpg',
          '/img/quick-summer-drink-460x295.jpg',
          '/img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
          '/img/perfect-cosmopolitan-460x295.jpg',
          '/img/fi2x-6-460x295.jpg',
          '/img/r-brooke-lark-96398-unsplash-min-460x295.jpg',
        ],
      ],
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
    };
  },

};
</script>

<style lang="scss" scoped>
main {
  background-color: #f6f7f1;
}
.container_ {
  max-width: 950px;
}

</style>
