import React from 'react'
import Axios from 'axios'

const Produto = ({produto}) => {
    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
        if(produto !== null)
        // Fazendo uma requisição GET com JS puro
        /*fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json))*/
        
        // UTILIZANDO AXIOS
        Axios.get(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => {
            setDados(response.data)
        })
    }, [produto])
    if(dados === null) return null;
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
        </div>
    )
}

export default Produto
