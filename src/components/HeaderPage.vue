<template>
  <header>
    <HeaderPageNavigation :navigation-data="navigationData" />
    <HeaderPageFoodieJournal :foodie-journal-data="foodieJournalData" />
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
    foodieJournalData: Array,
  },
};
</script>

<style lang="scss" scoped>

</style>
