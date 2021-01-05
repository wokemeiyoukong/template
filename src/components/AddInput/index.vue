<template>
  <div class="add-wrap">
    <Input v-model="item.val" placeholder="Enter something..." style="width: 300px" />
    <template v-if="showMinus">
      <Icon size="28" color="#ed4014" type="ios-remove-circle" @click="doMinus()" />
    </template>
    <template v-if="lastItem">
      <Icon size="28" color="#ff8a53" type="ios-add-circle" @click="doAdd" />
    </template>
  </div>
</template>

<script>
import { Icon, Input } from 'view-design'
export default {
  name: 'AddInput',
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    itemKey: {
      type: Number,
      default: 0
    },
    len: {
      type: Number,
      default: 0
    }
  },
  components: {
    Icon,
    Input
  },
  computed: {
    lastItem() {
      // *长度1的时候显示增加按钮
      if (this.len === 0 && this.itemKey === 0) {
        return true
      } else {
        return this.itemKey === this.len
      }
    },
    showMinus() {
      return !(this.len === 0 && this.itemKey === 0)
    }
  },
  created() {},
  methods: {
    doAdd() {
      this.$emit('onadd')
    },
    doMinus() {
      this.$emit('onminus', this.itemKey)
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-wrap
  display flex
  justify-content center
  align-items center
  i
    cursor pointer
</style>

