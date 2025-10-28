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
    borrarJugador = (id) => {
        let request = "api/Jugadores/" + id
        axios.delete(this.url + request).then(()=>{
            alert("Jugado Borrado")
            this.loadJugadores()
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
                    <th colSpan="3"></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.jugadores.map((jugador, index) => {
                        return(
                            <tr key={index}>
                        <td>{jugador.nombre}</td>
                        <td><img src={jugador.imagen} alt={jugador.nombre}/></td>
                        <td><NavLink to={"/jugador/" + jugador.idJugador} className='btn btn-primary'>Detalles</NavLink></td>
                        <td><button onClick={() => this.borrarJugador(jugador.idJugador)} className='btn btn-danger'>Borrar</button></td>
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
