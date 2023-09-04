const express = require('express')
class Server{
   
    contructor(){
        this.port = process.env.PORT || 3000
        this.app = express()
        this.routers()
    }
    routers(){
        this.app.get('/', function(req,res){
            res.send('Hello Word')
        })
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`App escuchando en el puerto, ${this.port}.`)
        })
    }
    
}
module.exports = Server;
