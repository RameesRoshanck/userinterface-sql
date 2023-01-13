var express = require('express');
const { appget, getuser, getSingleuser, adduser, updateuser, deleteuser,  } = require('./controller');
var router=express.Router();


router.get('/',appget)

//get book
router.get('/getuser',getuser)

//get single book
router.get('/getsingleuser/:id',getSingleuser)

//add books(post)
router.post('/adduser',adduser)

//update books(patch)
router.put('/updateuser/:id',updateuser)

//delete book(delete)
router.delete('/deleteuser/:id',deleteuser)

module.exports=router