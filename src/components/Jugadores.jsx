import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Jugadores extends Component {
    url = Global.url
    state = {
        jugadores: []
    }
    loadJugadores(){
        axios.get(this.url + "api/Jugadores/JugadoresEquipos/" + this.props.idEquipo).then(response => {
            this.setState({
                jugadores: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadJugadores()
    }
    componentDidUpdate = (old) => {
        if(old.idEquipo !== this.props.idEquipo){
            this.loadJugadores()
        }
    }
  render() {
    return (
      <div>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.jugadores.map((jugador, index) => {
                        return(
                            <tr>
                        <td>{jugador.nombre}</td>
                        <td><img src={jugador.imagen} alt={jugador.nombre}/></td>
                        <td><NavLink to={"/jugador/" + jugador.idJugador} className='btn btn-primary'>Detalles</NavLink></td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
