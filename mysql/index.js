import express from 'express'

import mysql from "mysql2"
const app=express();
app.use(express.json())
let connection;
//ADD USER TO THE DATABASE
app.post("/user/add",(req,res)=>{
    const{id,username,location}=req.body;
    connection.query(
        `INSERT INTO first(id,username,location) VALUES('${id}','${username}','${location}')`,(err,results,fields)=>{
            if(err) throw err;
            console.log(results);
            if(results.affectedRows===1)
                res.status(200).json({success:true,message:"user added in the database"})
            else res.status(200).json({success:false,message:"unable to add user to the database"})
        }
    )
})
//READ DATA FROM THE DATABASE
app.get("/user/:id",(req,res)=>{
    const {id}=req.params   
    if(id){
        connection.query(`
            SELECT * FROM first WHERE ID=${id}`,(err,results,field)=>{
                console.log(results);
                res.status(200).json(...results)
                
            })
    }else{
res.status(200).json({success:false,message:"Give an valid user id"})
    }

})
//UPDATE THE USER IN THE DATABASE
    app.put("/user/update/:id",(req,res)=>{
    const{id}=req.params;
    // console.log(id);

    if(id){
    const {username,location}=req.body;
    connection.query(`UPDATE first SET username='${username}',location='${location}' WHERE id=${id}`,(err,results,fields)=>{
    // console.log(results);
    res.status(200).json({success:true,message:"successfulluy modidied"})
    })
    }else{
        res.status(200).json({success:false,message:"user id not provided"})
    }
    })
//DELETE USER FROM THE DATABASE
app.delete("/user/delete/:id",(req,res)=>{
    const{id}=req.params;
    if(id){
        connection.query(`DELETE FROM first where id=${id}`,(err,results,fields)=>{
            // console.log(results);
            if(results.affectedRows===1){
                res.status(200).json({success:true,message:"successfully deleted user from the database"})
            }
            
        })
        
    }else{
        res.status(200).json({success:false,message:"invalid user id"})
    }
})

app.listen(8000,()=>{
    console.log('server has started');
   connection= mysql.createConnection({
        host:"localhost",
    user:"root",
    password:"helloworld",
    database:"first"
    
    });

    
    
})