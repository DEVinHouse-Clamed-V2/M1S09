import './App.css'
import {useState} from "react"
import Carro from "./components/Carro"

function App() {

  // const [contador, setContador] = useState(0)

  // const adicionarContador = () => {
  //   // contador++
  //   // setContador(contador + 1)
  //   setContador((valorAtual) => valorAtual + 1)
  // }

  const [vendido, setVendido] = useState(false)

  return (
    <>
      {/* <h1>Contador: {contador}</h1>
      <button onClick={() => adicionarContador()}>+ adicionar</button> */}
      <Carro 
        modelo="Corolla" 
        fabricante="Toyota" 
        preco="120000"
        vendido={vendido}
        cor="preta"
      />
      <button onClick={() => setVendido((valorAtual) => !valorAtual)}>Vender carro</button>
    </>
  )
}

export default App
