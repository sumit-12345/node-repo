const express=require('express');
const app=express();

app.get('/sayHello',()=>{
    console.log('****************')
    console.log('I am saying Hello.')
    console.log('****************')
})
app.post()
app.put()
app.delete()


const server=app.listen('9999',()=>{
    // const address=server.address().address
    // const port=server.address().port
    console.log('Listining to port no. 9999')
})