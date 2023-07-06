<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
		</view>
		<view>
			{{data.title}}-----{{data.detail}}
		</view> 
		
	</view>
</template>

<script>
		//引入云对象 
		const cloudObj1 = uniCloud.importObject('cloudObj1')
	export default {
		data() {
			return {
				data: {}
			}
		},
		onLoad() {
			this.getData()
			this.addData()
			this.upDate()
			this.remove()
		},
		methods: {
		getData(){
			cloudObj1.get().then(res=>{
				this.data = res.data[0]
				
				console.log(res,'res');
				console.log(this.data[0],'this.data');
			})
		},
		addData(){
			cloudObj1.add().then(res=>{
				console.log(res,'addres');
			})
		},
		upDate(){
			cloudObj1.update().then(res=>{
				console.log(res,'upDate');
			})
		},
		remove(){
			cloudObj1.remove().then(res=>{
				console.log(res,'upDate');
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
