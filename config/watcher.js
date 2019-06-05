console.log('Watching dirs...');
const path = require('path');
const {fs_readFile,fs_readdir,fs_writeFile} = require('./helper');
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
			routerList = JSON.stringify(routerList);
			fs_writeFile(resolve('/src/',routerName,'/index.jsx'),'');
			fs_writeFile(resolve('/src/',routerName,'/index.scss'),'');
			fs_writeFile(routerListSrc,`module.exports=${routerList}`)
			.then((res)=>{
				console.log('写入成功')
			})
		}//只监听新建立的目录
	})
})

watcher.on('unlinkDir',(path)=>{

})//删除目录时触发的事件

module.exports = watcher;
