// importa o propTypes
import PropTypes from "prop-types"

function FuncionarioCard({imagem, 
  endereco, 
  idade, 
  nome = "Bruno costa", 
  cargo = "Desenvolvedor",
  children
}){
  return (
    <div>
      <img src={imagem} alt={"Foto do " + nome} />
      <h1>{nome}</h1>
      <h2>{cargo}</h2>
      <span>Idade: {idade}</span>
      <div>
        <p>Rua: {endereco.rua}</p>
        <p>Número: {endereco.numero}</p>
      </div>
      {/* <div>
        Descrição do funcionário:
        {children}
      </div> */}
    </div>
  )
}

// aqui vamos tipar as props
FuncionarioCard.propTypes = {
  imagem: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
  endereco: PropTypes.shape({
    rua: PropTypes.string,
    numero: PropTypes.number
  })
}

export default FuncionarioCard