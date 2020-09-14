import React from 'react'
import Produto from './Produto'


const DesafioUseState = () => {
    const [dados, setDados] = React.useState(null)

    async function handleClick(event){
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
      const json = await response.json()
      setDados(json)
    }
        // UTILIZANDO AXIOS
    /*const handleClick = (event) => {
        axios.get(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
        .then((response) => {
            setDados(response.data)
        })
    }*/
    return (
        <div>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <button onClick={handleClick}>tablet</button>
            {dados ? <Produto dados={dados}/> : null}
        </div>
    )
}

export default DesafioUseState