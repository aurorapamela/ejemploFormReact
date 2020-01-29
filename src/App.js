import React from "react";
import "./App.css";

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      nombre: 'Ada',
      apellido: 'Lovelace'
    }
  }

  onChangeNombre (e) {
    this.setState({
      nombre: e.target.value
    })
  }

  onChangeApellido (e) {
    this.setState({
      apellido: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="Nombre" value={this.state.nombre} onChange={(e) => this.onChangeNombre(e)} />
        <input type="text" name="Apellido" value={this.state.apellido} onChange={(e) => this.onChangeApellido(e)} />
      </div>
    );
  }
}

export default App;
