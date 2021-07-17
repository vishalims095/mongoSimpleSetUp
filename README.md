
# Nodejs cluster

A cluster is a pool of similar workers running under a parent Node process. Workers are spawned using the fork() method of the child_processes module. This means workers can share server handles and use IPC (Inter-process communication) to communicate with the parent Node process.

## Usage

```python
const cnumCPUs = require('os').cpus().length

# check masterprocess
cluster.isMaster
# create child process
cluster.fork()

# example
if(cluster.isMaster){
    console.log("This is master process", process.pid)
    for(let i = 0 ;i<cnumCPUs ;i++){
        cluster.fork()
    }
}else{
  app.listen((3000),() =>{
     app.get('/',(req, res) =>{
         const message = `this is worker process ${process.pid}`
         console.log(message)
         res.end(message)
     })
  })
}

```

