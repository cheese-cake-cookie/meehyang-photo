<template>
  <section class="post-section">
    <p class="message--empty" v-if="!dailys.length">oops! nothing in here!</p>
    <ul class="image__list" v-else>
      <ImageItem
        class="image__item"
        v-for="(daily, index) in dailys"
        :key="index"
        :title="daily.title"
        :description="daily.description"
        :image="daily.preview"
      />
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const dailys = await $content('/daily')
      .fetch()
      .catch((err) => []);

    return {
      dailys,
    };
  },
  head() {
    return {
      title: 'daily',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The usual and unusual days of me',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.message {
  &--empty {
    padding: 100px;
    text-align: center;
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
