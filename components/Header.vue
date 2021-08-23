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
            <NuxtLink to="/profile">PROFILE</NuxtLink>
          </li>
          <li class="header__item"><NuxtLink to="/travel">TRAVEL</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 3px 0px #e6e7e8;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: $desktop-width;
    margin: 0px auto;
  }

  &__nav {
    margin-left: auto;
  }

  &__list {
    display: flex;
    flex-direction: row;
  }
}
</style>
