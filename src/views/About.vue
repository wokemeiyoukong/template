<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="area">
      <div class="item" v-for="(item, index) in list" :key="index">
        <add-input :item="item" :itemKey="index" :len="len" @onadd="handleAdd" @onminus="handleMinus" />
      </div>
    </div>
    <div class="submit">
      <Button type="success" @click="doConsole">打印</Button>
    </div>
    <Tailor />
  </div>
</template>

<script>
// @ is an alias to /src
import AddInput from '@/components/AddInput'
import Tailor from '@/components/Tailor'
import { Button } from 'view-design'
export default {
  name: 'Home',
  data() {
    return {
      list: [
        { val: '', id: 1 }
      ]
    }
  },
  components: {
    AddInput,
    Button,
    Tailor
  },
  computed: {
    len() {
      return this.list.length - 1
    }
  },
  methods: {
    handleAdd() {
      let len = this.list.length
      const item = { val: '', id: len++ }
      this.list.push(item)
    },
    handleMinus(key) {
      this.list.splice(key, 1)
    },
    doConsole() {
      console.log(this.list)
    }
  }
}
</script>

<style lang="stylus" scoped>
.about
  .area
    .item
      margin-bottom 12px
</style>
