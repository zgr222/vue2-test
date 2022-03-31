<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  created() {
    // this.$watch 或者 this.$store.watch 都行
    this.unWatch = this.$store.watch(
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          this.$router
            .push(this.$route.query.returnUrl || { name: "home" })
            .catch(() => {});
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>

<style>
</style>