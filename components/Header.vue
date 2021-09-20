<template>
  <header class="header">
    <div class="header__container">
      <div class="logo"></div>
      <h1 class="header__title">Meehyang Photo</h1>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item"><NuxtLink to="/">ALL</NuxtLink></li>
          <li class="header__item"><NuxtLink to="/music">MUSIC</NuxtLink></li>
          <li class="header__item">
            <NuxtLink to="/people">PEOPLE</NuxtLink>
          </li>
          <li class="header__item"><NuxtLink to="/daily">DAILY</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 50px;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  &__nav {
    margin-left: auto;
  }

  &__list {
    display: flex;
    flex-direction: row;
  }

  &__item:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
