<template>
  <div class="main">
    <ul class="collect-list">
      <li v-for="(val, idx) in collectArr" :key="idx">
        <img src="" alt="">
        <!-- <div class="color-box"></div> -->
        <div class="title-type">
          <h2>{{val.title}}</h2>
          <div>
            <span v-for="(v, i) in val.list" :key="i">{{v}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collectArr: [
        {
          img: '',
          title: '北京四维图新科技股份有限公司',
          list: ['网络通信与互联', '自动驾驶', '车用无线电']
        }, {
          img: '',
          title: '国民技术股份有限公司',
          list: ['通用MCU', '安防监控', 'RFIC']
        }, {
          img: '',
          title: '思瑞浦微电子科技（苏州）股份有限公司',
          list: ['低噪声放大器(LNA)', '视频放大器', '数模转换器']
        }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.main {
  padding: 0 16px;
  box-sizing: border-box;
  ul {
    display: flex;
    flex-direction: column;
    li {
      padding: 0 16px;
      margin-top: 16px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70);
      display: flex;
      // .color-box {
      //   width: 48px;
      //   height: 48px;
      //   background: #d8d8d8;
      //   border-radius: 8px;
      //   flex-shrink: 0;
      //   margin-top: 16px;
      // }
      img {
        width: 48px;
        height: 48px;
        background: #d8d8d8;
        border-radius: 8px;
        flex-shrink: 0;
        margin-top: 16px;
      }
      .title-type {
        padding: 17px 0;
        padding-left: 8px;
        h2 {
          padding-bottom: 8px;
          @include sizeColor(17px, #1b243d, none);
        }
        div {
          white-space: nowrap;//内容超出不换行
          background:#000000;
          background-color: #000000;
          background-image: linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 2%, rgba(128, 128, 128, 1) 10%, rgba(0, 0, 0, 1) 0%);
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; 
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          width: 252px;
        }
        span {
          margin-right: 12px;
          @include sizeColor(12px, #5a6073);
        }
      }
    }
  }
}
</style>