const controleLivros = new ControleLivros();

useEffect(() => {
    const fetchLivros = async () => {
        const livrosObtidos = await controleLivros.obterLivros();
        setLivros(livrosObtidos);
    };
    fetchLivros();
}, []);

const excluir = async (codigo: String) => {
    await controleLivros.excluir(codigo);
    setCarregado(false); 
};

{livros.map((livro, index) => (
    <LinhaLivro key={index} livro={livro} onExcluir={excluir} />
))}