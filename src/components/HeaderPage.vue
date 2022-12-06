<template>
  <header>
    <HeaderPageNavigation :navigation-data="navigationData" />
    <HeaderPageFoodieJournal :lower-header-data="lowerHeaderData" />
  </header>
</template>

<script>
import HeaderPageNavigation from '@/components/HeaderPageNavigation.vue';
import HeaderPageFoodieJournal from '@/components/HeaderPageFoodieJournal.vue';

export default {
  name: 'HeaderPage',
  components: {
    HeaderPageNavigation,
    HeaderPageFoodieJournal,
  },
  props: {
    navigationData: Object,
  },
  data() {
    return {

      lowerHeaderData: [
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
      ],

    };
  },
};
</script>

<style lang="scss" scoped>

</style>
