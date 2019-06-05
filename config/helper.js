//常用的fs方法
const Q = require('q');
const fs = require('fs');

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
module.exports = {
	fs_readFile,
	fs_readdir,
	fs_writeFile
}