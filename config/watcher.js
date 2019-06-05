console.log('Watching dirs...');
// const router = require('../common/router.conf.js');
const { resolve } = require('path');
const {fs_readFile,fs_readdir,fs_writeFile} = require('./helper');
const chokidar = require('chokidar');
const basicRoot = resolve(__dirname,'../src/');
const watcher = chokidar.watch(basicRoot,{
	ignored: /(^|[\/\\])\../
})
//todo 这里需要先遍历src的目录文件，否则会导致rewrite重写
watcher.on('addDir',(path)=>{
	const routerList = require('../common/router.conf.js');
	let routerName = path.split('/').pop();
	fs_readdir(basicRoot).then((fileArr)=>{
		if(!fileArr.find((item,index)=> item == basicRoot)){
			return Promise.All([fs_writeFile(resolve(basicRoot,`${routerName}/index.jsx`),''),fs_writeFile(resolve(basicRoot,`${routerName}/index.scss`),'')])
		}//未找到相同文件时就写入
	})
	
	
})//添加目录时触发的事件

watcher.on('unlinkDir',(path)=>{

})//删除目录时触发的事件

module.exports = watcher;
