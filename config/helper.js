//常用的fs方法
const Q = require('q');
const fs = require('fs');
const {join} = require('path');
function fs_readFile(path){
	var defer = Q.defer();
	fs.readFile(path,function(err, data) {
	    if (err) defer.reject(err) 
	    else defer.resolve(data) 
  	})
	  return defer.promise 
}
function fs_readdir(path){
	var defer = Q.defer();
	fs.readdir(path,function(err,files){
		if(err) defer.reject(err)
		else defer.resolve(files)
	})
	return defer.promise
}

function fs_writeFile(file,data,option,callback){
	var defer = Q.defer();
	fs.writeFile(file,data,option,(err)=>{
		if(err){
			defer.reject(err)
		}
		else{
			callback && callback();
			defer.resolve();
		}
	})
	return defer.promise;
}

function fs_copyFile(source,target,callback){
	var defer = Q.defer();
	fs.copyFile(source,target,(err)=>{
		if(err){
			defer.reject(err)
		}
		else{
			callback && callback();
			defer.resolve()
		}
	})
	return defer.promise
}
function fs_mkdir(path,options = {},callback){
	var defer = Q.defer();
	fs.mkdir(path,options,(err)=>{
		if(err){
			defer.reject(err)
		}
		else{
			callback && callback();
			defer.resolve()
		}
	})
	return defer.promise
}
async function fs_rmdirAll(path){
	let files = fs.readdirSync(path);
	if(files.length != 0){
		files.map((item,index)=>{
			let filePath = join(path,item);
			if(fs.statSync(filePath).isDirectory()){
				fs_rmdirAll(filePath)
			}
			else{
				fs.unlinkSync(filePath,(err)=>{if(err){throw err}; console.log('文件已删除')})
			}

		})
	}//还有文件时就递归进去
    fs.rmdirSync(path);
}
function fs_rmdir(path,callback){
	var defer = Q.defer();
	fs.rmdir(path,(err)=>{
		if(err){
			defer.reject(err)
		}
		else{
			callback && callback();
			defer.resolve()
		}
	})
	return defer.promise
}
function fs_rmFile(path,callback){
	var defer = Q.defer();
	fs.unlink(path,(err)=>{
		if(err){
			defer.reject(err)
		}
		else{
			callback && callback();
			defer.resolve()
		}
	})
	return defer.promise
}
module.exports = {
	fs_readFile,
	fs_readdir,
	fs_writeFile,
	fs_copyFile,
	fs_mkdir,
	fs_rmdir,
	fs_rmFile,
	fs_rmdirAll
}