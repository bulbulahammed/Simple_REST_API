require('dotenv').config()

const app = require("./app");
const PORT = process.env.PORT;


app.listen(PORT,()=>{
    console.log(`app is listening at localhost:${PORT}`);
})