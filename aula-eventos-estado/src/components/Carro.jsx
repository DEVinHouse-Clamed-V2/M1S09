function Carro(
  {modelo, 
    fabricante, 
    cor, 
    preco, 
    vendido,
    numPortas = 4}){
      return (
        <div>
          <h3>{vendido ? (
            <>
              <h1>Modelo: {modelo}</h1>
              <h1>Fabricante: {fabricante}</h1>
              <h1>Cor: {cor}</h1>
              <h1>Nº portas: {numPortas}</h1>
            </>
          ) : (
            <>
            <h1>Modelo: {modelo}</h1>
            <h1>Fabricante: {fabricante}</h1>
            <h1>Cor: {cor}</h1>
            <h1>Preco: {preco}</h1>
            <h1>Nº portas: {numPortas}</h1>
            </>
          )}</h3>
          
        </div>
      )
}

export default Carro