<template>
  <aside>
    <div class="img-container w-100 position-relative">
      <img
        class="w-100 "
        :src="farmToTableData[0].img"
        :alt="farmToTableData[0].title"
      >
      <div>
        <span class="latest-recipes-title text-center">{{ farmToTableData[0].title }}</span>
      </div>
    </div>
    <div class="img-container w-100 position-relative">
      <img
        class="w-100 "
        :src="farmToTableData[1].img"
        :alt="farmToTableData[1].title"
      >
      <div class="singapore-title">
        {{ farmToTableData[1].title }}
      </div>
    </div>
    <div class="city-guides d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="fa-solid fa-earth-americas" />
      <span>VIEW ALL CITY GUIDES</span>
    </div>
    <hr>
    <div class="search d-flex w-100">
      <div class="magnifying d-flex justify-content-center align-items-center bg-white">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <label for="search w-100">
        <input
          id="search"
          class="h-100"
          placeholder="Search..."
          type="text"
          name="search"
        >
      </label>
    </div>
    <h5 class="text-center">
      Follow Us
    </h5>
    <div class="social-block d-flex">
      <font-awesome-icon
        v-for="(item) in navigationData.social"
        :key="item"
        :icon="`fa-brands fa-${item}`"
        border
        fixed-width
        size="2x"
      />
    </div>
    <div class="buttons-block">
      <button class="popular">
        Popular
      </button>
      <button class="recent">
        Recent
      </button>
    </div>
    <div class="popular-articles">
      <div class="article d-flex align-items-center">
        <img
          :src="foodieJournalData[0].img"
          :alt="foodieJournalData[0].title"
        >
        <div class="d-flex flex-column">
          <h5>{{ foodieJournalData[0].title }}</h5>
          <span>{{ replaceDate() }}</span>
        </div>
      </div>
      <div
        v-for="item in farmToTableData.slice(1,-1)"
        :key="item.img"
        class="article d-flex align-items-center"
      >
        <img
          :src="item.img"
          alt="item.title"
        >
        <div class="d-flex flex-column">
          <h5>{{ item.title }}</h5>
          <span>{{ item.date }}</span>
        </div>
      </div>
    </div>
    <div class="tweet">
      <div class="header  d-flex justify-content-between">
        <div class="text">
          <h4>Tweets</h4><span>by</span><a href="#">{{ farmToTableData[3].username }}</a>
          <font-awesome-icon icon="fa-regular fa-circle-info" />
          <div class="tweet-body d-flex">
            <img
              src="public/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png"
              alt="logo"
            >
            <div class="content" />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'FarmToTableAside',
  props: {
    farmToTableData: Array,
    navigationData: Object,
    foodieJournalData: Array,
  },
  methods: {
    replaceDate() {
      return this.foodieJournalData[0].date.replace('By admin | ', '');
    },
  },

};
</script>

<style lang="scss" scoped>
.latest-recipes-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
  text-transform: uppercase;
  z-index: 100;
}
.singapore-title {
  position: absolute;
  background-color: rgba($color: #000000, $alpha: .5) ;
  color: white;
  left: 0;
  top: 50%;
}
.city-guides {
  background-color: #fc7525;
  color: white;
  gap: .5rem;
}
hr {
  border: 1px dotted #262628;
}

.search {
  .magnifying {
  width: calc(100% / 6);
  aspect-ratio: 1 / 1;
}
input {
  border: none !important;
}
.social-block {
  gap: .5rem;
}
}
.buttons-block {
  .popular {
    width: 50%;
    background-color: white;
  }
  .recent {
    width: 50%;
  }
}

.article img {
  clip-path: circle();
  width: 60px;
  height: 60px;
}
</style>
