const express=require('express')

const app=express()

var time = new Date();
var hours=time.getHours()
console.log(hours)

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
   
    if(hours > 8 && hours < 17){
        res.sendfile(__dirname + '/public/home.html')}
        else 
        {res.sendfile(__dirname + '/public/erreur.html')}
    }
)

app.get('/contact',(req,res)=>{
   
    if(hours<8 && hours>17){
        res.sendfile(__dirname + '/public/contact.html')}
        else 
        {res.sendfile(__dirname + '/public/erreur.html')}
    }
)
app.get('/services',(req,res)=>{
   
    if(hours<8 && hours>17){
        res.sendfile(__dirname + '/public/ourservice.html')}
        else 
        {res.sendfile(__dirname + '/public/erreur.html')}
    }
)


app.listen(8080,(err)=>{
    if (err)console.log('server is not running')
    else 
    console.log('server is running on port 8080')
})