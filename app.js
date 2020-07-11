import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';

const app = express();

require('dotenv').config();

// Conectar ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv:// {
        $process.env.USERDB }
        ':' 
        {$process.env.PWDDB}
        @bootcamp.dmeey.mongodb.net/grade?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

app.use(express.json());
app.use(studentRouter);
app.listen(process.env.PORT, () => console.log('Servidor em execucao'));
