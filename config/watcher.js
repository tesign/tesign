console.log('Watching dirs...');
const path = require('path');
const {fs_readFile,fs_readdir,fs_writeFile,fs_copyFile} = require('./helper');
const chokidar = require('chokidar');
const basicRoot = resolve('/src/');
const routerListSrc = resolve('/common/router.conf.js');
const watcher = chokidar.watch(basicRoot,{
	ignored: /(^|[\/\\])\../,
	depth:0,
})//不监听子目录
function resolve(...dir) {
	return path.join(__dirname,'..',...dir)
}
fs_readdir(basicRoot).then((fileArr)=>{
	watcher.on('addDir',(path)=>{
		let routerName = path.split('/').pop();
		if(fileArr.indexOf(routerName) == -1){
			let routerList = require('../common/router.conf.js');
			routerList.push({link:`/${routerName}`,name:routerName,road:routerName});

			fs_copyFile(resolve('/src/template/index.jsx'),resolve('/src/',routerName,'/index.jsx'))
			fs_writeFile(resolve('/src/',routerName,'/index.scss'),'');
			fs_writeFile(routerListSrc,`module.exports=${JSON.stringify(routerList)}`)
			.then((res)=>{
				console.log('路由列表重写成功')
			})
		}//只监听新建立的目录
	})
})

watcher.on('unlinkDir',(path)=>{
	const deleteRouter = path.split('/').pop();//删除的路由列表
	let routerList = require('../common/router.conf.js');
	routerList = routerList.filter((item,index)=>{
		return item.road != deleteRouter;
	})
	fs_writeFile(routerListSrc,`module.exports=${JSON.stringify(routerList)}`)
	.then(()=>{
		console.log('路由列表重写成功')
	})
})//删除目录时触发的事件

module.exports = watcher;
