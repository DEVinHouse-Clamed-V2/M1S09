import Cabecalho from "./Cabecalho"

function Card(props){
  return (
    <div>
      <Cabecalho texto={props.titulo} />
      <h3>{props.subtitulo}</h3>
      <span>{props.valor}</span>
      <span>{props.nome}</span>
    </div>
  )
}

export default Card