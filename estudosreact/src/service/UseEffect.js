import React from 'react'
import Axios from 'axios'

const UseEffect = () => {
    const [dados, setDados] = React.useState(0);
    const [contar, setContar] = React.useState(0)

    const handleClick = () => {
        setContar(contar + 1)
    }
    
    React.useEffect(() => {
        Axios.get('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((response) => {
            setDados(response.data)
        })
    }, []);

    return (
        <div>
            {dados ? 
            <div>
                <h1>{dados.nome}</h1>
                <button onClick={handleClick}>{contar}</button>
                <h1> R$ {dados.preco}</h1>
                <img src={dados.fotos[0].src} alt=""/>
                
            </div>
            : 'dados não existentes'}
        </div>
    )
}

export default UseEffect;