<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label for="username">账号:</label>
      <input type="text" v-model="loginId" id="username" />
    </div>
    <div class="form-item">
      <label for="password">密码:</label>
      <input
        type="password"
        v-model="loginPwd"
        autocomplete="new-password"
        id="password"
      />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">
        {{ loading ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
/**
 * {
 *  loading(){
 *    return this.$store.state.loginUser.loading
 *  },
 *  user(){
 *    return this.$store.state.loginUser.user
 *  }
 * }
 *
 *  */
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  computed: mapState("loginUser", ["loading"]),
  // computed: {
  // 可以自己写计算属性
  // loading() {
  //   return this.$store.state.loginUser.loading;
  // },

  //vuex 提供的api
  // ...mapState("loginUser", ["loading", "user"]),
  // },
  methods: {
    async handleSubmit() {
      const resp = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (resp) {
        // 登录成功
        const path = this.$route.query.returnUrl || "/";
        this.$router.push(path);
      } else {
        alert("账号密码错误");
        this.loginId = "";
        this.loginPwd = "";
      }
    },
  },
};
</script>

<style scoped>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}
.form-item label {
  width: 70px;
}
.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
  cursor: pointer;
}
</style>