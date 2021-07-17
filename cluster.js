const cnumCPUs = require('os').cpus().length
const http = require('http')
const express = require ('express')
const app = express()
const cluster = require('cluster')
if(cluster.isMaster){
    console.log("This is master process", process.pid)
    for(let i = 0 ;i<cnumCPUs ;i++){
        cluster.fork()
    }
}else{
    // http.createServer((req, res)=>{
    //     const message = `this is worker process : ${process.pid}`
    //     console.log(message)
    //     res.end(message)
    // }).listen(3000)
    app.listen((3000),() =>{
        app.get('/',(req, res) =>{
            const message = `this is worker process : ${process.pid}`
            console.log(message)
            res.end(message)
        })
    })
}