<template>
  <div class="banner-container">
    <div class="btns">
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </div>
    <transition :name="direction">
      <img :src="curImg" class="image" :key="curIndex" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://10.idqqimg.com/eth/ajNVdqHZLLAJib8odhz8Th2Z4Gat0axooYaxANJlaLEwTomre0hx8Y5yib6FxDZxsgiaYG1W2ETbrU/130?tp=webp",
        "https://10.idqqimg.com/eth/ajNVdqHZLLDqYf0PtFibF9JNOnRbAw7DicWPicmfRkQwPeK2mnZ7ZJzZFdsCwCWdcwhEqoVphXiaDHE/130?tp=webp",
        "https://thirdqq.qlogo.cn/g?b=sdk&k=LaERpMuX1ZjWTQmhrhst6Q&s=100&t=0&tp=webp",
        "https://10.idqqimg.com/eth/ajNVdqHZLLDXIjdTYsqbfkxiaibd3lYGEgfiaEwficYfK2ogZDicCxaKibVibGA2Cj2ltgOvCm1tbRs1iac/130?tp=webp",
        "https://thirdqq.qlogo.cn/g?b=sdk&k=pfIficic6WRliaLULZudVI5Tw&s=640&t=1600139160&tp=webp",
      ],
      curIndex: 0,
      direction: "next",
    };
  },
  computed: {
    curImg() {
      return this.images[this.curIndex];
    },
    maxIndex() {
      return this.images.length - 1;
    },
  },
  methods: {
    prev() {
      this.curIndex--;
      this.curIndex < 0 && (this.curIndex = 0);
      this.direction = "prev";
    },
    next() {
      this.curIndex++;
      this.curIndex > this.maxIndex && (this.curIndex = this.maxIndex);
      this.direction = "next";
    },
  },
};
</script>

<style scoped>
.banner-container {
  height: 300px;
  text-align: center;
}

.btns {
  margin: 20px 0;
}
.btns button {
  margin: 0 1em;
}
.image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -100px;
}

.next-enter,
.next-leave-to,
.prev-enter,
.prev-leave-to {
  opacity: 0;
}

.next-enter,
.prev-leave-to {
  transform: translateX(200px);
}
.next-leave-to,
.prev-enter {
  transform: translateX(-200px);
}

.next-enter-active,
.next-leave-active,
.prev-enter-active,
.prev-leave-active {
  transition: 1s;
}
</style>