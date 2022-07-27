<template>
  <div class="main" :style="background">
    <div class="user-header-img">
      <img src="https://img0.baidu.com/it/u=1175687134,3044117493&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=499" alt="">
      <h2>占洁杰</h2>
      <span>上海贝岭股份有限公司</span>
    </div>
    <div class="integral-collect">
      <div class="integral" @click="integralBtn">
        <div class="integral-left">
          <img src="../../assets/images/user/icon_grade.svg" alt="">
          <span>积分</span>
        </div>
        <div class="integral-right">
          <span>578</span>
          <img src="../../assets/images/user/icon_more.svg" alt="">
        </div>
      </div>
      <div class="collect" @click="collectBtn">
        <div class="collect-left">
          <img src="../../assets/images/user/icon_collection.svg" alt="">
          <span>收藏</span>
        </div>
        <div class="collect-right">
          <img src="../../assets/images/user/icon_more.svg" alt="">
        </div>
      </div>
    </div>
    <ul class="user-function-list">
      <li v-for="(val, idx) in userList" :key="idx" @click="() => listBtn(idx)">
        <div>
          <img :src="val.img" alt="">
          <span>{{val.title}}</span>
        </div>
        <div>
          <span>{{val.titleRight}}</span>
          <img src="../../assets/images/user/icon_more.svg" alt="">
        </div>
      </li>
    </ul>
    <div class="exit">
      <span>退出登录</span>
    </div>
    <van-popup
      v-model="popupShow"
    >
      <div class="popup-box">
        <h2>{{popupFlag ? '进入积分商城' : '关注我们'}}</h2>
        <img src="" alt="">
        <span>建议长按识别二维码</span>
        <span>{{popupFlag ? '进入商城兑换奖品' : '关注公众号可获取积分哦'}}</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data(){
    return {
      background: {
        backgroundImage: 'url(' + require('../../assets/images/user/img_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'right top'
      },
      userList: [
        {
          img: require('../../assets/images/user/icon_message.svg'),
          title: '消息中心'
        }, {
          img: require('../../assets/images/user/icon_wechat.svg'),
          title: '公众号',
          titleRight: '关注有积分'
        }, {
          img: require('../../assets/images/user/icon_policy.svg'),
          title: '政策法规'
        }, {
          img: require('../../assets/images/user/icon_add.svg'),
          title: '我要新增企业'
        }, {
          img: require('../../assets/images/user/icon_consult.svg'),
          title: '我要咨询'
        }
      ],
      popupShow: false,
      popupFlag: false,
    }
  },
  methods: {
    collectBtn() {
      this.$router.push('/collect')
    },
    integralBtn() {
      this.popupFlag = true;
      this.popupShow = true;
    },
    listBtn(idx) {
      switch(idx) {
        case idx = 0 : this.$router.push('/message');break;
        case idx = 1 : this.popupShow = true;this.popupFlag = false;break;
        case idx = 2 : this.$router.push('/policy');break;
        case idx = 3 : this.$router.push('/add-business');break;
        case idx = 4 : this.$router.push('/consult');break;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/style.scss';
.main {
  padding: 0 20px;
  box-sizing: border-box;
  .user-header-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    h2 {
      font-size: 24px;
      font-weight: 500;
      color: $userColor;
      margin: 16px 0 8px 0;
    }
    span {
      font-size: 15px;
      font-weight: 400;
      color: #5a6073;
    }
  }
  .integral-collect {
    width: 100%;
    height: 54px;
    @include flex(space-between);
    .integral, .collect {
      width: 160px;
      height: 54px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
      @include flex(space-between);
      padding: 0 16px;
      box-sizing: border-box;
      div {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 400;
        color: $userColor;
        &:first-child {
          span {
            padding-left: 8px;
          }
        }
        &:last-child {
          span {
            padding-right: 8px;
          }
        }
      }
    }
  }
  .user-function-list {
    padding: 0 16px;
    margin-top: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
    li {
      @include flex(space-between);
      border-bottom: 1px solid #e8ebf3;
      padding: 17px 0;
      &:last-child {
        border: none;
      }
      div {
        display: flex;
        align-items: center;
        &:first-child {
          span {
            padding-left: 8px;
            @include sizeColor(15px, $userColor);
          }
        }
        &:last-child {
          span {
            padding-right: 10px;
            @include sizeColor(13px, #ff9c00, 500);
          }
        }
      }
    }
  }
  .exit {
    @include flex();
    @include sizeColor();
    margin-top: 44px;
  }
  .van-popup {
    width: 240px;
    border-radius: 8px;
    .popup-box {
      padding: 24px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 16px;
        color: #1b243d;
      }
      img {
        width: 160px;
        height: 160px;
        padding: 8px 0 7px 0;
      }
      span {
        line-height: 20px;
        @include sizeColor(14px, #5a6073);
      }
    }
  }
}
</style>
