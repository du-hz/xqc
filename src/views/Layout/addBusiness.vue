<template>
  <div class="main">
    <div class="steps">
      <div>
        <span></span><span></span><span></span>
      </div>
      <div>
        <span>基本信息</span>
        <span>产品分类</span>
      </div>
    </div>
    <div class="form">
      <div class="form-ipt">
        <div>
          <span class="weights">*</span>
          <span>企业名称</span>
        </div>
        <div class="form-ipt-buttom">
          <input type="text" placeholder="请输入企业全称">
          <img src="../../assets/images/login/btn_ok.svg" alt="">
        </div>
      </div>
      <div class="form-ipt">
        <div>
          <span>官网</span>
        </div>
        <div class="form-ipt-buttom">
          <input type="text" placeholder="请输入企业官网">
          <img src="../../assets/images/login/btn_ok.svg" alt="">
        </div>
      </div>
      <div class="form-ipt">
        <div>
          <span class="weights">*</span>
          <span>企业邮箱</span>
        </div>
        <div class="form-ipt-buttom">
          <input type="text" placeholder="请输入企业邮箱">
          <img src="../../assets/images/login/btn_ok.svg" alt="">
        </div>
      </div>
      <div class="form-ipt">
        <div>
          <span class="weights">*</span>
          <span>城市</span>
        </div>
        <div class="form-ipt-buttom">
          <input type="text" placeholder="请输入企业所在城市">
          <img class="city" src="../../assets/images/user/icon_more.svg" alt="">
        </div>
      </div>
      <div class="form-ipt">
        <div>
          <span class="weights">*</span>
          <span>地址</span>
        </div>
        <div class="form-ipt-buttom">
          <input type="text" placeholder="请输入企业所在地址">
          <img src="../../assets/images/login/btn_ok.svg" alt="">
        </div>
      </div>
      <div class="form-ipt">
        <div>
          <span class="weights">*</span>
          <span>企业简介</span>
          <span>（{{content.length}}/500）</span>
        </div>
        <textarea placeholder="请输入企业简介，500字以内" v-model="content" maxlength="500"></textarea>
      </div>
      <div class="form-ipt">
        <div>
          <span class="weights">*</span>
          <span>上传企业logo</span>
        </div>
        <div class="add-img">
          <div class="add">
            <img src="../../assets/images/user/enterprise/btn_add.svg" alt="">
          </div>
          <div class="text">
            <p>支持jpg、png格式的图片</p>
            <p>且文件小于10M</p>
          </div>
        </div>
      </div>
      <div class="next">
        <van-button>下一步<span>（1/2）</span></van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.main {
  // max-width: 375px;
  height: auto;
}
.steps {
  padding: 0 16px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
  display: flex;
  justify-content: center;
  flex-direction: column;
  div:first-child {
    display: flex;
    align-items: center;
    padding: 0 80px;
    span {
      display: inline-block;
    }
    span:first-child {
      width: 10px;
      height: 10px;
      background: #ffffff;
      border: 2px solid #2c68ff;
      border-radius: 50%;
    }
    span:nth-of-type(2) {
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg,#ced2df, #2c68ff);
    }
    span:last-child {
      width: 10px;
      height: 10px;
      background: #ffffff;
      border: 2px solid #ced2df;
      border-radius: 50%;
    }
  }
  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 4px;
    span {
      @include sizeColor(14px, #9ea5bb);
      &:first-child {
        color: #2c68ff;
      }
      &:last-child {
        // color: #2c68ff;
      }
    }
  }
}
.form {
  padding: 0 16px;
  .form-ipt {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .weights {
        color: #f52f3e;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        color: #5a6073;
        &:nth-of-type(3) {
          font-size: 12px;
          color: #9ea5bb;
        }
      }
    }
    .form-ipt-buttom {
      display: flex;
      position: relative;
      input {
        flex: 1;
        height: 48px;
        background: #ffffff;
        border: 1px solid #ced2df;
        border-radius: 8px;
        padding: 0 35px 0 16px;
        font-size: 15px;
        font-weight: 400;
        color: #000;
      }
      img {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translate(-50%, -50%);
      }
      .city {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
    textarea {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      height: 160px;
      max-height: 160px;
      min-height: 160px;
      padding: 14px 16px;
      box-sizing: border-box;
      background: #ffffff;
      border: 1px solid #ced2df;
      border-radius: 8px;
      @include sizeColor(15px, #000);
    }
    .add-img {
      display: flex;
      align-items: flex-end;
      .add {
        width: 120px;
        height: 120px;
        background: #ffffff;
        border: 1px dashed #ced2df;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin: 0 14px 0 0;
      }
    }
  }
  .next {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 38px 0 40px 0;
     .van-button {
      width: 300px;
      height: 48px;
      background: rgba(44,104,255,0.60);
      border-radius: 8px;
      @include sizeColor(16px, #ffffff, 500);
      span {
        font-size: 12px;
      }
    }
  }
}
</style>