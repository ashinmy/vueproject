<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'single-app',
  data () {
    return {
      data: '测试'
    }
  }
}
</script>

<style scoped>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
