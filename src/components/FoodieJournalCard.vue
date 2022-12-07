<template>
  <div class="d-flex flex-column">
    <img
      class="img-fluid"
      :src="img"
      :alt="title"
    >
    <h3
      v-if="(ifNotTitle == 'true')"
      class="text-center"
    >
      {{ title }}
    </h3>
    <span class="text-center m-auto">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: 'FoodieJournalCard',
  props: {
    img: String,
    title: String,
    date: String,
    ifNotTitle: String,
  },

};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.2rem;
}
span {
  font-size: .8rem;
}

</style>
