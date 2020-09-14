import React from 'react'

const Produto = ({dados}) => {
    return (
        <div>
           <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
            <img src={dados.fotos[0].src} alt="imagem" />
        </div>
    )
}

export default Produto;