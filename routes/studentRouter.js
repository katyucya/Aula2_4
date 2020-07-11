import express from 'express';
import { studentModel } from '../models/student';
const app = express();

// primeira rota
app.get('/student', async (req, res) => {
  try {
    // retorna todos os documentos dessa coleção
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndDelete({ _id: req.params.id });
    if (!student) {
      res.status(404).send('Documento nao encontrado na colecao');
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// fazer update
app.patch('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(err);
  }
});
export { app as studentRouter };
