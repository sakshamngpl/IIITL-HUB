
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

import Semester from './models/semester.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.post('/uploadNotes', (req, res) => {
  console.log(req.body);
  res.send('maa chudao');
})

const CONNECTION_URL = 'mongodb+srv://Rudranil:*Rudranil01@cluster0.a5ervwq.mongodb.net/pro_sem?retryWrites=true&w=majority';
// const CONNECTION_URL = 'mongodb://localhost:27017/Restaurant';
const PORT = process.env.PORT|| 8081;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db')
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))})
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);