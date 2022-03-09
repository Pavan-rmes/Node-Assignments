// import {MongoClient} from "mongodb"
import express from "express"
import dotenv from "dotenv"
import {fileRoute} from "./routes/filegen.js"

dotenv.config()

const app = express()

app.listen(process.env.PORT,()=>console.log(`Server listening on port ${process.env.PORT}`))

// async function createConnection(){
//     const client = new MongoClient(process.env.MONGO_DB)
//     await client.connect();
//     console.log("DB connected")
//     return client;
// }

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/files",fileRoute)

// export const client  = await createConnection()