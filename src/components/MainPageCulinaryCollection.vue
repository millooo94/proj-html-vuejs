<template>
  <section class="culinary-collection">
    <h2 class="text-center">
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
          <div class="text-center">
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
.culinary-collection {
  padding-top: 10rem;
}
h2 {
  font-size: 1.2rem;
}
p {
  font-size: .8rem;
}
.section-paragraph {
  max-width: 500px;
  margin: auto;
}
.content {
  background-color: white;
  padding: 1rem;
  img {
    width: 50%;
    display: block;
    margin: auto;
  }
  div {
    text-transform: uppercase;
    font-size: .8rem;
  }
}
</style>
