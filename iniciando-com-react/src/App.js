import React from 'react';

function App (props){

  const criaComboBox = () => {
    const op = ["Nome", "Idade"]
    const comboBoxOpcoes = op.map(op => <option>{op}</option>) 
    
    return (
      <select> 
        {comboBoxOpcoes}
      </select>
    )
  }

 
  const modificarNome = event => {
    console.log(event.target.value)
  }

  const MeuComboBox = () => criaComboBox()

  return (
    <> 
      <input className="text-centralizado" type="text" value={props.nome} onChange={modificarNome}/>
      <h1>Olá, {props.nome}. Sua idade é de {props.idade} anos.</h1>  
      <MeuComboBox />
    </>
  )
}


export default App;