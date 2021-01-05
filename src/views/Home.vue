<template>
  <div class="home">
    <div v-copy="text">复制</div>
    <div v-longpress="longPress">longPress</div>
    <button v-longpress="longPress">长按</button>
    <button v-debounce="debounceClick">防抖</button>
    <!-- 显示 -->
    <button v-permission="'1'">权限按钮1</button>
    <!-- 不显示 -->
    <button v-permission="'5'">权限按钮2</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      text: '这是要复制的文字'
    }
  },
  methods: {
    longPress() {
      alert('长按成功！')
    },
    debounceClick() {
      console.log('只触发一次')
    }
  }
}
</script>
