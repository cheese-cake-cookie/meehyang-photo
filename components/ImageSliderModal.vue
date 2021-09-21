<template>
  <UiModal name="imageSliderModal" ref="modal" disabled-button>
    <div class="slider__wrap">
      <ul class="slider__list" :style="sliderListStyle" @click="closeSlider">
        <li
          class="slider__item"
          :class="{ selected: selectedIndex === index }"
          v-for="(image, index) in images"
          :key="index"
        >
          <img class="slider__image" :src="image" />
        </li>
      </ul>
      <button
        class="slider__button slider__button--prev"
        v-show="!isFirst"
        @click="moveToPrev"
      >
        <img src="/public/images/btn_prev.png" />
      </button>
      <button
        class="slider__button slider__button--next"
        v-show="!isLast"
        @click="moveToNext"
      >
        <img src="/public/images/btn_next.png" />
      </button>
    </div>
  </UiModal>
</template>

<script>
export default {
  name: 'imageSliderModal',
  props: {
    images: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      windowInnerWidth: 0,
      selectedIndex: 0,
      durationSeconds: 200,
    };
  },
  computed: {
    itemWidth() {
      return this.windowInnerWidth * 0.6;
    },
    isFirst() {
      return this.selectedIndex === 0;
    },
    isLast() {
      return this.selectedIndex === this.images.length - 1;
    },
    sliderListStyle() {
      let translateX = Math.floor(this.images.length / 2) * this.itemWidth;

      if (this.images.length % 2 === 0) {
        translateX -= this.itemWidth / 2;
      }

      translateX -= this.selectedIndex * this.itemWidth;

      return {
        width: `${this.images.length * this.itemWidth}px`,
        transform: `translate3d(${translateX}px, 0px, 0px)`,
        webkitTransform: `translate3d(${this.translateX}px, 0px, 0px)`,
        mozTransform: `translate3d(${this.translateX}px, 0px, 0px)`,
        transitionDuration: `${this.durationSeconds}ms`,
        webkitTransitionDuration: `${this.durationSeconds}ms`,
        moxTransitionDuration: `${this.durationSeconds}ms`,
      };
    },
  },
  created() {
    this.$on('show', this.showModal);
    this.$on('hide', this.hideModal);
  },
  mounted() {
    this.windowInnerWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.windowInnerWidth = window.innerWidth;
    });
  },
  methods: {
    showModal() {
      this.selectedIndex = 0;
      this.$refs.modal.$emit('show');
    },
    hideModal() {
      this.$refs.modal.$emit('hide');
    },
    closeSlider(e) {
      if (e.target !== e.currentTarget) return;

      this.hideModal();
    },
    moveToPrev() {
      if (this.isFirst) return;
      this.selectedIndex -= 1;
    },
    moveToNext() {
      if (this.isLast) return;
      this.selectedIndex += 1;
    },
  },
};
</script>

<style lang="scss">
.slider {
  &__wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
  }
  &__list {
    display: flex;
    position: relative;
    align-items: center;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
    width: 60vw;
    max-height: 70vh;
    text-align: center;
    overflow: hidden;
  }

  &__image {
    width: auto;
    height: auto;
    max-height: 70vh;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 1px rgb(0 0 0 / 50%);
    box-sizing: border-box;
  }

  &__button {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0.8;

    & > img {
      width: 100%;
      height: 100%;
    }

    &--prev {
      left: -20px;
    }

    &--next {
      right: -20px;
    }
  }
}

@include breakpoint(laptop) {
  .slider {
    &__item {
      max-height: 90vh;
    }
  }
}
</style>
