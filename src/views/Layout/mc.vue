<template>
  <div class="main">
    <van-tabs v-model="active" sticky>
      <van-tab v-for="(value, index) in list" :title="value" :key="index">
        <ul class="van-tab-page" v-show="index == 0">
          <li>
            <h2>北京四维图新科技股份有限公司</h2>
            <div class="type">
              <img src="../../assets/images/user/message/icon_type.svg" alt="">
              <span>类型</span>
              <span>纠错企业信息</span>
            </div>
            <div class="date">
              <div class="date-left">
                <img src="../../assets/images/user/message/icon_date.svg" alt="">
                <span>日期</span>
                <span>纠错企业信息</span>
              </div>
            </div>
            <img class="state-right" src="../../assets/images/user/message/state_1.svg" alt="">
          </li>
          <li>
            <h2>北京四维图新科技股份有限公司</h2>
            <div class="type">
              <img src="../../assets/images/user/message/icon_type.svg" alt="">
              <span>类型</span>
              <span>纠错企业信息</span>
            </div>
            <div class="date">
              <div class="date-left">
                <img src="../../assets/images/user/message/icon_date.svg" alt="">
                <span>日期</span>
                <span>纠错企业信息</span>
              </div>
              <span class="right">积分+100</span>
            </div>
            <img class="state-right" src="../../assets/images/user/message/state_2.svg" alt="">
          </li>
          <li>
            <h2>北京四维图新科技股份有限公司</h2>
            <div class="type">
              <img src="../../assets/images/user/message/icon_type.svg" alt="">
              <span>类型</span>
              <span>纠错企业信息</span>
            </div>
            <div class="date">
              <div class="date-left">
                <img src="../../assets/images/user/message/icon_date.svg" alt="">
                <span>日期</span>
                <span>纠错企业信息</span>
              </div>
            </div>
            <img class="state-right" src="../../assets/images/user/message/state_3.svg" alt="">
          </li>
          <li>
            <h2>北京四维图新科技股份有限公司</h2>
            <div class="type">
              <img src="../../assets/images/user/message/icon_type.svg" alt="">
              <span>类型</span>
              <span>纠错企业信息</span>
            </div>
            <div class="date">
              <div class="date-left">
                <img src="../../assets/images/user/message/icon_date.svg" alt="">
                <span>日期</span>
                <span>纠错企业信息</span>
              </div>
              <span class="right"></span>
            </div>
            <img class="state-right" src="../../assets/images/user/message/state_4.svg" alt="">
          </li>
        </ul>
        <ul class="van-tab-page" v-show="index == 1">
          <li>
            <h2>北京四维图新科技股份有限公司</h2>
            <div class="type">
              <img src="../../assets/images/user/message/icon_type.svg" alt="">
              <span>类型</span>
              <span>纠错企业信息</span>
            </div>
            <div class="date">
              <div class="date-left">
                <img src="../../assets/images/user/message/icon_date.svg" alt="">
                <span>日期</span>
                <span>纠错企业信息</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="van-tab-page" v-show="index == 2">

        </ul>
        <ul class="van-tab-page" v-show="index == 3">

        </ul>
        <ul class="van-tab-page" v-show="index == 4">

        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['全部', '审核中', '审核通过', '审核不通过', '退回修正'],
      active: 0
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.van-tab-page {
  padding: 0 16px;
  li {
    margin-top: 16px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
    padding: 20px 16px;
    position: relative;
    .state-right {
      position: absolute;
      top: 0;
      right: 0;
    }
    h2 {
      font-size: 16px;
      color: #1b243d;
      padding-bottom: 4px;
    }
    .type {
      display: flex;
      align-items: center;
      margin-top: 8px;
      span {
        font-size: 14px;
        font-weight: 400;
        color: #1b243d;
        &:nth-of-type(1) {
          color: #9ea5bb;
          margin: 0 16px 0 4px;
        }
      }
    }
    .date {
      display: flex;
      align-items: center;
      margin-top: 8px;
      justify-content:space-between;
      .date-left {
        span {
          font-size: 14px;
          font-weight: 400;
          color: #1b243d;
          &:nth-of-type(1) {
            color: #9ea5bb;
            margin: 0 16px 0 4px;
          }
        }
      }
      span {
        @include sizeColor(12px, #0fce8c)
      }
    }
  }
}

/deep/.van-tabs__nav,.van-tabs__nav--line {
  justify-content: space-around;
  .van-tab {
    flex: none;
  }
  .van-tab--active {
    color: #2c68ff;
  }
  .van-tabs__line {
    background-color: #2c68ff;
  }
}
</style>