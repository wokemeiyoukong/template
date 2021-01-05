<template>
  <div class="image_tailor">
    <input type="file" @change="handleChange">
    <div v-show="fileSrc">
      <canvas id="canvas" width="300" height="300">client no support</canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tailor',
  data() {
    return {
      fileSrc: ''
    }
  },
  props: {},
  components: {},
  created() {},
  methods: {
    handleChange(e) {
      // *获取上传文件的信息
      const file = e.target.files[0]
      // *创建filereader
      const fileReader = new FileReader()
      // *图片转换为base64
      fileReader.readAsDataURL(file)
      // *onload 文件读取成功触发
      fileReader.onload = (event) => {
        // *图片src
        this.fileSrc = event.target.result
        const can = document.querySelector('canvas')
        if (can.getContext) {
          const ctx = can.getContext('2d')
          const img = new Image()
          img.src = event.target.result
          img.onload = function() {
            // ctx.beginPath()
            // ctx.arc(200, 200, 100, 0, Math.PI * 2)
            // ctx.fill()
            // ctx.clip()
            ctx.drawImage(this, 0, 0)
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
canvas
  box-shadow 0 0 10px #c0c0c0
</style>
