import React from 'react'
import Produto from './Produto'

const DesafioUseEffect = () => {
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(() => {
        if(produtos !== null)
        window.localStorage.setItem('produto', produtos)
    }, [produtos])

    React.useEffect(() => {
        const produtoLocalStorage = window.localStorage.getItem('produto')
        if(produtoLocalStorage !== null) {
            setProdutos(produtoLocalStorage)
        }
    }, [])
    const handleClick = ({target}) => {
        setProdutos(target.innerText)
    }
    return (
        <div>
            <h1>Preferencia: {produtos}</h1>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
            <Produto produto={produtos}/>
        </div>
    )
}

export default DesafioUseEffect;
