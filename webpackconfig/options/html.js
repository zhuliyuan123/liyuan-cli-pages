const fs = require('fs')
const path = require('path')
function readFiles(pathList){
    let obj =  {};
    const dir = fs.readdirSync(pathList);
    dir.forEach((item)=>{
        const childPath = path.join(pathList,item)
        if(fs.statSync(childPath).isDirectory()){
            //判断为文件夹
            try{
                if(fs.statSync(path.join(childPath,'index.js')) && fs.statSync(path.join(childPath,'index.html'))){
                    console.log(item)
                    obj[item] = `./template/pages/${item}/index.html`
                }
            }catch(error){
                console.warn(error)
            }
        }
    })
    return obj; 
}
module.exports =  readFiles;