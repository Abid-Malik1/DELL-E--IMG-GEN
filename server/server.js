const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {Configuration, OpenAIApi} = require("openai");



const app = express();
app.use(cors());
app.use(express.json());

app.listen(4000, ()=>{
console.log("Server is running")
});

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (prompt) =>{
    const response = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json"
      });
      const image = response.data[0].b64_json;
};
 
app.post("/generateImage", async (req,res) =>{
    generateImage(req.body.prompt)
res.send({data: "Testing"});
});