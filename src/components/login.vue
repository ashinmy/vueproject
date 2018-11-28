<template>
  <section>
    <div class="login">
      <label>
        <span>用户名</span>
        <input v-model="username" @change="setUser">
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      username:''
    }
  },
  methods:{
    setUser:function () {/*在setUser中使用了$emit来遍历transferUser事件，并返回this.username其中transfer是一个自定义事件，功能类似于一个中专，this.username通过这个事件传递给父组件*/
      this.$emit('transferUser',this.username)
    }
  }
}
</script>

<style scoped>

</style>
