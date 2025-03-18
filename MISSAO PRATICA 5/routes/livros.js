const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try {
        const livro = await incluir(req.body);
        res.status(201).json({ message: 'Livro incluído com sucesso', livro });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao incluir livro', error });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        await excluir(req.params.codigo);
        res.json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir livro', error });
    }
});

module.exports = router;