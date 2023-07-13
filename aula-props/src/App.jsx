import './App.css'
import FuncionarioCard from "./components/FuncionarioCard"

function App() {

  const funcionariosList = [
    {
      nome: 'John Legend',
      cargo: 'cantor',
      imagem: 'https://avatars.githubusercontent.com/u/62752426?v=4',
      idade: 24,
      endereco: {
        rua: 'Rua 1',
        numero: 25
      }
    },
    {
      nome: 'Breno Costa',
      cargo: 'professor',
      imagem: 'https://avatars.githubusercontent.com/u/62752426?v=4',
      idade: 24,
      endereco: {
        rua: 'Rua 1',
        numero: 25
      }
    },
    {
      nome: 'Bruno Costa',
      cargo: 'desenvolvedor',
      imagem: 'https://avatars.githubusercontent.com/u/62752426?v=4',
      idade: 24,
      endereco: {
        rua: 'Rua 1',
        numero: 25
      }
    }
  ]

  return (
    <>
    <p></p>
      {/* <FuncionarioCard 
        nome='John Legend'
        cargo="Cantor"
        idade={24}
        endereco={{rua: "Rua 1", numero: 25}}
        imagem="https://avatars.githubusercontent.com/u/62752426?v=4" 
      /> */}
    
      {funcionariosList.map((funcionario, index) => (
        <FuncionarioCard 
          imagem={funcionario.imagem} 
          nome={funcionario.nome}
          idade={funcionario.idade}
          cargo={funcionario.cargo}
          endereco={funcionario.endereco}
          key={index}
        />
      ))}

    </>
  )
}

export default App
