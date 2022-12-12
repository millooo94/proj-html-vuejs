<template>
  <div
    class="card mb-5"
    style="width: 100%;"
  >
    <div class="img-container">
      <img
        :src="img"
        class="card-img-top rounded-0"
        :alt="title"
      >
      <div class="overlay d-flex flex-column justify-content-center align-items-center">
        <a
          href="#"
          title="social-icon"
          aria-label="social-icon"
        >
          <div class="icon w-100 h-100">
            <font-awesome-icon icon="fa-solid fa-link" />
          </div>
        </a>
        <div class="text-center">
          {{ title }}
        </div>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">
        {{ title }}
      </h3>
      <span
        v-if="ifNotTags == 'false'"
        class="tags"
      >{{ tags }}</span>
      <span
        v-if="ifNotDate == 'false'"
        class="date"
      >{{ date }}</span>
      <hr class="my-3">
      <p class="card-text">
        {{ paragraph }}
      </p>
      <button
        v-if="(ifNotButton == 'false')"
        href="#"
      >
        LEARN MORE
      </button>
      <div
        v-if="(IfNotReadMore == 'false')"
        class="read-more d-flex justify-content-between align-items-center"
      >
        <div class="block-left d-flex align-items-center">
          <a href="#">
            <span class="read-more-text">Read More</span>
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </a>
        </div>
        <div class="block-right d-flex align-items-center">
          <font-awesome-icon icon="fa-regular fa-comments" />
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesCard',
  props: {
    img: String,
    title: String,
    tags: String,
    date: String,
    paragraph: String,
    IfNotReadMore: String,
    ifNotButton: String,
    ifNotTags: String,
    ifNotDate: String,
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
@import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap');
.card {
  border-radius: 2px !important;
  border: none !important;
}
.card-body {
  padding: 2rem;

  h3 {
  font-family: "Vidaloka", serif;
  font-size: $text_2;
  margin: 0 !important;
}
.tags, .date {
  font-size: $text_1;
  color: $gray;
}
.card-text {
  font-size: $text_1;
  line-height: 200%;
}
hr {
  border-top: 1px dotted ;
}

button {
  background-color: $primary-color;
  color: white;
  font-size: $text_1;
  border: none;
  padding: .4em 1.5em;
  font-weight: 600;
}
}
.img-container {
  position: relative;
}
.block-right, .block-left {
  gap: .2rem;
  font-size: $text_0;
}
.read-more-text {
  font-size: $text_0;
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
    .icon {
      clip-path: circle();
      padding: 1em;
      color: rgba(252, 117, 37, 0.5);
      background-color: white;
    }
  }
  .img-container:hover .overlay {
    visibility: visible;
  }
</style>
