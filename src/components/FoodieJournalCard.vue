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
            <div
              class="icon"
            >
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
  font-family: "Vidaloka", serif;
}
  .date {
  font-size: $text_1;
  color: $gray;
}
}
.img-container {
  position: relative;
}
.overlay {
    visibility: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(252, 117, 37, 0.5) 0%,rgba(252, 117, 37, 1) 100%);
    color: white;
    font-size: 1rem;
    padding: 2rem;
    .icon {
      clip-path: circle();
      padding: .6em;
      color: rgba(252, 117, 37, 0.5);
      background-color: white;
    }
  }
  .img-container:hover .overlay {
    visibility: visible;
  }

</style>
