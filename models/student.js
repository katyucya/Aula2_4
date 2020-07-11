import mongoose from 'mongoose';
// criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota nao permitido');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});
// definindo o modelo da coleção
const studentModel = mongoose.model('student', studentSchema);
export { studentModel };
