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
    <div class="img-container w-100 position-relative mt-5">
      <img
        class="w-100 "
        :src="farmToTableData[1].img"
        :alt="farmToTableData[1].title"
      >
      <div class="singapore-title p-2">
        {{ farmToTableData[1].title }}
      </div>
    </div>
    <button class="city-guides d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="fa-solid fa-earth-americas" />
      <span class="view-city-guides">VIEW ALL CITY GUIDES</span>
    </button>
    <hr class="my-5">
    <div class="search d-flex w-100">
      <div class="magnifying d-flex justify-content-center align-items-center bg-white fs-6">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <label for="search">
        <input
          id="search"
          class="h-100"
          placeholder="Search..."
          type="text"
          name="search"
        >
      </label>
    </div>
    <h5 class="follow-us mt-5 mb-4">
      Follow Us
    </h5>
    <div class="social-block d-flex">
      <div
        v-for="(item) in navigationData.social"
        :key="item"
        class="icon-container"
      >
        <a
          href="#"
          title="social icon"
          aria-label="social-icon"
          class="h-100"
        >
          <font-awesome-icon
            :icon="`fa-brands fa-${item}`"
          />

        </a>
      </div>
    </div>
    <div class="buttons-block d-flex justify-content-center align-items-center my-5">
      <div class="popular text-center h-100">
        <a
          href="#"
          class="w-100 h-100"
        >
          Popular
        </a>
      </div>
      <div class="recent text-center h-100">
        <a
          href="#"
          class="h-100"
        >
          Recent
        </a>
      </div>
    </div>
    <div class="popular-articles">
      <div class="article d-flex align-items-center">
        <img
          :src="foodieJournalData[0].img"
          :alt="foodieJournalData[0].title"
        >
        <div class="d-flex flex-column">
          <h5 class="title">
            {{ foodieJournalData[0].title }}
          </h5>
          <span class="date">{{ replaceDate() }}</span>
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
          <h5 class="title">
            {{ item.title }}
          </h5>
          <span class="date">{{ item.date }}</span>
        </div>
      </div>
    </div>
    <div class="tweet rounded">
      <div class="header d-flex justify-content-between align-items-end">
        <div class="username d-flex">
          <h5 class="header-title m-0">
            Tweets
          </h5>
          <span class="header-username">by <a href="#">{{ farmToTableData[3].username }}</a></span>
        </div>
        <a
          href="#"
          title="info icon"
          aria-label="info icon"
        >
          <img
            src="img/image.svg"
            alt="info icon"
            style="width: 15px"
          >

        </a>
      </div>
      <div class="text">
        <div class="tweet-body d-flex mt-3">
          <img
            class="theme-fusion-logo"
            src="img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png"
            alt="logo"
          >
          <div class="content">
            <div class="name d-flex justify-content-between align-items-center">
              <h5 class="body-title m-0">
                {{ farmToTableData[3].name }}
              </h5>
              <a
                href="#"
                title="twitter icon"
                aria-label="twitter icon"
              >
                <font-awesome-icon
                  icon="fa-brands fa-twitter"
                  :style="{ color: 'lightGray' }"
                />

              </a>
            </div>
            <span
              style="color: #6a6b6c;"
              class="body-username"
            >
              {{ farmToTableData[3].username }}
            </span>
            <!-- eslint-disable-next-line -->
              <p class="tweet-paragraph">{{ farmToTableData[3].tweetFirstPart }} <a style="color: #0000EE;" href="#">#avada</a> {{ farmToTableData[3].tweetSecondPart }} <br> <a style="color: #0000EE;" href="#">{{farmToTableData[3].link}}</a></p>
            <img
              class="w-100 mb-2 rounded"
              src="img/En2TRxLW4AEiWUN.jpeg"
              alt="sales image"
            >
            <div class="footer d-flex justify-content-between">
              <div
                class="left-block"
                style="color: #6a6b6c;"
              >
                <font-awesome-icon
                  icon="fa-regular fa-heart"
                  class="me-4"
                />
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
              </div>
              <span style="color: #6a6b6c;">21<span class="acca">h</span></span>
            </div>
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
@import '@/assets/scss/config';
.latest-recipes-title {
  max-width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $black;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 100;
}
.popular-articles {
  .date {
    font-size: $text_0;
  }
}
.singapore-title {
  position: absolute;
  background-color: rgba($color: #000000, $alpha: .5) ;
  color: white;
  font-weight: 600;
  left: 0;
  top: 50%;
}
.city-guides {
  width: 100%;
  background-color: $primary-color;
  color: white;
  gap: .5rem;
  border: none;
}
hr {
  border-top: 1px dotted $black;
}

.search {
  .magnifying {
  width: calc(100% / 6);
  aspect-ratio: 1 / 1;
}
label {
  width: 100%;
}
input {
  width: 100%;
  border: none !important;
  &::placeholder {
    font-size: $text_1;
  }
}
}
.social-block {
  gap: .6rem;
}
.icon-container {
  width: 30px;
  height: 30px;
  border: 1px solid $light-gray;
  color: $gray;
  border-radius: 5px;
  background-color:#edede8;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
  }
  }
.buttons-block {
  font-family: "Vidaloka", serif;
  color: $black;
  border: 1px solid rgb(214, 213, 213);

  .popular {
    width: 50%;
    border-right: 1px solid transparent;
    background-color: white;
    border-right: 1px solid rgb(214, 213, 213);
    padding: .5rem;
    font-weight: 500;
  }
  .recent {
    width: 50%;
    padding: .5rem;
    font-weight: 500;
  }
}
.article {
  gap: .6rem;
  margin-bottom: 1.5rem;
  font-size: $text_1 !important;
  h5 {
    font-size: .9rem;
  }
}
.article img {
  clip-path: circle();
  width: 45px;
  height: 45px;
}

.info-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  color: lightgray;
  border: 1px solid $light-gray;
  border-radius: 100px;
  font-size: $text_2;
  padding: .2rem
}

.tweet {
  background-color: white;
  font-size: $text_1;
  padding: 1.2rem;
  .username {
    gap: .5rem;
  }
  .body-title {
    font-size: $text_1;
    font-weight: 500;
  }
  .body-username {
    font-size: .7rem;
  }
  .tweet-paragraph {
    font-size: .7rem;
  }
}

.tweet-body {
  gap: .5rem;
}
.theme-fusion-logo {
  width: 10%;
  align-self: baseline;
}
.acca {
  border-bottom: 1px dotted $black;
}
.follow-us {
  font-size: $text_2;
}
.view-city-guides {
  font-size: $text_1;
  padding: .5em;
  font-weight: 500;
}
.header-username {
  padding-top: 5px;
  color: blue;
}
</style>
