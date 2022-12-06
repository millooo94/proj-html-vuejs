<template>
  <div>
    <HeaderPage :navigation-data="navigationData" />
    <MainPage />
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
    };
  },

};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
