<template>
  <div class="viewBody">
    <div class="innerBackground">
      <ul class="userInfoList">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="userInfoList">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page01',
  data () {
    return {
      value: '我是胡萝卜页'
    }
  }
}
</script>

<style scoped>
  .innerBackground{
    background-image: url('../../assets/innerBackground.png');
    background-size: cover;
    background-position: center;
    padding-top: 30px;
    padding-bottom: 74px;
  }
  .userInfoList{
    padding: 0 90px;
    list-style: none;
    overflow: hidden;
    margin: 0;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .userInfoList>li{
    width: 256px;
    height: 300px;
    background: #fff;
    margin: 20px;
    border-radius: 4px;
  }
</style>
