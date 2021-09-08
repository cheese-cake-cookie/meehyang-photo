<script>
export default {
  name: 'ImageItemComponent',
  functional: true,
  render(h, { props, listeners }) {
    const { url, title, description } = props;

    const image = h('img', {
      staticClass: 'image',
      class: [],
      attrs: {
        src: url || 'https://picsum.photos/300/300',
      },
      on: {
        load: () => {
          image.elm.classList.add('showing');
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
        staticClass: 'image-item-component',
        on: {
          ...listeners,
        },
      },
      [image, dim]
    );
  },
};
</script>

<style lang="scss">
.image-item-component {
  position: relative;
  display: inline-flex;
  padding-bottom: 100%;
  overflow: hidden;
  background-color: lightgray;
  font-size: 0px;
  cursor: pointer;

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
  width: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out;

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
    bottom: 35px;
    color: #fff;
    transform: translate3d(0px, 50px, 0px);
    transition: 0.2s ease-in-out;
  }

  &__description {
    @include paragraph;
    position: absolute;
    bottom: 15px;
    color: #fff;
    transform: translate3d(0px, 50px, 0px);
    transition: 0.2s ease-in-out;
  }
}
</style>
