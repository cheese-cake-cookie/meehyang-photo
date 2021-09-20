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
        @click="showContent(daily.content)"
      />
    </ul>
    <ImageSliderModal
      ref="imageSliderModal"
      :images="content"
    ></ImageSliderModal>
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
  data() {
    return {
      content: [],
    };
  },
  methods: {
    showContent(content) {
      this.content = content;
      this.$nextTick(() => {
        this.$refs.imageSliderModal.$emit('show');
      });
    },
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
