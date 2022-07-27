<template>
  <div class="main">
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe> -->
    <div class="swipt-search">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="padd">
        <div class="search-ipt">
          <img src="../../assets/images/home/icon_search.svg" alt="">
          <input type="text" placeholder="请输入公司/产品分类/城市">
          <span @click="btnSearch">搜索</span>
        </div>
      </div>
    </div>
    <div class="search">
      <!-- <div class="search-ipt">
        <img src="../../assets/images/home/icon_search.svg" alt="">
        <input type="text" placeholder="请输入公司/产品分类/城市">
        <span @click="btnSearch">搜索</span>
      </div> -->
      <div class="search-hot">
        <img src="../../assets/images/home/icon_hot.svg" alt="">
        <ul>
          <li v-for="(val, idx) in hotArr" :key="idx">{{val}}</li>
        </ul>
      </div>
    </div>
    <div class="recommend-list">
      <img src="../../assets/images/home/img_recommend.svg" alt="">
      <div class="list" @click="() => detailBtn()">
        <div class="title">
          <h2>北京四维图新科技股份有限公司</h2>
          <span>北京</span>
        </div>
        <div class="segmentation"/>
        <ul class="type">
          <li v-for="(val, idx) in listArrr" :key="idx">{{val}}</li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h2>北京四维图新科技股份有限公司</h2>
          <span>北京</span>
        </div>
        <div class="segmentation"/>
        <ul class="type">
          <li v-for="(val, idx) in listArr" :key="idx">{{val}}</li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h2>北京四维图新科技股份有限公司</h2>
          <span>北京</span>
        </div>
        <div class="segmentation"/>
        <ul class="type">
          <li v-for="(val, idx) in listArr" :key="idx">{{val}}</li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h2>北京四维图新科技股份有限公司</h2>
          <span>北京</span>
        </div>
        <div class="segmentation"/>
        <ul class="type">
          <li v-for="(val, idx) in listArr" :key="idx">{{val}}</li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h2>北京四维图新科技股份有限公司</h2>
          <span>北京</span>
        </div>
        <div class="segmentation"/>
        <ul class="type">
          <li v-for="(val, idx) in listArr" :key="idx">{{val}}</li>
        </ul>
      </div>
    </div>
    <div class="bottom-login">
      <span class="bottom-login-null">没有更多了</span>
      <img src="../../assets/images/home/icon_arrow.svg" alt="">
      <van-button class="immediately-login" @click="btnLogin">立即登录</van-button>
      <span class="bottom-login-text">登录后可查看更多的芯片公司及产品</span>
    </div>
    <div class="fixed">
      <div>
        <span>注册并关注公众号送积分</span>
        <span>登录后查看更多的芯片公司及产品</span>
      </div>
      <van-button @click="btnLogin">立即登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data(){
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      hotArr: ['通用MCU', '电流源', '热电制冷器控制器', '电源管理'],
      listArr: ['网络通信与互联', '自动驾驶', '车用无线电'],
      listArrr: ['网络通信与互联', '热电制冷器控制器', '热电制冷器控制器'],
    }
  },
  methods: {
    btnLogin() {
      this.$router.push('/login')
      // this.$router.push('/login')
      // this.$router.push({name:'login'})
      // this.$router.push({path:'/login'})
    },
    btnSearch() {
      this.$router.push('/search')
    },
    detailBtn() {
      this.$router.push('/details')
    }
  }
}
</script>

<style scoped lang="scss">
/deep/.van-swipe__indicators {
  bottom: 38px!important;
  display: flex;
  align-items: center;
  justify-content: center;
  .van-swipe__indicator--active {
    width: 13px;
    opacity: 0.4;
    height: 4px;
    border-radius: 2px;
    background: #1b243d;
  }
}
.main {
  position: relative;
  .fixed {
    display: none!important;
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    left: 0;
    bottom: 50px;
    background: rgba(0,0,0,0.60);
    padding: 0 16px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    div {
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      margin: 10px 0;
      line-height: 20px;
      span {
        display: block;
      }
    }
    .van-button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      margin: 8px 0;
      background: #2c68ff;
      border-radius: 8px;
    }
  }
}

.swipt-search {
  width: 100%;
  position: relative;
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 184px;
    color: #fff;
    font-size: 20px;
    line-height: 184px;
    text-align: center;
    background-color: #39a9ed;
  }
  .padd {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: -14px;
  }
  .search-ipt {
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #7daaff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    img {
      margin-left: 16px;
    }
    input {
      flex: 1;
      height: 47px;
      border: none;
      font-size: 15px;
      padding-left: 8px;
      font-weight: 400;
      color: #9ea5bb;
      border-radius: 8px;
    }
    span {
      display: inline-block;
      width: 54px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: #2c68ff;
      border-radius: 6px;
      font-size: 15px;
      font-weight: 400;
      color: #ffffff;
      margin-right: 8px;
    }
  }
}


.search {
  padding: 26px 16px 24px;
  .search-hot {
    display: flex;
    align-items: center;
    ul {
      margin-left: 8px;
      display: flex;
      flex-direction: inherit;
      li {
        margin-right: 12px;
        font-size: 12px;
        font-weight: 400;
        color: #5a6073;
      }
    }
  }
}
.recommend-list {
  padding: 0 16px;
  transform: translateZ(0);
  .list {
    margin: 12px 0 16px 0;
    width: 343px;
    height: 99px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      // border-bottom: 1px solid #e8ebf3;
      padding: 0 16px;
      position: relative;
      h2 {
        font-size: 17px;
        // font-weight: 500;
        color: #1b243d;
      }
      span {
        width: 40px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(44,104,255,0.08);
        border-radius: 11px;
        color: #2c68ff;;
      }
    }
    .title:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      width: 4px;
      height: 20px;
      background: #2c68ff;
      border-radius: 0px 2px 2px 0px;
    }
    .type {
      display: flex;
      align-items: center;
      height: 48px;
      margin: 0 16px;
      overflow: hidden;
      white-space: nowrap;//内容超出不换行
      // text-overflow: ellipsis;
      li {
        margin-right: 16px;
        font-size: 14px;
        font-weight: 400;
        color: #5a6073;
        &:last-child {
          // background:#000000;
          // background-color: #000000;
          // background-image: linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(128, 128, 128, 1) 75%, rgba(0, 0, 0, 1) 100%);
          // background-size: 100%;
          // background-repeat: repeat;
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent; 
          // -moz-background-clip: text;
          // -moz-text-fill-color: transparent;
        }
      }
    }
  }
}
.bottom-login {
  transform: translateZ(0);
  padding: 0 47px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bottom-login-null {
    font-size: 12px;
    font-weight: 400;
    color: #9ea5bb;
  }
  img {
    margin: 8px 0 12px 0;
  }
  .immediately-login {
    width: 100%;
    height: 44px;
    background: #2c68ff;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
  }
  .bottom-login-text {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #2c68ff;
  }
}
</style>
