<template>
  <div class="main">
    <div class="bottom-login">
      <span class="bottom-login-null">没有更多了</span>
      <img src="../assets/images/home/icon_arrow.svg" alt="">
      <van-button class="immediately-login" @click="btnLogin">立即登录</van-button>
      <span class="bottom-login-text">登录后可查看更多的芯片公司及产品</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data(){
    
  },
  methods: {
    btnLogin() {
      this.$router.push('/login')
      // this.$router.push('/login')
      // this.$router.push({name:'login'})
      // this.$router.push({path:'/login'})
    }
  }
}
</script>

<style scoped lang="scss">

</style>
