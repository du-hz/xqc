<template>
  <div class="main">
    <ul>
      <li v-for="(val, idx) in policyArr" :key="idx" @click="() => policyBtn(idx)">
        <span>{{val}}</span>
          <img src="../../assets/images/user/icon_more.svg" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      policyArr: ['最终用户使用协议', '特别声明', '声明', '注销账号']
    }
  },
  methods: {
    policyBtn(idx) {
      switch(idx) {
        case idx = 0 : console.log(idx);break;
        case idx = 1 : console.log(idx);break;
        case idx = 2 : console.log(idx);break;
        case idx = 3 : this.$router.push('/log-out');break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.main {
  box-sizing: border-box;
  ul {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    li {
      height: 55px;
      line-height: 55px;
      display: flex;
      justify-content:space-between;
      border-bottom: 1px solid #e8ebf3;
      @include sizeColor(15px, #1b243d);
      &:last-child {
        border: none;
      }
    }
  }
}
</style>