import { livros } from './dadosUltimosLancamentos'

function UltimosLancamentos() {
    return (
        <section>
            <h2>Ultimos lançamentos</h2>
            {livros.map(livro => (
                <img src={livro.src}  alt='livros'/>
            ))}
        </section>
    )
}

export default UltimosLancamentos;