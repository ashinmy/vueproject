<template>
  <header>
    <div id="logo">{{logo}}</div>
    <ul class="nav">
      <li v-for="nav in navs">{{nav.li}}</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navs: [
        {li: '主页'},
        {li: '日志'},
        {li: '说说'},
        {li: '相册'},
        {li: '留言板'}
      ]
    }
  },
  props: ['logo']
}
</script>

<style scoped>
 ul{
   overflow: hidden;
 }
 ul>li{
   float: left;
   list-style: none;
 }
</style>
