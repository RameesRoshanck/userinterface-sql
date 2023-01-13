const client=require('./connection')


const appget=(req,res)=>{
    res.send("<h1>hai</h1>");
    res.end;
}

//get all books
const getuser=(req,res)=>{
     client.query("SELECT * FROM labour",(error,result)=>{
        if(error){
            console.log(error);
        }else
        res.status(200).json(result.rows);
     });
}

//get one book
const getSingleuser=(req,res)=>{
    const id=parseInt(req.params.id);
      client.query("SELECT * FROM labour WHERE id=$1",[id],(error,result)=>{
        if(error){
            console.log(error);
        }else
        res.status(200).json(result.rows)
      })
}

// add books
const adduser=(req,res)=>{
   const {name,email,age}=req.body;
   client.query("SELECT s FROM labour s WHERE s.email=$1",[email],(error,result)=>{
    if(result.rows.length){
    res.send("email is already exist");
    }
    //add user
    client.query("INSERT INTO labour(name,email,age)VALUES($1,$2,$3)",[name,email,age],(error,result)=>{
        if(error) throw error
        res.status(200).send("user created succesfully")
        console.log("user created succesfully");
    })
   })
}

//update books
const updateuser=(req,res)=>{
    const id=parseInt(req.params.id);
    const {name,email}=req.body
    client.query("SELECT * FROM labour WHERE id=$1",[id],(error,result)=>{
       const usernotfound=!result.rows.length
       if(usernotfound){
        res.send("user not found there for update not possible")
       }else

    client.query("UPDATE labour SET name =$1,email=$2 WHERE id=$3",[name,email,id],(error,result)=>{
        if(error) throw error
        res.status(200).send("user updation is success")
        console.log('user updation is success');
    })
    })

}

//delete book
const deleteuser=(req,res)=>{
    const id=req.params.id
    client.query("DELETE FROM labour WHERE id=$1",[id],(error,result)=>{
        if(error) throw error
        res.status(200).send('user delete successfully');
        console.log('user delete succesfully');
    })
}


module.exports={
    appget,
    getuser,
    getSingleuser,
    adduser,
    updateuser,
    deleteuser
}