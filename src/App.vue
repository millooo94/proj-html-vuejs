<template>
  <div>
    <HeaderPage
      :navigation-data="navigationData"
      :foodie-journal-data="foodieJournalData"
    />
    <MainPage
      :navigation-data="navigationData"
      :foodie-journal-data="foodieJournalData"
    />
    <FooterPage />
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
    };
  },

};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
