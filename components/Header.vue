<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="header__logo">
        <div class="header__logo-image"></div>
        <h1 class="header__title">Meehyang Photo</h1>
      </NuxtLink>
      <nav class="header__nav">
        <ul class="header__list">
          <li
            class="header__item"
            :class="{ selected: selectedGnbMenu == gnb }"
            v-for="gnb in gnbMenu"
            :key="gnb.name"
          >
            <NuxtLink :to="gnb.to">{{ gnb.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapState({
      gnbMenu: (state) => state.gnbMenu,
      selectedGnbMenu: (state) => state.selectedGnbMenu,
    }),
  },
  watch: {
    $route(newValue) {
      this.$store.commit(
        'SET_SELECTED_GNB_MENU',
        this.$store.state.gnbMenu.find((menuItem) => {
          return this.$route.path.match(menuItem.regex);
        })
      );
    },
  },
  created() {
    this.$store.commit(
      'SET_SELECTED_GNB_MENU',
      this.$store.state.gnbMenu.find((menuItem) => {
        return this.$route.path.match(menuItem.regex);
      })
    );
  },
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

  &__item.selected {
    background-image: linear-gradient(90deg, #aedaf1 95%, #75ccff);
    background-size: 100% 35%;
    background-repeat: no-repeat;
    background-position: bottom;
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
