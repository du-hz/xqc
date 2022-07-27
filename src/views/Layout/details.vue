<template>
  <div class="main">
    <div class="background">
      <div class="title">
        <div class="logo">
          <img src="" alt="">
        </div>
        <div class="collection" @click="collectionBtn">
          <img :src="flag ? collection2 : collection1" alt=""><span :style="{color: flag ? '#ff9c00' : '#5a6073'}">{{flag ? '已收藏' : '收藏'}}</span>
        </div>
        <h2>上海贝岭股份有限公司</h2>
        <div class="introduce">
          <input type="checkbox" id="introduce" v-model="checked">
          <div>
            <span>
              上海贝岭股份有限公司（以下简称“上海贝岭”或“公司”）成立于1988年，是国内集成电路行业的第一家中外合资企业。上海贝岭是国家改革开放初期成功吸引外资和引进国外先进技术的标志性企业，为我国集成电路产业的发展树立了楷模，带动了我国微电子产业的振兴和程控固话通信产业的迅速发展，获得了众多的殊荣，长期拥有行业历史地位和示范作用，邓小平、江泽民、胡锦涛等党和国家领导人分别亲临上海贝岭视察。 <br/>公司于1998年改制后在上海证券交易所主板上市，成为中国集成电路行业第一家上市公司。公司于2008年起转型为集成电路设计企业，2015年成为世界财富500强中国电子信息产业集团有限公司（CEC）旗下集成电路业务平台华大半导体的核心子企业，华大半导体是公司控股股东，也是国内前十的IC设计企业，公司实际控制人为中国电子。
            </span>
            <label for="introduce">
              <span>{{checked ? '收起' : '展开'}}</span>
              <img src="../../assets/images/home/detailed/btn_fold.svg" alt="">
            </label>
          </div>
        </div>
        <div class="url-btn">
          <div @click="JumpBtn">
            <img src="../../assets/images/home/detailed/icon_web.svg" alt="">
            <span>官网</span>
          </div>
          <div>
            <img src="../../assets/images/home/detailed/icon_find.svg" alt="">
            <span>天眼查</span>
          </div>
        </div>
      </div>
      <div class="product-type">
        <div class="product">
          <img src="../../assets/images/home/detailed/icon_title.svg" alt="">
          <h2>产品分类</h2>
          <img src="../../assets/images/home/detailed/icon_title.svg" alt="">
        </div>
        <ul>
          <li>
            <h2>模拟器件</h2>
            <div>
              <span v-for="(val, idx) in listArr" :key="idx">{{val}}</span>
            </div>
          </li>
          <li>
            <h2>模拟器件</h2>
          </li>
        </ul>
      </div>
    </div>
    <div class="error">
      <img src="../../assets/images/home/detailed/btn_error.svg" alt="">
      <span>纠错</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag: false,
      collection1: require('../../assets/images/home/detailed/icon_collect_normal.svg'),
      collection2: require('../../assets/images/home/detailed/icon_collect_selected.svg'),
      checked: false,
      listArr: ['DCDC', '线性稳压器', 'BMS', '开关电容构件', '基准电压源', '复位与电压监测IC', 'ACDC', 'RTC', '开关和多路复用器']
    }
  },
  methods: {
    collectionBtn() {
      this.flag = !this.flag;
      this.$toast({
        message: this.flag ? '收藏成功\n可在【用户中心-收藏】查看' : '已取消收藏'
      });
    },
    JumpBtn() {
      console.log(1)
    }
  },
  created() {
    
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/style.scss';
.background {
  padding: 20px 16px;
  box-sizing: border-box;
  background-image: url('../../assets/images/home/detailed/img_bg.png');
  // background-image: 'url(' + require('../../assets/images/home/detailed/img_bg.png') + ')';
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  height: 280px;
}
.main {
  height: 100%;
  position: relative;
  .title {
    margin-top: 40px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
    padding: 0 16px;
    position: relative;
    .collection {
      position: absolute;
      top: -40px;
      right: 0;
      width: 74px;
      height: 28px;
      background: #ffffff;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      span {
        margin-left: 4px;
        @include sizeColor(14px, #5a6073)
      }
    }
    .logo {
      width: 80px;
      height: 80px;
      background: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 12px;
      box-shadow: 0px 2px 6px 0px rgba(232,235,243,0.80); 
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h2 {
      padding-top: 56px;
      text-align: center;
      font-size: 20px;
      color: #1b243d;
    }
    .introduce{
      background: #fff;
      font-size: 13px;
      line-height: 20px;
      padding: 8px 0 16px 0;
      border-bottom: 1px solid #e8ebf3;
      div{
        height: 61px;
        overflow: hidden;
        font-size: 13px;
        font-weight: 400;
        color: #5a6073;
        position: relative;
        label {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50px;
          background: #fff;
        }
      }
      #introduce{
        display:none;
      }
      #introduce:checked + div{
        height: auto;
      }
      #introduce + div label[for="introduce"] {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          @include sizeColor(12px, #2c68ff);
        }
      }
      #introduce:checked + div label[for="introduce"] img{
        transform: rotate(180deg);
      }
    }
    .url-btn {
      display: flex;
      padding: 16px 0;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 50%;
        font-size: 15px;
        font-weight: 400;
        span {
          margin-left: 8px;
        }
        &:first-child {
          border-right: 1px solid #e8ebf3;
          color: #0fce8c;
        }
        &:last-child {
          color: #2c68ff;
        }
      }
    }
  }
  .product-type {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    .product {
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        padding: 0 8px;
        color: #2c68ff;
        font-size: 17px;
      }
      img:first-child {
        transform: rotate(180deg);
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin-top: 16px;
        padding: 20px 16px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0px 2px 8px 0px rgba(232,235,243,0.70); 
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 21px;
          left: 0;
          width: 4px;
          height: 16px;
          background: #2c68ff;
          border-radius: 0px 2px 2px 0px;
        }
        h2 {
          font-size: 17px;
          color: #1b243d;
        }
        div {
          @include sizeColor(15px, #5a6073);
          display: flex;
          flex-wrap: wrap;
          line-height: 28px;
          padding-top: 6px;
          span {
            margin-right: 15px;
          }
        }
      }
    }
  }
  .error {
    position: fixed;
    bottom: 88px;
    right: 16px;
    width: 62px;
    height: 32px;
    background: linear-gradient(180deg,#ffcb00, #ff9c00);
    border-radius: 22px;
    box-shadow: 0px 3px 6px 0px rgba(27,36,61,0.20); 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    img {
      width: 18px;
      height: 22px;
      margin-right: 4px;
      // font-size: 15px;
    }
  }
}
</style>
