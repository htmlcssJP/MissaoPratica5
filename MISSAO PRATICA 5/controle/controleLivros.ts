const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id: String;
    titulo: String;
    autor: String;
    ano: Number;
    genero: String;
}


async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL);
    const data: LivroMongo[] = await response.json();
    return data.map(item => {
        const livro = new Livro();
        livro.codigo = item._id; 
        livro.titulo = item.titulo;
        livro.autor = item.autor;
        livro.ano = item.ano;
        livro.genero = item.genero;
        return livro;
    });
}

async excluir(codigo: String): Promise<Boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    return result.ok;
}

async incluir(livro: Livro): Promise<Boolean> {
    const livroMongo: LivroMongo = {
        _id: livro.codigo,
        titulo: livro.titulo,
        autor: livro.autor,
        ano: livro.ano,
        genero: livro.genero
    };
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livroMongo)
    });
    const result = await response.json();
    return result.ok;
}