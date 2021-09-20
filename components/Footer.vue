<template>
  <footer class="footer">
    <p>Copyright &copy; 2021 by Meehyang Kim</p>
    <ul class="profile__list">
      <li class="profile__item">
        <a href="https://www.linkedin.com/in/meehyang-kim/" target="_blank"
          >linkedin</a
        >
      </li>
      <li class="profile__item">
        <a href="https://github.com/cheese-cake-cookie" target="_blank"
          >github</a
        >
      </li>
      <li class="profile__item">
        <a href="https://www.instagram.com/meehyang_photo/" target="_blank"
          >instagram</a
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
}
.profile {
  &__list {
    display: flex;
    margin-left: auto;
  }

  &__item:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
