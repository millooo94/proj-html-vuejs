<template>
  <section
    class="culinary-collection"
  >
    <h2
      class="text-center fs-6"
      style="letter-spacing: .2rem;"
    >
      CULINARY COLLECTION
    </h2>
    <!-- eslint-disable-next-line -->
    <p class="section-paragraph text-center mt-4 mb-5">Aliquam erat voluptat. Ut quis ligula a magna blandit finibus. Suspendisse maximum lacus non nunc lacinia lobortis</p>
    <div class="row row-cols-4 g-3">
      <div
        v-for="item in culinaryCollectionData"
        :key="item.name"
        class="col"
      >
        <div
          class="content"
        >
          <img
            :src="item.img"
            :alt="item.name"
          >
          <div class="text text-center p-2">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainPageCulinaryCollection',
  props: {
    culinaryCollectionData: Array,
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
.culinary-collection {
  padding-top: 7rem;
}
h2 {
  font-size: $text_2;
}
p {
  font-size: $text_1;
}
.section-paragraph {
  font-size: $text_1;
  max-width: 500px;
  margin: auto;
}
.content {
  background-color: white;
  padding: .5rem;
  img {
    width: 50%;
    display: block;
    margin: auto;
  }
  .text {
    text-transform: uppercase;
    font-size: $text_1;
    font-weight: 500;
    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }
}
</style>
