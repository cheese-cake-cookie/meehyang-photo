<template>
  <div>
    <section class="section">
      <p class="message--empty" v-if="!musics.length">oops! nothing in here!</p>
      <ul class="image__list" v-else>
        <ImageItem
          class="image__item"
          v-for="(music, index) in musics"
          :key="index"
          :url="music.preview"
          :description="music.description"
        />
      </ul>
    </section>
    <!-- <section class="section">
      <h1 class="section__title">People</h1>
      <p v-if="!peoples.length" class="message--empty">empty content</p>
      <ul class="image__list" v-else>
        <ImageItem
          class="image__item"
          v-for="(people, index) in peopless"
          :key="index"
          :url="people.preview"
          :description="people.description"
        />
      </ul>
    </section>
    <section class="section">
      <h1 class="section__title">Travel</h1>
      <p v-if="!travels.length" class="message--empty">empty content</p>
      <ul class="image__list" v-else>
        <ImageItem
          class="image__item"
          v-for="(travel, index) in travels"
          :key="index"
          :url="travel.preview"
          :description="travel.description"
        />
      </ul>
    </section> -->
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const musics = await $content('/musics')
      .fetch()
      .catch((err) => []);

    return {
      musics,
      // peoples,
      // travels,
    };
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    };
  },
  methods: {
    moveToMusicItem(music) {
      this.$router.push({ path: `/music/${music.slug}` });
    },
  },
};
</script>
<style lang="scss" scoped>
.message {
  &--empty {
    padding: 100px;
    text-align: center;
  }
}

.section {
  &__title {
    padding: 15px;
    font-size: 18px;
  }
}
.image {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
}

@include breakpoint(tablet) {
  .image {
    &__list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
