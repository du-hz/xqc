<template>
  <div class="main">
    <div class="search-box">
      <div class="search">
        <div class="search-ipt">
          <img src="../../assets/images/home/icon_search.svg" alt="">
          <input type="text" placeholder="请输入公司/产品分类/城市" v-model="searchVal">
          <img v-show="searchVal" @click="clearBtn" src="../../assets/images/home/icon_clear.svg" alt="">
        </div>
        <span @click="backBtn">取消</span>
      </div>
      <div class="sort" id="sort">
        <div class="comprehensive">
          <span>综合排序</span>
          <img :src="fold1" alt="">
        </div>
        <div class="more-categories">
          <span>更多分类</span>
          <img :src="fold1" alt="">
        </div>
        <div class="whole-country">
          <span>全国</span>
          <img :src="fold1" alt="">
        </div>
      </div>
      <div class="history-search" v-if="historyArr.length">
        <div class="selete-top">
          <h3>历史搜索</h3>
          <img @click="deleteBtn" src="../../assets/images/home/btn_delete.svg" alt="">
        </div> 
        <ul class="history-list">
          <li v-for="(val, idx) in historyArr" :key="idx">{{val}}</li>
        </ul>
      </div>
      <div class="segmentation" v-if="historyArr.length"/>
      <div class="history-search" v-if="historyArr.length">
        <div class="selete-top">
          <h3>大家都在搜</h3>
        </div> 
        <ul class="search-all">
          <li v-for="(val, idx) in searchArr" :key="idx">
            <span>{{val.title}}</span>
            <img v-show="val.show" src="../../assets/images/home/icon_hot.svg" alt="">
          </li>
        </ul>
      </div>
    </div>
    <ul class="search-list">
      <li>
        <div class="title">
          <h2>北京四维图新科技股份有限公司</h2>
          <span>北京</span>
        </div>
        <div class="segmentation"/>
        <div class="type">
          <span v-for="(val, idx) in listArr" :key="idx">{{val}}</span>
        </div>
      </li>
    </ul>
    <van-popup
      v-model="popupShow"
    >
      <div class="popup-box">
        <div class="tips">是否删除所有历史记录</div>
        <div>
          <van-button class="btn" @click="() => btn('clear')">取消</van-button>
          <van-button class="btn" @click="() => btn('delete')">删除</van-button>
        </div>
      </div>
    </van-popup>
    <!-- <van-popup v-model="show" round get-container="#sort" :style="{ height: '30%' }" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: '',
      historyArr: ['有线接入网络', 'RSIC-V内核', 'MCU', '光纤网络', 'Nor Flash'],
      searchArr: [{
        title: '音频放大器',
        show: false
      },{
        title: 'MCU',
        show: false
      },{
        title: '非易失存储器',
        show: false
      },{
        title: '光电耦合',
        show: false
      },{
        title: 'BlueTooth',
        show: true
      },{
        title: '动态随机存储器',
        show: false
      }],
      popupShow: false,
      show: false,
      fold1: require('../../assets/images/home/icon_unfold.svg'),
      fold2: require('../../assets/images/home/icon_fold.svg'),
      listArr: ['网络通信与互联', '热电制冷器控制器', '热电制冷器控制器'],
      // searchArr: ['音频放大器', 'MCU', '非易失存储器', '光电耦合', 'BlueTooth', '动态随机存储器']
    }
  },
  methods: {
    clearBtn() {
      this.searchVal = '';
    },
    backBtn() {
      // this.show = true;
      this.$router.go(-1);
      // this.$router.back(-1);
      // this.$router.back();
      // history.go(-1);
    },
    deleteBtn() {
      this.popupShow = true;
    },
    btn(state) {
      this.popupShow = false;
      if(state === 'delete') {
        this.historyArr = [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.search-box {
  // padding: 0 16px;
  background: #ffffff;
}
.search {
  padding: 16px 16px 0 16px;
  display: flex;
  align-items: center;
  .search-ipt {
    flex: 1;
    height: 48px;
    border: 1px solid #7daaff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    img {
      &:first-child {
        margin-left: 16px;
      }
      &:last-child {
        margin-right: 16px;
      }
    }
    input {
      flex: 1;
      height: 47px;
      border: none;
      padding-left: 8px;
      border-radius: 8px;
      @include sizeColor(15px, #9ea5bb);
    }
  }
  span {
    padding-left: 12px;
    @include sizeColor(15px, #5a6073);
  }
}
.sort {
  @include flex(space-around);
  height: 48px;
  border-bottom: 1px solid #e8ebf3;
  .comprehensive, .more-categories {
    position: relative;
  }
  .comprehensive:after, .more-categories:after {
    position: relative;
    content: '';
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 16px;
    background: #dddee2;
  }
}

.search-list {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  li {
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
      span {
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
.history-search {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 24px 16px;
  .selete-top {
    @include flex(space-between);
    h3 {
      font-size: 15px;
      color: $userColor;
    }
  }
  .history-list {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 4px 12px;
      background: rgba(232,235,243,0.50);
      border-radius: 15px;
      margin:12px 12px 0 0;
      @include sizeColor(14px, #5a6073);
    }
  }
  .search-all {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 12px;
      width: 50%;
      @include sizeColor(14px, #5a6073);
      img {
        margin-left: 4px;
      }
    }
  }
}

// vant弹窗
.van-popup {
  width: 280px;
  border-radius: 8px;
  .popup-box {
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .tips {
    @include sizeColor(16px, $userColor, 500);
  }
  .btn {
    width: 108px;
    height: 44px;
    background: #f8fafd;
    border: 1px solid #e8ebf3;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 15px;
    font-weight: 400;
    color: #5a6073;
    &:last-child {
      margin-left: 24px;
      background: #2C68FF;
      color: #ffffff;
    }
  }
}

</style>