import './App.css'
import Card from "./components/Card"

function App() {
  // BLOCO SUPERIOR
  const usuario = {
    nome: "Bruno",
    turma: "Clamed V2"
  }
  // ## Regras básicas
  // - sempre tem que ter o return
  // - tudo que fica dentro dos parênteses do return
  // é JSX, ou seja, podemos usar HTML junto com Javascript
  return (
    <div>
      <h1 className='fundo-vermelho'>Nome: {usuario.nome}</h1>
      <h2>Turma: {usuario.turma}</h2>
      <Card />
    </div>
  )
}

export default App
