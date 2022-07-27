<template>
	<div id="app">
		<!-- <header class="header">
			<div></div>
			<div>芯企查</div>
			<div></div>
		</header> -->
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {
		
	},
	data(){
    return {
			
    }
  }
}
</script>

<style>
/* body { overflow-x: hidden; overflow-y: auto; } */
::-webkit-scrollbar {
  display: none;
}
html, body, #app {
	width: 100%;
	height: 100%;
	/* overflow: hidden; */
}
.header {
	width: 100%;
	height: 36px;
	text-align: center;
	font-size: 17px;
	font-weight: 500;
	color: #000000;
	line-height: 36px;
	border: 1px solid #e8ebf3;
}
#container, .main, .content{
	width: 100%;
	height: 100%;
	background: #F8FAFD;
}
</style>
