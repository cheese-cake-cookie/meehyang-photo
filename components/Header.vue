<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="header__logo">
        <div class="header__logo-image"></div>
        <h1 class="header__title">Meehyang Photo</h1>
      </NuxtLink>
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

  &__logo {
    display: flex;
    flex-direction: row;
    align-content: center;
    cursor: pointer;
  }
  &__logo-image {
    margin-right: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: lightgray;
    background-image: url('/favicon.ico');
    background-size: cover;
  }

  &__title {
    align-self: center;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    justify-content: center;
    width: 100%;
  }

  &__nav {
    margin: 10px 0px 0px;
  }

  &__list {
    display: flex;
    flex-direction: row;
  }

  &__item:not(:last-child) {
    margin-right: 10px;
  }
}

@include breakpoint(laptop) {
  .header {
    &__container {
      flex-direction: row;
      align-items: center;
    }

    &__nav {
      margin: 0px 0px 0px auto;
    }
  }
}
</style>
