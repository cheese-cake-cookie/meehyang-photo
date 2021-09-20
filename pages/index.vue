<template>
  <section class="post-section">
    <p class="message--empty" v-if="!posts.length">oops! nothing in here!</p>
    <ul class="image__list" v-else>
      <ImageItem
        class="image__item"
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :image="post.preview"
        @click="showContent(post.content)"
      />
    </ul>
    <ImageSliderModal
      ref="imageSliderModal"
      :images="content"
    ></ImageSliderModal>
  </section>
</template>
<script>
import { shuffle } from '@/utils/array';
export default {
  async asyncData({ $content, $axios }) {
    const musics = await $content('/music')
      // .limit(5)
      .fetch()
      .catch((err) => []);

    const peoples = await $content('/people')
      // .limit(5)
      .fetch()
      .catch((err) => []);

    const dailys = await $content('/daily')
      // .limit(5)
      .fetch()
      .catch((err) => []);

    const posts = shuffle([...musics, ...peoples, ...dailys]);
    return {
      posts: posts,
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
<style lang="scss" scoped>
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
