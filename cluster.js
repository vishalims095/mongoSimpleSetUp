const cnumCPUs = require('os').cpus().length
const cluster = require('cluster')
if(cluster.isMaster){
    console.log("This is master process", process.pid)
    for(let i = 0 ;i<cnumCPUs ;i++){
        cluster.fork()
    }
}else{
    console.log("this is worker process", process.pid)
}