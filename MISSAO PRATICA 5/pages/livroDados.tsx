const controleLivros = new ControleLivros();

const incluir = async () => {
    const livro = new Livro();
    await controleLivros.incluir(livro);
    router.push('/lista'); 
};