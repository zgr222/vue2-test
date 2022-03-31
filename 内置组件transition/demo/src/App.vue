<template>
  <div class="app-container">
    <List />
    <!-- <Banner /> -->
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import List from "./components/List.vue";
export default {
  components: { Banner, List },
};
</script>

<style scoped>
</style>