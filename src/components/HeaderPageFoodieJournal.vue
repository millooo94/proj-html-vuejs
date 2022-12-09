<template>
  <section class="foodie-journal">
    <div class="row justify-content-end">
      <div class="square-tag-block col-auto d-flex flex-column">
        <a href="">
          <div class="icon d-flex flex-column justify-content-center mb-1">
            <font-awesome-icon
              icon="fa-brands fa-google-drive"
              size="2x"
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
        <div class="title-and-date">
          <h1 class="section-title text-center">
            {{ foodieJournalData[0].title }}
          </h1>
          <span
            class="section-date d-flex justify-content-center align-items-center mt-2"
          >{{ replaceDate() }}</span>
        </div>
        <div class="tag">
          TODAY'S PICK
        </div>
      </div>
    </section>
    <section class="food-journal">
      <h2
        class="text-center mb-4 fs-6"
        style="letter-spacing: .2rem;"
      >
        FOODIE JOURNAL
      </h2>
      <div class="row justify-content-between align-items-center">
        <FoodieJournalCard
          v-for="item in foodieJournalData.slice(0,3)"
          :key="item.img"
          class="col-4"
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
    foodieJournalData: Array,
  },
  methods: {
    replaceDate() {
      return this.foodieJournalData[1].date.replace('By admin | ', '').replace('th', '');
    },
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config';
@import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap');

.foodie-journal {
  font-family: 'Cabin', sans-serif;
  background-color: $secondary-color;
}
.section-title {
  font-size: $text_4;
}
.section-date {
  font-size: $text_2;
  color: $gray;
}
.square-tag-block {
  position: absolute;
  z-index: 100;
  right: .3rem;
  transform: translateY(-75%);
.price, .icon {
  width: 55px;
  height: 55px;
  background-color: white;
  color: #262628;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px !important;
  border-radius: 5px;
  font-size: $text_1;
  }
  .icon {
  gap: .2rem
}
.price {
  font-family: 'Roboto', sans-serif;
  .number {
    font-size: 1.5rem;
    font-weight: 900;
    color: $green;

  }
  .dollar-symbol {
    font-size: $text_1;
    font-weight: 900;
    position: relative;
    bottom: 11px;
    color: $green;
  }
}
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
  font-size: $text_2;
  .title-and-date {
    font-family: 'Vidaloka', serif;
  }
  h1 {
    font-size: $text_4 !important;
  }
  .tag {
    position: absolute;
    background-color: $primary-color;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    top: 0;
    transform: translateY(-50%);
    padding: .5em 1.2em;
    border-radius: 5px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px !important;
  }
}
  .food-journal {
    margin: auto;
    transform: translateY(-15%);
    width: 60%;
    padding: 2rem;
    background-color: white;
    h2 {
      font-size: $text_3;
    }
  }
  .dotted-line {
      width: 100px;
      border: 1px dotted black;
    }

</style>
