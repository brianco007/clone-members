import express from 'express';
import 'dotenv/config';
import './config.js'
import mainRouter from '../routers/routers.js';
import storeRouter from '../routers/storeRouter.js';
import ticketRouter from '../routers/ticketRouter.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT;

app.get('https://gymusersdata-405b6a41e1bf.herokuapp.com', (req, res)=>{
  res.json({message: 'Hi, from the root of usersBackend!'})
})

// middlewares
app.use(express.json());
app.use(cors())
// routes
app.use('https://gymusersdata-405b6a41e1bf.herokuapp.com/users', mainRouter);
app.use('/store/', storeRouter);
app.use('/tickets/', ticketRouter);


app.listen(PORT,()=>{
  console.log(`Server listening from port: ${PORT}`)
});