<template>
  <section class="post-section">
    <p class="message--empty" v-if="!peoples.length">oops! nothing in here!</p>
    <ul class="image__list" v-else>
      <ImageItem
        class="image__item"
        v-for="(people, index) in peoples"
        :key="index"
        :title="people.title"
        :description="people.description"
        :image="people.preview"
        @click="showContent(people.content)"
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
    const peoples = await $content('/people')
      .fetch()
      .catch((err) => []);

    return {
      peoples,
    };
  },
  head() {
    return {
      title: 'people',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The precious people around me :)',
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
