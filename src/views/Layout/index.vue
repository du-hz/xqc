<template>
	<div id="container">
		<router-view></router-view>
		<van-tabbar v-model="active">
		<!-- <van-tabbar v-model="active" v-show="$route.meta.TabbarShow"> -->
			<van-tabbar-item to="home">
				<span>首页</span>
				<template #icon="props">
					<img :src="props.active ? homeObj.homeImg1 : homeObj.homeImg2" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="type">
				<span>产品分类</span>
				<template #icon="props">
					<img :src="props.active ? typeObj.typeImg1 : typeObj.typeImg2" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="user">
				<span>用户中心</span>
				<template #icon="props">
					<img :src="props.active ? enterpriseObj.enterpriseImg1 : enterpriseObj.enterpriseImg2" />
				</template>
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
      homeObj: {
        homeImg1: require('../../assets/images/home/footer/icon_home_selected.svg'),
				homeImg2: require('../../assets/images/home/footer/icon_home_normal.svg')
      },
			typeObj: {
				typeImg1: require('../../assets/images/home/footer/icon_category_selected.svg'),
				typeImg2: require('../../assets/images/home/footer/icon_category_normal.svg')
			},
			enterpriseObj: {
				enterpriseImg1: require('../../assets/images/home/footer/icon_user_selected.svg'),
				enterpriseImg2: require('../../assets/images/home/footer/icon_user_normal.svg')
			}
    }
  }
}
</script>

<style>
.header {
	width: 100%;
	height: 36px;
	text-align: center;
	font-size: 17px;
	font-family: PingFangSC, PingFangSC-Medium;
	font-weight: 500;
	color: #000000;
	line-height: 36px;
}
</style>
