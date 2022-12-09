<template>
  <div>
    <HeaderPage
      :navigation-data="navigationData"
      :foodie-journal-data="foodieJournalData"
    />
    <MainPage
      :navigation-data="navigationData"
      :foodie-journal-data="foodieJournalData"
      :popular-recipes-data="popularRecipesData"
    />
    <FooterPage
      :popular-recipes-data="popularRecipesData"
      :navigation-data="navigationData"
    />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
  data() {
    return {
      navigationData: {
        social: [
          'facebook-f',
          'instagram',
          'twitter',
          'youtube',
        ],
        menu: [
          'Home',
          'Recipes',
          'Places',
          'Blog',
          'About',
          'Contact',
        ],
      },
      foodieJournalData: [
        {
          img: '/img/single-post-img3.jpg',
          title: 'Food Corner: Top Japanese Restaurants for Sushi',
          date: 'By admin | March 25th, 2019',
        },
        {
          img: '/img/fi-roundup.jpg',
          title: 'Roundup: My New Favourite Recipes For Healthy Living',
          date: 'By admin | March 25th, 2019',
        },
        {
          img: '/img/fi-toasts.jpg',
          title: 'Why These Toasts with Tea are My New Favourite',
          date: 'By admin | March 25th, 2019',
        },
        {
          img: '/img/fi-korean-food.jpg',
          title: 'Meal Prep: Korean Bibimbap with Kimchi',
          date: 'By admin | March 25th, 2019',
        },
        {
          img: '/img/fi-street-food.jpg',
          title: 'Exploring Street Food in Bangkok',
          date: 'By admin | March 25th, 2019',
        },
        {
          img: '/img/fi-organic-breakfast.jpg',
          title: 'Organic Choices For Healthier Living',
          date: 'By admin | March 25th, 2019',
        },
        {
          img: '/img/fi-water-side-rest.jpg',
          title: '5 Waterside Restaurants in Instanbul for Special Events',
          date: 'By admin | March 25th, 2019',
        },
      ],
      popularRecipesData: {
        recipeCard: {
          img: '/img/Yogurt-Nan.jpg',
          title: 'Lunch Favourite with Salad, Naan and Beans',
          tags: 'Bakery, Featured, Healthy, Latest Recipes, Staff Picks',
          paragraph: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orcis varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin, integer vitae elementum ex. Sed porttitor, diam get convallis volutpat, arcu tellus facilis nulla, id dignissim orci leo id',
        },
        recipeImages: [
          {
            img: '/img/Mixed-fruits.jpg',
            title: 'Fruit Platter with Banana, Mango, Berries and Orange',
          },
          {
            img: '/img/r-rachel-park-366508-unsplash-min.jpg',
            title: 'English Breakfast',
          },
          {
            img: '/img/r-michelle-tsang-500721-unsplash-min.jpg',
            title: 'Ice Cream',
          },
          {
            img: '/img/quick-summer-drink-460x295.jpg',
            title: 'Summer Drink',
          },
          {
            img: '/img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
            title: 'Vegetables',
          },
          {
            img: '/img/perfect-cosmopolitan-460x295.jpg',
            title: 'Perfect Cosmopolitan',
          },
          {
            img: '/img/fi2x-6-460x295.jpg',
            title: 'Fruit Breakfast',
          },
          {
            img: '/img/r-brooke-lark-96398-unsplash-min-460x295.jpg',
            title: 'Berry Cakes',
          },
        ],
      },
    };
  },

};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
body {
  overflow-x: hidden;
  color: $black;
}
</style>
