<template>
  <div class="main">
    <div class="search">
      <div class="search-ipt">
        <img src="../../assets/images/home/icon_search.svg" alt="">
        <input type="text" placeholder="请输入公司/产品分类/城市" v-model="searchVal">
        <img v-show="searchVal" @click="clearBtn" src="../../assets/images/home/icon_clear.svg" alt="">
      </div>
      <div class="all-city">
        <span>全国</span>
        <img :src="fold1" alt="">
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(val, idx) in listArr" :key="idx">
          <img :src="val.img" alt="">
          <span>{{val.title}}</span>
        </li>
      </ul>
      <div>
        <span>全部</span>
        <img src="../../assets/images/home/icon_unfold.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchVal: '',
      fold1: require('../../assets/images/home/icon_unfold.svg'),
      fold2: require('../../assets/images/home/icon_fold.svg'),
      listArr: [{
        img: require('../../assets/images/type/icon_01.png'),
        title: '处理器'
      }, {
        img: require('../../assets/images/type/icon_02.png'),
        title: '储存器'
      }, {
        img: require('../../assets/images/type/icon_03.png'),
        title: '模拟器件'
      }, {
        img: require('../../assets/images/type/icon_04.png'),
        title: '射频器件'
      }, {
        img: require('../../assets/images/type/icon_05.png'),
        title: '应用soC'
      }, {
        img: require('../../assets/images/type/icon_06.png'),
        title: '电机与运动控制'
      }, {
        img: require('../../assets/images/type/icon_07.png'),
        title: '接口和连接IC'
      }, {
        img: require('../../assets/images/type/icon_08.png'),
        title: '智能卡'
      }, {
        img: require('../../assets/images/type/icon_09.png'),
        title: '可编辑逻辑器件'
      }, {
        img: require('../../assets/images/type/icon_10.png'),
        title: '航天和高可靠性芯片和器件'
      }, {
        img: require('../../assets/images/type/icon_11.png'),
        title: '汽车电子'
      }, {
        img: require('../../assets/images/type/icon_12.png'),
        title: '人工智能'
      }, {
        img: require('../../assets/images/type/icon_13.png'),
        title: '网络通信与互联'
      }, {
        img: require('../../assets/images/type/icon_14.png'),
        title: '音频和视频产品'
      }, {
        img: require('../../assets/images/type/icon_15.png'),
        title: '传感器'
      }, {
        img: require('../../assets/images/type/icon_16.png'),
        title: '光器件'
      }, {
        img: require('../../assets/images/type/icon_17.png'),
        title: '分立器件'
      }, {
        img: require('../../assets/images/type/icon_18.png'),
        title: '其他'
      }]
    }
  },
  methods: {
    clearBtn() {
      this.searchVal = '';
    },
  },
  created() {
    
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/style.scss';
.search {
  padding: 16px;
  display: flex;
  align-items: center;
  background: #ffffff;
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
  .all-city {
    display: flex;
    span {
      padding: 0 4px 0 12px;
    }
  }
}
.list {
  display: flex;
  background: #ffffff;
  padding: 0 16px;
  div {
    width: 21px;
    margin: 0 auto;  
    // line-height: 24px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    img {
      transform: rotate(180deg);
    }
  }
  ul {
    width: 95%;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // flex: 0 0 20%;
      white-space: nowrap;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
      img {
        width: 24px;
        height: 24px;
      }
      span {
        padding: 4px 0 12px 0;
      }
    }
  }
}
</style>
