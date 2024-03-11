const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/router');
const cors = require('cors');
const app = express();
const PORT = 4000;
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',userRouter);

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})