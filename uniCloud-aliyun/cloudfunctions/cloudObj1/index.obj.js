const db = uniCloud.database()
module.exports = {
	_before: function () { // 通用预处理器

	},
	async get(){
	const res  = await db.collection('article').get()
	return res
	},
	async add(){
		const res =  await db.collection('article').add({
			title:"测试关联uid",
			content:"测试内容"
		})
		return res
	},
	async update(){
		const res =  await db.collection('article').doc('64a67789819ce81408685a2e').update({
			title:"修改测试标题",
			detail:"修改测试内容"
		})
		return res
	},
	//注意! 一不小心会删库,TMD 
	async remove(){
		const res =  await db.collection('article').doc('64a67789819ce81408685a2e').remove({
			title:"修改测试标题",
			detail:"修改测试内容"
		})
		return res
	}
}
