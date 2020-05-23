import React from 'react';

class App extends React.Component {

  state = {
    nome: ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const op = ["Nome", "Idade"]
    const comboBoxOpcoes = op.map(op => <option>{op}</option>) 
    
    return (
      <select> 
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou DidMount')
  }

  render(){
    console.log('Executou Render')
    const MeuComboBox = () => this.criaComboBox()

    return (
      <> 
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Olá, {this.props.nome}. Sua idade é de {this.props.idade} anos.</h1>  
        <MeuComboBox />
      </>
    )
  }
}

export default App;