import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom";
import MenuRutas from './MenuRutas';
import Jugadores from './Jugadores';
import Jugador from './Jugador';
import CrearJugador from './CrearJugador';
export default class Router extends Component {
  render() {
    function ElementEquipoJugadores () {
      let {idEquipo} = useParams()
      return(<Jugadores idEquipo={idEquipo}></Jugadores>)
    }
    function ElementJugador () {
      let {idJugador} = useParams()
      return(<Jugador idJugador={idJugador}></Jugador>)
    }
    return (
      <BrowserRouter>
      <MenuRutas/>
      <Routes>
        <Route path='/equipo/:idEquipo' element={<ElementEquipoJugadores/>}/>
        <Route path='/jugador/:idJugador' element={<ElementJugador/>}/>
        <Route path='/crearJugador' element={<CrearJugador/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
