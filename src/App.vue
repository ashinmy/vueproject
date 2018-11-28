<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <LoginDiv @transferUser="getUser"></LoginDiv>
    <p>用户名：{{user}}</p>
    <router-view/><!--容器组件，即跟组件，router-view里面显示路由中配置的组件的视图-->
  </div>
</template>
<!--测试根组件-->
<script>
import LoginDiv from './components/login'
export default {
  name: 'App',
  data(){
    return {
      user:''
    }
  },
  methods:{
    getUser(msg){/*接收子组件传过来的数据*/
      this.user = msg
    }
  },
  components:{
    LoginDiv
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
