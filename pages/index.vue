<template>
  <div>{{ posts }}</div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('/').fetch();

    return {
      posts,
    };
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    };
  },
};
</script>
