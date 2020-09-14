import React from 'react'
import Axios from 'axios'

const App = () => {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [rua, setRua] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [cidade, setCidade] = React.useState('')
    const [estado, setEstado] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('https://ranekapi.origamid.dev/json/api/usuario', {
            nome: nome,
            email: email,
            senha: senha,
            cep: cep,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        })
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="senha">Senha</label>
                <input type="text" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                <label htmlFor="cep">Cep</label>
                <input type="text" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} />

                <label htmlFor="rua">Rua</label>
                <input type="text" id="rua" value={rua} onChange={(e) => setRua(e.target.value)} />

                <label htmlFor="numero">Numero</label>
                <input type="text" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />

                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />

                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />

                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} />

                <button>Enviar</button>
            </form>
        </div>
    )
}  

export default App;

