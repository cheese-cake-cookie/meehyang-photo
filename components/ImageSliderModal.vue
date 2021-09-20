<template>
  <UiModal name="imageSliderModal" ref="modal" disabled-button>
    <div class="slider__wrap">
      <button class="slider__button slider__button--close">
        <img src="/public/images/btn_prev.png" />
      </button>
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
    isFirst() {
      return this.selectedIndex === 0;
    },
    isLast() {
      return this.selectedIndex === this.images.length - 1;
    },
    sliderListStyle() {
      let translateX =
        Math.floor(this.images.length / 2) * this.windowInnerWidth * 0.7;

      if (this.images.length % 2 === 0) {
        translateX -= (this.windowInnerWidth * 0.7) / 2;
      }

      translateX -= this.selectedIndex * this.windowInnerWidth * 0.7;

      return {
        width: `${this.images.length * this.windowInnerWidth * 0.7}px`,
        transform: `translate3d(${translateX}px, 0px, 0px)`,
        'transition-duration': `${this.durationSeconds}ms`,
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
    width: 70vw;
  }
  &__list {
    display: table;
    white-space: nowrap;
    overflow: hidden;
  }

  &__item {
    display: inline-block;
    padding: 0px 15px;
    width: 70vw;
    height: auto;
    border-radius: 8px;
    text-align: center;
  }

  &__image {
    width: 100%;
    height: inherit;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
  }

  &__button {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0.8;

    & > img {
      width: 100%;
      height: 100%;
    }

    &--prev {
      left: -25px;
    }

    &--next {
      right: -25px;
    }
  }
}

@include breakpoint(laptop) {
  .slider {
    &__item {
      height: 70vh;
    }
    &__image {
      width: auto;
      height: 100%;
    }
  }
}
</style>
