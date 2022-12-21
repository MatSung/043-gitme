
let os = require('os');

function getCpuDetails(){
    let data = {};
    data.cpuName = os.cpus()[0].model;
    data.count = os.cpus().length;
    return data;
}

console.log(getCpuDetails());