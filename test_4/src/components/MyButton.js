
const template = `<button @click="count++">当前点击了{{count}}次</button>`;

export default {
    data() {
        return {
            count: 0
        }
    },
    template
}

// 在开发中，就是每个人都写自己的组件，最后拼接在一起