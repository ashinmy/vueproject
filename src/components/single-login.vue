<template>
  <div class="loginDiv">
    <div class="login">
      <p>用户登录</p>
      <p class="loginContent">
        <label>用户名:</label>
        <input v-model="userName" placeholder="请输入用户名">
      </p>
      <p>
        <label>密&nbsp;&nbsp;&nbsp;码:</label>
        <input v-model="password" placeholder="请输入密码">
      </p>
      <p class="warning">请输入用户名和密码</p>
      <div class="loginButton">
        <button @click="goFirst">登录</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'single-login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    goFirst: function () {
      if ((this.username === '') || (this.password === '')) {
        alert('请输入用户名密码')
        return
      }
      this.$router.push({
        path: '/single-page/page01'
      })
    }
  }
}
</script>

<style scoped>
.loginDiv{
  width: 100%;
  height: 100%;
  background-image: url('../assets/login-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}
.login{
  margin: 0 auto;
  height: 250px;
  width: 350px;
  border: 1px solid #000;
  text-align: center;
  position: absolute;
  top: 30%;
  right: 5%;
  border-radius: 10px;
  background: #fff;
}
.loginContent{
  padding-top: 20px;
}
.loginButton{
  padding-top: 20px;
}
.loginButton>button{
  width: 235px;
  background: #2d8cf0;
  outline: 0;
  color: #fff;
  cursor: pointer;
  line-height: 2;
}
.warning{
  color: red;
  display: none;
}
</style>
