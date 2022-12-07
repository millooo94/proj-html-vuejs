<template>
  <div
    class="card"
    style="width: 100%;"
  >
    <img
      :src="popularRecipesData[0].img"
      class="card-img-top rounded-0"
      :alt="popularRecipesData[0].title"
    >
    <div class="card-body">
      <h3 class="card-title">
        {{ popularRecipesData[0].title }}
      </h3>
      <span>{{ popularRecipesData[0].tags }}</span>
      <hr class="my-3">
      <p class="card-text">
        {{ popularRecipesData[0].paragraph }}
      </p>
      <button
        href="#"
      >
        LEARN MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesCard',
  props: {
    popularRecipesData: Array,
  },

};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 2px !important;
  border: none !important;
}
.card-body {
  padding: 2rem;

  h3 {
  font-size: 1.2rem;
  margin: 0 !important;
}
span {
  font-size: .7rem;
}
p {
  font-size: .8rem;
  line-height: 200%;
}
hr {
  border-top: 1px dotted ;
}

button {
  background-color: #fc7525;
  color: white;
  font-size: .8rem;
  border: none;
  padding: .4em 1.5em;
}
}
</style>
