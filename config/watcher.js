console.log('Watching dirs...');
const { resolve } = require('path');
const fs = require('fs');
const chokidar = require('chokidar');
const basicRoot = resolve(__dirname,'../src/');
const watcher = chokidar.watch(basicRoot,{
	ignored: /(^|[\/\\])\../,
})
watcher.on('addDir',(path)=>{
	let routerName = path.split('/').pop(); //对应的文件夹名字
	fs.writeFileSync(resolve(basicRoot,`${routerName}/index.jsx`),'',(err)=>{
		console.log('创建成功');
	})
	fs.writeFileSync(resolve(basicRoot,`${routerName}/index.scss`),'',(err)=>{
		console.log('创建成功');
	})
	
})//添加目录时触发的事件

watcher.on('unlinkDir',(path)=>{

})//删除目录时触发的事件

module.exports = watcher