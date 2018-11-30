<template>
  <div>
    <div class="topBanner">
      <span>多拉白条</span>
      <p class="userInfo">
        <label class="userType">管理员:</label>
        <span class="userName">张三</span>
        <button class="userQuit" @click="userQuit">退出</button>
      </p>
    </div>
    <div class="menu">
      <div class="menuBackground">
        <ul class="totalMenu">
          <li v-for="item in links" v-bind:class="{liActive:item.index===ins}">
            <a @click="$goRoute(item)">
              <img style="width: 36px;height: 36px;padding-top: 12px;padding-bottom: 4px" v-bind:src="item.img">
              <span style="display: block;">{{item.text}}</span>
            </a>
            <span v-bind:class="{spanActive:item.index===ins}"></span>
          </li>
        </ul>

      </div>
    </div>
    <ul class="childrenMenu">
      <li v-for="childrenItem in childrenMenu[ins]">
        <button @click="childrenShow(childrenItem)" v-bind:class="{buttonActive:childrenItem.index===childrenIns}">
          <span style="display: block;">{{childrenItem.text}}</span>
        </button>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'single-page',
  data () {
    return {
      ins:0,
      childrenIns:0,
      links: [
        {
          index:0,
          text: '授信管理',
          route: '/single-page/page01',
          img:require('../assets/pg1.png')
        },
        {
          index:1,
          text: '报表管理',
          route: '/single-page/page02',
          img:require('../assets/pg2.png')
        },
        {
          index:2,
          text: '用信申请',
          route: '/single-page/page03',
          img:require('../assets/pg3.png')
        },
        {
          index:3,
          text: '还款管理',
          route: '/single-page/page01',
          img:require('../assets/pg4.png')
        },
        {
          index:4,
          text: '交易统计',
          route: '/single-page/page02',
          img:require('../assets/pg5.png')
        },
        {
          index:5,
          text: '系统设置',
          route: '/single-page/page03',
          img:require('../assets/pg5.png')
        }
      ],
      childrenMenu: [
        [
          {
            index:0,
            text: '授信管理',
            route: '/single-page/page01',
          },
          {
            index:1,
            text: '报表管理',
            route: '/single-page/page02',
          },
          {
            index:2,
            text: '用信申请',
            route: '/single-page/page03',
          },
          {
            index:3,
            text: '还款管理',
            route: '/single-page/page01',
          },
          {
            index:4,
            text: '交易统计',
            route: '/single-page/page02',
          },
          {
            index:5,
            text: '系统设置',
            route: '/single-page/page03',
          }
        ],
        [
          {
            index:0,
            text: '还款管理',
            route: '/single-page/page02',
          },
          {
            index:1,
            text: '交易统计',
            route: '/single-page/page01',
          },
          {
            index:2,
            text: '系统设置',
            route: '/single-page/page03',
          }
        ],
        [
          {
            index:0,
            text: '还款管理',
            route: '/single-page/page03',
          },
          {
            index:1,
            text: '交易统计',
            route: '/single-page/page01',
          },
          {
            index:2,
            text: '系统设置',
            route: '/single-page/page02',
          }
        ],
        [
          {
            index:0,
            text: '用信经办',
            route: '/single-page/page01',
          },
          {
            index:1,
            text: '用信初审',
            route: '/single-page/page02',
          },
          {
            index:2,
            text: '用信终审',
            route: '/single-page/page03',
          }
        ],
      ],
    }
  },
  methods:{
    $goRoute:function (item) {
      this.ins = item.index;
      this.childrenIns = 0;
      this.$router.push(item.route)
    },
    childrenShow:function (childrenItem) {
      this.childrenIns = childrenItem.index;
      this.$router.push(childrenItem.route)
    },
    userQuit:function () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
  .topBanner{
    background: #000;
    overflow: hidden;
    padding: 10px 100px;
  }
  .topBanner>span{
    color: #fff;
    font-size: 16px;
    font-weight: bold;

  }
  .topBanner>.userInfo{
    float: right;
    color: #807f88;
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
  .userInfo>.userName{
      padding-right: 10px;
  }
  .userInfo>.userQuit{
    border-radius: 2px;
    background: #ac210f;
    padding: 3px 25px;
    color: #fff;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
  }
  .menu{
    background: #000;
    padding: 0;
    margin: 0;
    height: 130px;
    border-bottom: 1px solid #43444a;
  }
  .menu>.menuBackground{
    overflow: hidden;
    padding: 0;
    margin: 0;
    height: 100%;
    background-image: url('../assets/menuBackground.png');
    background-size: cover;
    background-position: center;
  }
  .menuBackground>.totalMenu{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  .menuBackground>.totalMenu>li{
    list-style: none;
    margin: 22px;
    cursor: pointer;
  }
  .liActive{
    border: 1px solid #000;
    box-shadow: 0 0 10px inset;
    border-radius: 3px;
  }
  .spanActive{
    width: 18px;
    height: 18px;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); 	/* IE 9 */
    -moz-transform:rotate(45deg); 	/* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg);
    display: flex;
    background: #2a2b31;
    position: absolute;
    border-top: 1px solid #43444a;
    border-left: 1px solid #43444a;
    margin-left: 36px;
    margin-top: 12px
  }
  .buttonActive{
    background: #212228!important;
    border: 0!important;
    border-bottom: 1px solid #65666d!important;
    -webkit-box-shadow: 0 0 10px #000 inset!important;
    box-shadow: 0 0 10px #000 inset!important;
    color: #54545b!important;
  }
  .menuBackground>.totalMenu>li>a{
    width: 90px;
    text-align: center;
    height: 86px;
    display: inline-block;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
  .childrenMenu{
    height: 54px;
    background: #2a2b31;
    overflow: hidden;
    list-style: none;
    padding-left: 90px;
    margin: 0;

  }
  .childrenMenu>li{
    list-style: none;
    float: left;
    line-height: 54px;
  }
  .childrenMenu>li>button{
    color: #fff;
    margin: 0 20px;
    background: #42434b;
    border-radius: 4px;
    padding: 5px 30px;
    border: 0;
    border-top: 1px solid #65666d;
    box-shadow: 0 0 1px #65666d;
    outline: none;
    cursor: pointer;
  }
</style>
