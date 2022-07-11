<template>
	<div id="app">
		<router-view></router-view>
		<van-tabbar v-model="active">
      <van-tabbar-item>
				<router-link to="home">首页</router-link>
			</van-tabbar-item>
      <van-tabbar-item>
				<router-link to="type">产品分类</router-link>
			</van-tabbar-item>
      <van-tabbar-item>
				<router-link to="enterprise">企业中心</router-link>
			</van-tabbar-item>
    </van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {
		
	},
	data(){
    return {
      active: 0,
      number: ''
    }
  }
}
</script>

<style>
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
} */
</style>
