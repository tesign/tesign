console.log('Watching dirs...');
const path = require('path');
const {fs_readFile,fs_readdir,fs_writeFile,fs_copyFile,fs_mkdir,fs_rmdir,fs_rmFile} = require('./helper');
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
async function addFile(routerName){
	let routerList = require('../common/router.conf.js');
	routerList.push({link:`/${routerName}`,name:routerName,road:routerName});
	fs_copyFile(resolve('/src/template/index.jsx'),resolve('/src/',routerName,'/index.jsx'));
	fs_writeFile(resolve('/src/',routerName,'/index.scss'),''); //创建新组件的文件
	await fs_mkdir(resolve('/examples/components/',routerName));//创建component下的文件夹
	Promise.all([fs_writeFile(resolve('/examples/components/',routerName,'/index.jsx'),''),fs_writeFile(resolve('/examples/components/',routerName,'/index.scss'),''),fs_writeFile(resolve('/doc/docs/',`${routerName}.md`),''),fs_writeFile(routerListSrc,`module.exports=${JSON.stringify(routerList)}`)])
}

fs_readdir(basicRoot).then((fileArr)=>{
	watcher.on('addDir',(path)=>{
		let routerName = path.split('/').pop();
		if(fileArr.indexOf(routerName) == -1){
			addFile(routerName)
			.then(()=>{
				console.log('路由列表重写成功')
			})
			.catch((err)=>{
				console.log(err)
			})
		}//只监听新建立的目录
		//todo 这里应该在增加一个逻辑，也即添加重复模板后出现提示，后期优化。
		//todo examples和src的组件目录除template应是一致的，因此要做双向删除，后期优化。
	})
})

watcher.on('unlinkDir',(path)=>{
	const deleteRouter = path.split('/').pop();//删除的路由列表
	let routerList = require('../common/router.conf.js');
	routerList = routerList.filter((item,index)=>{
		return item.road != deleteRouter;
	})
	fs_rmFile(resolve('/doc/docs/',`${deleteRouter}.md`))
	// fs_rmdir(resolve('/examples/components/',deleteRouter))
	// .catch((err)=>{
	// 	console.log(err);
	// })
	//todo 这里要重写rmdir逻辑，因为不支持删除非空文件夹，得递归依次删除
	fs_writeFile(routerListSrc,`module.exports=${JSON.stringify(routerList)}`)
	.then(()=>{
		console.log('路由列表重写成功')
	})
})//删除目录时触发的事件

module.exports = watcher;
