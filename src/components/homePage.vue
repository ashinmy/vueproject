<template>
  <div id="home_page">
    <HeaderDiv :logo="logoMsg"></HeaderDiv>
    <h1>我是魔鬼哦</h1>
  </div>
</template>

<script>
import HeaderDiv from './childComponents/Header'
export default {
  name: 'homePage',
  data(){
    return{
      logoMsg:'XuYuan'/*父组件往子组件里传递数据,子组件HeaderDiv里面通过props接收父组件传递过来的数据*/
    }
  },
  components:{
    HeaderDiv
  }
}
</script>

<style scoped>

</style>
