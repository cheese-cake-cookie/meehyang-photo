<template>
  <div id="content" class="content theme--light">
    <Header class="layout__header" />
    <Nuxt class="layout__content" />
    <Footer class="layout__footer" />
  </div>
</template>
<style lang="scss">
.content {
  width: 100%;
}
.layout {
  &__header {
    position: sticky;
    padding: 10px 15px;
    height: auto;
    top: 0px;
    z-index: 1;
    background: #fff;
    box-shadow: 0px 0px 3px 0px #e6e7e8;
  }
  &__content {
    padding: 10px 0px;
  }
  &__footer {
    position: sticky;
    padding: 10px 15px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #fff;
    box-shadow: 0px 0px 3px 0px #e6e7e8;
  }
}

@include breakpoint(laptop) {
  .layout {
    &__header {
      position: fixed;
      padding: 10px 15px;
      height: 50px;
      top: 0px;
      left: 0px;
      right: 0px;
      background: #fff;
    }

    &__content {
      margin: 0px auto;
      width: $desktop-width;
    }
  }
}
</style>
