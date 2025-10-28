import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
// // {
//   "idJugador": 0,
//   "nombre": "string",
//   "posicion": "string",
//   "imagen": "string",
//   "fechaNacimiento": "string",
//   "pais": "string",
//   "idEquipo": 0
// // }
export default class CrearJugador extends Component {
    state = {
        status: false
    }
    url = Global.url
    cajaidJugador = React.createRef()
    cajanombre = React.createRef()
    cajaposicion = React.createRef()
    cajaimagen = React.createRef()
    cajafechaNacimiento = React.createRef()
    cajapais = React.createRef()
    cajaidEquipo = React.createRef()

    crearJugador = (event) => {
        event.preventDefault()
        let request = "api/Jugadores"
        let jugador = {
            idJugador: parseInt(this.cajaidJugador.current.value),
            nombre: this.cajanombre.current.value,
            posicion: this.cajaposicion.current.value,
            imagen: this.cajaimagen.current.value,
            fechaNacimiento:this.cajafechaNacimiento.current.value, 
            pais: this.cajapais.current.value,
            idEquipo: parseInt(this.cajaidEquipo.current.value),
        }
        axios.post(this.url + request,jugador).then(()=>{
            console.log("Jugador Creado")
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
            <div className='text-center'>
                <form>
                    <label htmlFor="-">Id jugador</label>
                    <input className='form-control' type="text" ref={this.cajaidJugador} />
                    <label htmlFor="-">Nombre</label>
                    <input className='form-control' type="text" ref={this.cajanombre} />
                    <label htmlFor="-">posicion</label>
                    <input className='form-control' type="text" ref={this.cajaposicion} />
                    <label htmlFor="-">imagen</label>
                    <input className='form-control' type="text" ref={this.cajaimagen} />
                    <label htmlFor="-">fechaNacimiento</label>
                    <input className='form-control' type="text" ref={this.cajafechaNacimiento} />
                    <label htmlFor="-">pais</label>
                    <input className='form-control' type="text" ref={this.cajapais} />
                    <label htmlFor="-">idEquipo</label>
                    <input className='form-control' type="text" ref={this.cajaidEquipo} />
                    <button onClick={this.crearJugador} className='btn btn-primary'>Crear</button>
                </form>
                {
                    this.state.status === true &&
                    <Navigate to={`/equipo/${this.cajaidEquipo.current.value}`}/>
                }
            </div>
        )
    }
}
