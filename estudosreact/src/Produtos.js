import React from 'react';

function Produtos ({ dados }) {

    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
            <img src={dados.fotos[0].src} alt=""/>
        </div>
    )
}

export default Produtos;