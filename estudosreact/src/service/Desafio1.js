import React from 'react'
import axios from 'axios';

const Desafio1 = () => {
    const [dados, setDados] = React.useState(null)
    const [produto, setProduto] = React.useState(null)

    React.useEffect(() => {
        if(produto !== null){
            localStorage.setItem('product', produto)
        }
        
    }, [produto])

    React.useEffect(() => {
        const produtoStorage = localStorage.getItem('product')
        if(produtoStorage !== null) {
            setProduto(produto)
        }
    }, [produto])

    const handleClick = ({ target }) => {
        setProduto(target.innerText)
    }
    React.useEffect(() => {
        axios.get(`https://ranekapi.origamid.dev/json/api/produto/notebook`).then((response) => {
            setDados(response.data)
            console.log(response.data)
        })
    }, [])

    if(dados === null) return null
    return (
        <div>
            <h1>Preferencia: {produto}</h1>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <h1>Produto: {dados.nome}</h1>
            <h1>Preço: {dados.preco}</h1>
            <h2>Descrição: {dados.descricao}</h2>
        </div>
    )
}

export default Desafio1;
