<template>
  <div class="container" @click.prevent>
    <div class="error">
      <NuxtLink class="link-to-home" to="/">
        <p class="error__message">Something goes wrong!</p>
        <img src="/logo_png.png" />
        <p class="error__description">
          Click logo and go back to the main page
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 99;
  background-color: #f1b500;

  &__message {
    font-weight: bold;
    text-align: center;
  }

  &__description {
    color: #fff;
  }

  & img {
    width: 100px;
    height: 100px;
  }
}

.link-to-home {
  text-align: center;
}
</style>
