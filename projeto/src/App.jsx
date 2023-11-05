import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SayMyName from "./components/SayMyName"
import Pessoa from "./components/Pessoa"

function App() {
  const name = "Eron"
  return(
    <main>
      <h1>Teste</h1>
      <h2>{name}</h2>
      <SayMyName nome="Eron"/>
      <Pessoa nome="Emily" idade="17" profissao="estudante" foto="https://t4.ftcdn.net/jpg/02/64/96/89/360_F_264968907_FhAxc72grXqx3Z42E4UCjULrXeSjvG90.jpg"/>
    </main>
  )
}

export default App
