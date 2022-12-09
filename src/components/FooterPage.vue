<template>
  <footer>
    <FooterPageSubscribe
      :popular-recipes-data="popularRecipesData"
    />
    <FooterPageNavigation
      :navigation-data="navigationData"
      :contact-data="contactData"
    />
  </footer>
</template>

<script>
import FooterPageSubscribe from '@/components/FooterPageSubscribe.vue';
import FooterPageNavigation from '@/components/FooterPageNavigation.vue';

export default {
  name: 'FooterPage',
  components: {
    FooterPageSubscribe,
    FooterPageNavigation,
  },
  props: {
    popularRecipesData: Object,
    navigationData: Object,
  },
  data() {
    return {
      contactData: [
        {
          content: '775 New York Ave, Brooklin, Kings, New York, 11203',
          icon: 'location-dot',
        },
        {
          content: '+ 0100-505-0000',
          icon: 'phone-flip',
        },
        {
          content: 'info@your-domain.com',
          icon: 'envelope',
        },
      ],
    };
  },

};
</script>

<style>

</style>
