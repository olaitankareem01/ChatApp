import express,{ Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app:Application = express();
const Port = process.env.PORT;


app.get("/",async(req:Request,res:Response)=>{

    let WelcomeMessage:String = "Hello World";
    console.log(WelcomeMessage);
})

app.listen(Port,()=>{
    console.log(`app listening at ${Port}`);
});
