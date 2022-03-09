import {client} from "../index.js"
import fs from "fs"

function getAllFiles(){
    let response = new Promise((resolve,reject)=>{
        fs.readdir("./src/files",(err,files)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(files)
            }
        })
    })
    return response
}

function genFile(){
    const date = new Date()
    const [d,m,y] = date.toLocaleDateString().split("/")
    const [hr,min,sec] = date.toLocaleTimeString().split(" ")[0].split(":")
    let response = new Promise((resolve,reject)=>{
        fs.writeFile(`./src/files/date-${d}-${m}-${y} ${hr}-${min}-${sec}.txt`,`${date.toLocaleDateString()} ${date.toLocaleTimeString()} `,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("success")
            }
        })
    })
    return response;
}

export {getAllFiles,genFile}