<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
		</view>
		<view>
			{{data.title}}-----{{data.detail}}
		</view>
		<button @click="addData">新增</button>
		<navigator url="/uni_modules/uni-id-pages/pages/login/login-withpwd">登录</navigator>

	</view>
</template>

<script>
	//引入云对象 
	const cloudObj1 = uniCloud.importObject('cloudObj1')
	//引入数据库
	const db = uniCloud.database()
	export default {
		data() {
			return {
				data: {}
			}
		},
		onLoad() {},
		methods: {
			getData() {
				cloudObj1.get().then(res => {
					this.data = res.data[0]

					console.log(res, 'res');
					console.log(this.data[0], 'this.data');
				})
			},
			addData() {
				db.collection('article').add({
					title: "测试关联uid",
					content: "测试内容"
				}).then(res => {
					console.log(res, 'res');
				})
			},
			upDate() {
				cloudObj1.update().then(res => {
					console.log(res, 'upDate');
				})
			},
			remove() {
				cloudObj1.remove().then(res => {
					console.log(res, 'upDate');
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>