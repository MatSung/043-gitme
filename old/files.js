const fs = require("node:fs");

function showFiles(path){
    fs.readdir(path, 
        {withFileTypes: true},
        (err, data) =>{
        if(err) throw err;

        data.forEach(element => {
            if(element.isFile()){
                console.log(element);
            }
        });
        // console.log(data);
    })
}

module.exports.showFiles = showFiles;