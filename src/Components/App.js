import React from "react";
import './App.css';
import axios from 'axios';
import TiendaLista from './Tienda/TiendaLista';
import TiendaForm from './Tienda/TiendaForm';
import TiendaDetalle from "./Tienda/TiendaDetalle";

class App extends React.Component{

  constructor( props ){
    super( props )
    this.state = {
      tienda : [],
      tiendaActual : {}
    }
    this.actualizarActual = this.actualizarActual.bind(this)
  }


  //lista
  componentDidMount(){
    const url = 'http://localhost:4000/TiendaCompra/lista'
    axios.get( url )
    .then( (respuesta) =>{
      //ACTUALIZAR
      this.setState({
        tienda: respuesta.data  
      })
    })
    .catch( (error) => { console.log(error) } )

  }


  //traer datos de un solo elemento
  actualizarActual( tienda ){
    this.setState(
      {
        tiendaActual:tienda
      }
    )
  }


  eliminarAll(){
    const url = 'http://localhost:4000/TiendaCompra/eliminar'
    axios.delete(url)
    .then( res =>{
      
    } )
    .catch(error => console.log(error))
  }



  render(){
    return (
<>
      <nav>
        <div class="nav-wrapper">
          <a class="brand-logo center">Vamos de Compras</a>
        </div>
      </nav>



      <div class="row">
        <div class="col s4">
          <ul class="collection with-header">
            <li class="collection-header">
              <h5>Productos</h5>
            </li>
              < TiendaLista 
                      lista = { this.state.tienda }
                      actualizaActual = { this.actualizarActual }
              />
            
            <li class="collection-item">
              <form onSubmit={ this.eliminarAll.bind() } > 
                <button class="waves-effect red lighten-2 btn" type="submit">
                    <i class="material-icons">delete</i>
                </button>
              </form>

              <form onSubmit={ window.location.replace('localhost:3000') } > 
                <button class="waves-effect green lighten-2 btn" type="submit">
                    <i class="material-icons">cached</i>
                </button>
              </form>
            </li>
          </ul>
        </div>
            
          <div className="col s4">
            <TiendaDetalle 
              detalle = { this.state.tiendaActual }
            />
          </div>

          <div className="col s4">
              <TiendaForm 
              />
          </div>
      </div>


</>
    );
  }
}

export default App;
