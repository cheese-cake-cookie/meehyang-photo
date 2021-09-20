<template>
  <div id="content" class="content theme--light">
    <Header class="layout__header" />
    <Nuxt />
    <Footer class="layout__footer" />
  </div>
</template>
<style lang="scss">
.content {
  width: 100%;
  padding-bottom: 75px;
}
.layout {
  &__header {
    position: sticky;
    padding: 15px;
    top: 0px;
    z-index: 1;
    background: #fff;
    box-shadow: 0px 0px 3px 0px #e6e7e8;
  }
  &__footer {
    position: fixed;
    padding: 10px 15px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #fff;
  }
}

@include breakpoint(desktop) {
  .content {
    margin: 0px auto;
    width: $desktop-width;
  }
}
</style>
