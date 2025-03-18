const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String, required: true }
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;