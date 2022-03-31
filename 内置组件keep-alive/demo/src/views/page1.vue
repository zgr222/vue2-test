<template>
  <div class="page-container">
    <h1>page1</h1>
    <input type="text" placeholder="input something" />
    <div>
      <button @click="count--">-</button>
      <span>{{ count }}</span>
      <button @click="count++">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 70%;
    height: 30px;
    padding: 20px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 20px;
  }
  button {
    font-size: 20px;
    margin: 0 20px;
  }
  span {
    font-size: 20px;
  }
}
</style>