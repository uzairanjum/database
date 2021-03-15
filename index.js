const express = require('express')
const mongoose = require('mongoose')
const User = require('./routes/model')
const dbb = require('./db/connection')


const app = express();
app.listen(5000, () => {console.log('ready to start')})





app.get('/', (req, res) => {res.json("api is working")

User.find({}, function(err,users){
    if(err) console.warn(err);
    console.warn(users);
})


})



app.post('/', (req, res) =>  {
        if(!req.body.first_name || !req.body.last_name || !req.body.last_name){
        return res.json({error: "Field is empty"})
}

const newuser = new User({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
});
newuser.save().then((result) => {
       console.log(result)
   })
   .catch(err => console.log(err));    

})

app.put('/student/:id', (req,res) => {
 
   let id =req.params.id
   let first_name = req.body.first_name
   let last_name = req.body.last_name
   let email = req.body.email
   
   let index = student.findIndex((student) => {
       return (student.id == Number.parseInt(id))
    })

    if(index >= 0) {
        let std = student[index]
        std.first_name = first_name
        std.last_name = last_name
        std.email = email
        res.json(std)
    }else {
        res.status(404)
        res.end()
    }  
})

app.delete('/student/:id', (req, res) =>{
        
    let id = req.params.id

    let index = student.findIndex((student) =>{
        return (student.id == Number.parseInt(id))
    })

    if(index >= 0){
        let std = student[index]
        student.splice( index , 1 )
        res.json(std)
    }
   else
    { res.status(404)
      res.end()

    }


})

