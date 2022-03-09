import express from "express"
import {getAllFiles,genFile} from "./helper.js"

export const fileRoute = express.Router()

fileRoute.get("/all",(req,res)=>{
    const allFiles = getAllFiles()
    allFiles.then((data)=>res.send(data))
})

fileRoute.post("/gen",(req,res)=>{
    const response = genFile()
    response.then((data)=>res.send(data))
})