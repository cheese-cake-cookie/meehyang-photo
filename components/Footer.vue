<template>
  <footer class="footer">
    <p>Copyright &copy; 2021 by Meehyang Kim</p>
    <ul class="profile__list">
      <li class="profile__item">
        <a href="https://www.linkedin.com/in/meehyang-kim/" target="_blank"
          >linkedin</a
        >
      </li>
      <li>
        <a href="https://github.com/cheese-cake-cookie" target="_blank"
          >github</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  height: 50px;
}
.profile {
  &__list {
    display: flex;
    margin-left: auto;
  }

  &__item {
    margin: 0px 15px;
  }
}
</style>
