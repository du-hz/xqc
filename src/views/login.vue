<template>
  <div class="content" :style="background">
    <!-- <input maxlength="13" v-model="phone" @keyup.delete="deleteFun" placeholder="请填写手机号码" type="tel" /> -->
    <div class="bg-top">
      <div></div>
      <div>欢迎{{$route.path == '/login' ? '登录' : '注册'}}芯企查</div>
      <div>这里是一句slogan</div>
    </div>
    <div class="van-form" v-if="!next">
      <div class="user-message" v-if="$route.path == '/register'">设置个人信息</div>
      <div class="van-input">
        <div class="area">+86</div>
        <input type="tel" maxlength="13" @keyup.delete="deleteFun" placeholder="请输入手机号" v-model="phone">
        <img v-show="phone" @click="clearBtn" src="../assets/images/login/btn_close.svg" alt="">
      </div>
      <div class="van-input van-input-margin"></div>
      <div class="van-input van-input-margin">
        <input type="text" maxlength="6" placeholder="请输入验证码" v-model="formObj.verificationCode">
        <span @click="getVc">获取验证码</span>
      </div>
      <div class="protocol">
        <div>
          <img @click="selectFun" :src="formObj.protocolState ? imgSvg2 : imgSvg1" alt="">
        </div>
        <div>
          使用手机号码<span>{{ $route.path == '/login' ? '登录' : '注册'}}</span>并同意
          <span class="a-color">《最终用户使用协议》</span>
          <span class="a-color">《特别声明》</span>
          <span class="a-color">《声明》</span>
        </div>
      </div>
      <van-button class="btn-log" @click="btnToLog">{{$route.path == '/login' ? '登录' : '下一步(1/2)'}}</van-button>
      <div class="notebook">
        <span>{{ $route.path == '/login' ? '还没有账号？' : '已有账号，'}}</span>
        <span @click="logFun" class="a-color">{{ $route.path == '/login' ? '立即注册' : '前往登录'}}</span>
      </div>
    </div>
    <div class="van-form" v-if="next">
      <div class="user-message">
        设置企业信息
        <span>(仅供注册使用，不会对外公开展示)</span>
      </div>
      <div class="van-input">
        <!-- <div>+86</div>
        <input type="text" name="firstname" value="Mickey">
        <img src="../assets/images/login/btn_close.svg" alt=""> -->
        <input type="text" v-model="CIObj.enterprise" placeholder="请输入企业或组织名称">
        <img v-show="CIObj.enterprise" src="../assets/images/login/btn_ok.svg" alt="">
      </div>
      <div class="van-input van-input-margin">
        <input type="text" v-model="CIObj.name" placeholder="请输入您的姓名">
        <img v-show="CIObj.name" src="../assets/images/login/btn_ok.svg" alt="">
      </div>
      <div class="van-input van-input-margin">
        <input type="text" v-model="CIObj.mail" placeholder="请输入您的企业邮箱">
        <img v-show="CIObj.mail" src="../assets/images/login/btn_ok.svg" alt="">
      </div>
      <div class="van-input van-input-margin">
        <input type="text" v-model="CIObj.position" placeholder="请输入您的职位">
        <img v-show="CIObj.position" src="../assets/images/login/btn_ok.svg" alt="">
      </div>
      <van-button class="btn-log btn-register" @click="submitBtn">提交</van-button>
    </div> 
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data(){
    return {
      phone: '',
      formObj: {
        PhoneNumber: this.phone,
        verificationCode: '',
        protocolState: false
      },
      CIObj: {
        enterprise: '',
        name: '',
        mail: '',
        position: ''
      },
      next: false,
      imgSvg1: require('../assets/images/login/btn_check_normal.svg'),
      imgSvg2: require('../assets/images/login/btn_check_selected.svg'),
      background: {
        backgroundImage: 'url(' + require('../assets/images/login/img_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right top'
      },
      backgroundbottom: {
        backgroundImage: 'url(' + require('../assets/images/login/img_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom'
      }
    }
  },
  methods: {
    clearBtn() {
      this.phone = '';
    },
    deleteFun() {
      console.log('删除')
    },
    logFun() {
      this.$route.path == '/login' ? this.$router.push('/register') : this.$router.push('/login');
    },
    btnToLog() {
      if(this.$route.path == '/login') {
        this.$router.push('/layout/home');
        this.formObj.PhoneNumber = this.phone;
        console.log(this.formObj)
      }else {
        this.next = true
        // this.$router.push('/reg-success')
      }
      // this.$route.path == '/login' ? this.$router.push('/layout/home') : this.next = true;
    },
    submitBtn() {
      this.$router.push('/layout/home')
    },
    getVc() {
      console.log('获取验证码');
      // Toast('提示内容');
      this.$toast({
        message:'当前仅支持中国地区区号为“+86”的手机号注册',
        // position:'bottom'
        // duration: 0,
      });
    },
    selectFun() {
      this.formObj.protocolState = !this.formObj.protocolState;
    }
  },
  watch: {
    // 通过watch来设置空格
    phone(newValue, oldValue) {
      // 禁止输入特殊字符大小写等
      this.phone = this.phone.trim()
      this.phone = this.phone.replace(/[\u4e00-\u9fa5]/g, "");
      this.phone = this.phone.replace(/[A-Za-z]+$/g, "");
      let reg = new RegExp(
        "[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、\\_\\+\\-\\%？]"
      );
      this.phone = this.phone.replace(reg, "");

      let phoneStr = newValue.split("");
      if (newValue.length > oldValue.length) { // 文本框中输入
        if (newValue.length === 4 || newValue.length === 9) {
          phoneStr.splice(newValue.length - 1, 0, " ");
          this.phone = phoneStr.join("");
        }
      } else { // 文本框中删除
        if (newValue.length === 9 || newValue.length === 4) {
          this.phone = this.phone.trim()
        }
      }
    } 
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/style.scss';
$blueColor: blue;
$btnBack: rgba(44,104,255,0.60);
.a-color {
  color: $blueColor;
}
.active {
  background: #2c68ff;
}
.content {
  width: 100%;
  height: 100%;
  background-size: 303px 258px!important;
  .bg-top {
    width: 100%;
    @include flex();
    flex-direction: column;
    padding-top: 52px;
    div {
      &:nth-child(1) {
        width: 88px;
        height: 88px;
        background: linear-gradient(180deg,#57a1ff, #2c68ff);
        border-radius: 8px;
      }
      &:nth-child(2) {
        @include sizeColor(24px, #1b243d, 500);
        line-height: 26px;
        padding: 16px 0 8px 0;
      }
      &:nth-child(3) {
        @include sizeColor(14px, #9ea5bb, 400);
        line-height: 18px;
      }
    }
  }

  .van-form {
    padding: 36px 37px 0 38px;
    padding-top: 36px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    .user-message {
      @include sizeColor(17px, #1b243d, 500);
      text-align: left;
      line-height: 22px;
      padding-bottom: 12px;
      span {
        @include sizeColor(12px, #9ea5bb, 400);
        text-align: center;
        line-height: 18px;
      }
    }
    .van-input-margin {
      margin-top: 16px;
    }
    .van-input {
      width: 300px;
      height: 48px;
      line-height: 48px;
      border: 1px solid #ced2df;
      border-radius: 8px;
      display: flex;
      position: relative;
      input {
        flex: 1;
        height: 47px;
        border: none;
        padding-left: 16px;
        border-radius: 8px;
        @include sizeColor(15px, #9ea5bb, 400);
      }
      span {
        float: right;
        padding-right: 16px;
        opacity: 0.6;
        background: #ffffff;
        @include sizeColor(14px, #2c68ff, 400);
      }
      .area {
        display: inline-block;
        width: 45px;
        text-align: center;
        background: #ffffff;
        position: relative;
        @include sizeColor(14px, #5a6073, 400);
      }
      .area:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 16px;
        background: #e8ebf3;
      }
      img {
        position: absolute;
        top: 16px;
        right: 16px;
      }
    }
    .protocol {
      text-align: left;
      line-height: 19px;
      padding: 36px 0 12px 0;
      display: flex;
        @include sizeColor(12px, #9ea5bb, 400);
      img {
        vertical-align: middle;
        padding-right: 6px;
      }
    }
    .btn-log {
      width: 300px;
      height: 48px;
      line-height: 48px;
      background: $btnBack;
      border-radius: 8px;
      text-align: center;
      line-height: 22px;
      @include sizeColor(16px, #ffffff, 500);
    }
    .btn-register {
      margin-top: 24px;
    }
    .notebook {
      margin-top: 16px;
      span {
        font-size: 14px;
        font-weight: 400;
        &:first-child{
          color: #5a6073;
        }
      }
    }
  }
}
</style>
