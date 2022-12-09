<template>
  <div class="overflow-hidden">
    <div
      class="card p-0"
    >
      <div class="img-container">
        <img
          class="img-fluid"
          :src="img"
          :alt="title"
          style="width: 100%"
        >
        <div class="overlay d-flex flex-column justify-content-center align-items-center">
          <a
            href="#"
            title="social-icon"
            aria-label="social-icon"
          >
            <div class="icon">
              <font-awesome-icon icon="fa-solid fa-link" />
            </div>
          </a>

          <div class="text-center">
            {{ title }}
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3
          v-if="(ifNotTitle == 'false')"
          class="text-center"
        >
          {{ title }}
        </h3>
        <span class="date d-flex justify-content-center m-auto">{{ date }}</span>
      </div>
    </div>
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
@import '@/assets/scss/config';
.card {
  border: none;
  h3 {
  font-size: $text_2;
}
  .date {
  font-size: $text_1;
  color: $gray;
}
}
.img-container {
  position: relative;
}
</style>
