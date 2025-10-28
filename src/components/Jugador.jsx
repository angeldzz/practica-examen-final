import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Jugador extends Component {
  url = Global.url
  state = {
    jugador: []
  }
  render() {
    let request = "api/Jugadores/" + this.props.idJugador
    axios.get(this.url + request).then(response => {
      this.setState({
        jugador: response.data
      })
    })
    return (
      <div className='text-center'>
          <NavLink to={`/equipo/${this.state.jugador.idEquipo}`} className="btn btn-secondary">Volver</NavLink>
          <h2>{ this.state.jugador.nombre }</h2>
          <h3>Posición: {this.state.jugador.posicion}</h3>
          <img src={this.state.jugador.imagen} alt='img'/>
          <h3>Fecha nacimiento: {this.state.jugador.fechaNacimiento}</h3>
          <h3>Pais: {this.state.jugador.pais}</h3>
      </div>
    )
  }
}
