<template>
  <div class="main">
    <div class="type">
      <div>
        <span>*</span>
        <span>请选择您的问题类型</span>
      </div>
      <ul>
        <li v-for="(val, idx) in typeArr" :key="idx" @click="() => selectBtn(idx)" :class="{active:idx === currentIdx }">
          <span>{{val}}</span>
          <img v-show="idx === currentIdx" src="../../assets/images/login/btn_check_selected.svg" alt="">
        </li>
      </ul>
    </div>
    <div class="phone">
      <div>
        <span>*</span>
        <span>请留下您的联系方式：我们将尽快联系您</span>
      </div>
      <input type="text" placeholder="请输入您的手机号">
    </div>
    <div class="message">
      <div>
        <span>如果您方便可以留下公司名和简短的留言</span>
        <span>（{{content.length}}/500）</span>
      </div>
      <textarea placeholder="500字以内" v-model="content" maxlength="500"></textarea>
    </div>
    <div class="submit">
      <van-button>提交</van-button>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentIdx: null,
      content: '',
      typeArr: ['芯片设计方案', '产品选型', '项目投融资', '业务合作', '积分', '其他']
    }
  },
  methods: {
    selectBtn(idx) {
      this.currentIdx = idx;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.active {
  border: 1px solid #2c68ff!important;
  color: #2c68ff;
}
.main {
  padding: 16px;
  box-sizing: border-box;
  .type, .phone {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      span:first-child {
        color: #f52f3e;
      }
      span:last-child {
        color: #5a6073;
      }
    }
    ul {
      display: flex;
      // flex-wrap: wrap;
      flex-flow: row wrap;
      margin-bottom: 4px;
      li {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        // flex: 0 0 50%;
        width: 164px;
        height: 48px;
        background: #ffffff;
        border: 1px solid #ced2df;
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 12px;
        &:not(:nth-child(2n)) {
          margin-right: 15px;
        }
        img {
          position: absolute;
          top: 4px;
          right: 4px;
        }
      }
    }
    input {
      height: 48px;
      background: #ffffff;
      border: 1px solid #ced2df;
      border-radius: 8px;
      padding-left: 16px;
      font-size: 15px;
      font-weight: 400;
      color: #000;
      margin-bottom: 16px;
    }
  } 
  .message {
    display: flex;
    flex-direction: column;
    div {
      font-size: 14px;
      font-weight: 400;
      color: #5a6073;
      span:last-child {
        font-size: 12px;
        font-weight: 400;
        color: #9ea5bb;
      }
    }
    textarea {
      margin-top: 8px;
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
  }
  .submit {
    padding: 0 19px;
    margin-top: 95px;
    .van-button {
      width: 100%;
      height: 48px;
      background: rgba(44,104,255,0.60);
      border-radius: 8px;
      @include sizeColor(16px, #ffffff, 500);
    }
  }
}

input::input-placeholder,
textarea::textarea-placeholder{
  color: #9ea5bb;
} 
</style>