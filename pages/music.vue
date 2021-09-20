<template>
  <section class="post-section">
    <p class="message--empty" v-if="!musics.length">oops! nothing in here!</p>
    <ul class="image__list" v-else>
      <ImageItem
        class="image__item"
        v-for="(music, index) in musics"
        :key="index"
        :title="music.title"
        :description="music.description"
        :image="music.preview"
        @click="showContent(music.content)"
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
    const musics = await $content('/music')
      .fetch()
      .catch((err) => []);

    return {
      musics,
    };
  },
  head() {
    return {
      title: 'music',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "The pictures of korea and other countries's rock band",
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
