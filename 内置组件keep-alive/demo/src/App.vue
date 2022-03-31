<template>
  <div class="container">
    <div class="left-container">
      <h1>Web Site</h1>
      <ul>
        <li v-for="(item, i) in routesArr" :key="i">
          <router-link
            :to="{ name: item.name }"
            :class="{ active: isSelected(item.name) }"
          >
            {{ item.name }}
          </router-link>
          <button @click="addPageName(item.name)">+</button>
        </li>
      </ul>
    </div>
    <div class="right-container">
      <div class="header">
        <span>选项卡:</span>
        <ul>
          <li v-for="(item, i) in pageNames" :key="i">
            <router-link
              :to="{ name: item }"
              :class="{ active: isSelected(item) }"
              >{{ item }}</router-link
            >
            <button @click="removePageName(item)">-</button>
          </li>
        </ul>
      </div>
      <keep-alive :include="pageNames">
        <router-view></router-view>
      </keep-alive>
      <div class="demo">
        demo说明：
        <p>
          此demo实现用keep-alive对在选项卡的页面缓存当前状态，
          其中选项卡以及keep-alive的includes属性依赖于store的pageNames数据
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routesArr() {
      return this.$router.options.routes;
    },
    pageNames() {
      return this.$store.state.tabs.pageNames;
    },
  },
  created() {
    console.log(this.routesArr);
  },
  methods: {
    isSelected(item) {
      const routeName = item.toLowerCase();
      const path = location.pathname.toLowerCase();
      // console.log(routeName, path, path.endsWith(routeName));
      return path.endsWith(routeName);
    },
    addPageName(pageName) {
      this.$store.commit("tabs/addPage", pageName);
    },
    removePageName(pageName) {
      this.$store.commit("tabs/removePage", pageName);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
}

.left-container {
  width: 200px;
  height: 100vh;
  background: rgb(69, 78, 129);
  color: #fff;
  text-align: center;
  li {
    margin: 1em 0;
    button {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: orange;
      }
    }
  }
  a {
    color: #eee;
    text-decoration: none;
    &:hover {
      color: #f40;
    }
    &.active {
      color: #f40;
    }
  }
}

.right-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  .header {
    display: flex;
    height: 30px;
    align-items: center;
    span {
      font-size: 18px;
    }
    ul {
      margin-left: 20px;
      display: flex;
      li {
        margin: 0 10px;
        background: #636d9c;
        padding: 4px 10px;
        a {
          text-decoration: none;
          color: #fff;
          &:hover {
            color: #f40;
          }
          &.active {
            color: #f40;
          }
        }
        button {
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #fff;
          &:hover {
            color: orange;
          }
        }
      }
    }
  }
}

.demo {
  margin-top: 40px;
}
</style>