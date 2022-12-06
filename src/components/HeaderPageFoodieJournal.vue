<template>
  <section class="foodie-journal">
    <div class="row justify-content-end">
      <div class="square-tag-block col-auto d-flex flex-column">
        <a href="">
          <div class="icon d-flex flex-column justify-content-center mb-1">
            <font-awesome-icon
              icon="fa-brands fa-google-drive"
            />
            <div class="text text-center">
              Demos
            </div>
          </div>
        </a>
        <div class="price d-flex flex-column justify-content-center align-items-center">
          <a href="#">
            <div class="number-block text-center">
              <span class="dollar-symbol">$</span>
              <span class="number">39</span>
            </div>
            <div class="text-center">On Sale</div>
          </a>
        </div>
      </div>
    </div>
    <section
      class="main-content d-flex justify-content-center align-items-center
    position-relative"
    >
      <div
        class="text-block d-flex flex-column
       justify-content-center align-items-center position-relative"
      >
        <h1 class="text-center">
          {{ lowerHeaderData[0].title }}
        </h1>
        <span class="mt-2">{{ replaceDate() }}</span>
        <div class="tag">
          TODAY'S PICK
        </div>
      </div>
    </section>
    <section class="food-journal">
      <h2 class="text-center mb-4">
        FOODIE JOURNAL
      </h2>
      <div class="row justify-content-between align-items-center">
        <FoodieJournalCard
          v-for="item in lowerHeaderData"
          :key="item.img"
          :img="item.img"
          :title="item.title"
          :date="item.date"
          if-not-title="false"
        />
      </div>
    </section>
  </section>
</template>

<script>
import FoodieJournalCard from '@/components/FoodieJournalCard.vue';

export default {
  name: 'HeaderPageFoodieJournal',
  components: {
    FoodieJournalCard,
  },
  props: {
    lowerHeaderData: Array,
  },
  methods: {
    replaceDate() {
      return this.lowerHeaderData[1].date.replace('By admin | ', '').replace('th', '');
    },
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';

.foodie-journal {
  background-color: #f6f7f1;
}
.main-content {
  background-image: url('../../public/img/single-post-img3.jpg');
  background-size: cover;
  background-position: center;
  padding: 10rem;
}
.text-block {
  width: 50%;
  background-color: white;
  padding: 2.5rem 1.5rem;
  border-radius: 5px;
  margin: 0 !important;
  font-size: 1rem;
  h1 {
    font-size: 2.5rem !important;
  }
  .tag {
    position: absolute;
    background-color: #fc7525;
    font-size: 1rem;
    color: white;
    top: 0;
    transform: translateY(-50%);
    padding: .5em 1.2em;
    border-radius: 5px;
  }
}
.square-tag-block {
  position: absolute;
  z-index: 100;
  right: .3rem;
  transform: translateY(-75%);

  a {
    text-decoration: none;
    font-size: .8rem;
    color: black;
    &:visited, &:hover, &:active {
        color: inherit;
      }
  }
}

.icon {
  gap: .2rem
}
.price {
  .number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1ca142;
  }
  .dollar-symbol {
    font-size: .8rem;
    font-weight: bold;
    position: relative;
    bottom: 11px;
    color: #1ca142;
  }
}
.price, .icon {
  width: 55px;
  height: 55px;
  background-color: white;
  color: #262628;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px !important;
  border-radius: 5px;
  }

  .food-journal {
    margin: auto;
    transform: translateY(-15%);
    width: 60%;
    padding: 2rem;
    background-color: white;
    h2 {
      font-size: 1.2rem;
    }
  }

</style>
