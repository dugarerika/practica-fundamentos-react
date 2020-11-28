import React from 'react';
import {getAnuncios} from './API/anuncios';
class App extends React.Component {
  state = {
    anuncio: null,
  };

  async componentDidMount() {
    const resultado = await getAnuncios();
    this.setState({ anuncio: resultado });
    console.log(resultado)
  }

  render() {
    console.log(this.state)
    const {anuncio} = this.state;
    return <div className="App">{JSON.stringify(anuncio)}</div>
  }

}

export default App;
