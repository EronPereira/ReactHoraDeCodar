import React from "react"

function Pessoa({nome, idade, profissao, foto}){
    return(
        <main>
            <figure>
                <img src={foto} alt={nome} />
            </figure>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </main>
    )
}

export default Pessoa