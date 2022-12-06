<template>
  <section class="farm-to-table">
    <div class="row justify-content-between">
      <div class="text-block col-auto">
        <h2>FARM TO TABLE</h2>
        <p class="section-paragraph mt-4 mb-5">
          Aliquam erat voluptat. Ut quis ligula a magna blandit finibus.
          Suspendisse maximum lacus non nunc lacinia lobortis
        </p>
      </div>
      <div class="col-auto">
        <button>
          <span>READ OUR BLOG</span>
          <font-awesome-icon icon="fa-solid fa-book-open-reader" />
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <FarmToTableContent />
      </div>
      <div class="col-4">
        <FarmToTableAside />
      </div>
    </div>
  </section>
</template>

<script>
import FarmToTableContent from '@/components/FarmToTableContent.vue';
import FarmToTableAside from '@/components/FarmToTableAside.vue';

export default {
  name: 'MainPageFarmToTable',
  components: {
    FarmToTableContent,
    FarmToTableAside,
  },

};
</script>

<style lang="scss" scoped>
.farm-to-table {
  padding-top: 10rem;
}
.text-block {
  max-width: 500px;
  h2 {
    font-size: 1.2rem;
  }
  p {
    font-size: .8rem;
  }
}
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fc7525;
  color: white;
  font-size: .8rem;
  border: none;
  padding: .4em 1.5em;
  gap: .5rem;
}
</style>
