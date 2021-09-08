<template>
  <div>index</div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { slug } = params;

    const item = await $content(`/music/${slug}`).fetch();

    return {
      item,
    };
  },
};
</script>

<style></style>
