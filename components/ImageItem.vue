<script>
export default {
  name: 'ImageItemComponent',
  functional: true,
  render(h, { props, listeners, data }) {
    const { image, title, description } = props;

    const img = h('img', {
      staticClass: 'image',
      class: [],
      attrs: {
        src: image,
      },
      on: {
        load: () => {
          img.elm.classList.add('showing');
          if (img.elm.height > img.elm.width) {
            img.elm.classList.add('horizontal');
          }
        },
      },
    });

    const dim = h(
      'div',
      {
        staticClass: 'image__dim',
      },
      [
        h(
          'p',
          {
            staticClass: 'image__title',
          },
          title || 'IMAGE TITLE'
        ),
        h(
          'p',
          {
            staticClass: 'image__description',
          },
          description || 'IMAGE DESCRIPTION'
        ),
      ]
    );

    return h(
      'div',
      {
        staticClass: data.staticClass.concat(' image-item-component'),
        class: { ...data.class },
        on: {
          ...listeners,
        },
      },
      [img, dim]
    );
  },
};
</script>

<style lang="scss">
.image-item-component {
  position: relative;
  display: inline-flex;
  justify-content: center;
  padding-bottom: 100%;
  overflow: hidden;
  background-color: lightgray;
  font-size: 0px;
  cursor: pointer;
  transform: translate3d(0px, 15px, 0px);
  transition: transform 0.3s ease-in-out;

  &.showing {
    transform: translate3d(0px, 0px, 0px);
  }

  &:hover {
    & .image__dim {
      opacity: 1;
    }

    & .image {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    & .image__title,
    & .image__description {
      transform: translate3d(0px, 0px, 0px);
    }
  }
}

.image {
  position: absolute;
  width: auto;
  height: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &.horizontal {
    width: 100%;
    height: auto;
  }

  &.showing {
    opacity: 1;
  }

  &__dim {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0px;
    opacity: 0;
  }

  &__title {
    @include sub-title1;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 35px;
    font-size: 15px;
    color: #fff;
    transform: translate3d(0px, 50px, 0px);
    transition: 0.2s ease-in-out;
  }

  &__description {
    @include paragraph;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 13px;
    color: #fff;
    transform: translate3d(0px, 50px, 0px);
    transition: 0.2s ease-in-out;
  }
}
</style>
