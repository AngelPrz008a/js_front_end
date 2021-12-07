import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";


//function
class TiendaDetalle extends React.Component {

    constructor( props ){
        super( props )
    }

    actualizar(event){
        event.preventDefault();

        const url = 'http://localhost:4000/TiendaCompra/actualiza/'+this.props.detalle._id
        axios.put(url, {
            nombre: this.refs.nombre.value,
            precio: this.refs.precio.value,
            cantidad: this.refs.cantidad.value,
            estado: this.refs.estado.value,
        })
        .then(  window.location.replace(window.location.href)  )
        .catch( error => console.log(error) )


    }

    eliminar(event){
        event.preventDefault();

        const url = 'http://localhost:4000/TiendaCompra/eliminar/'+this.props.detalle._id
        axios.delete(url)
        .then(  window.location.replace(window.location.href)  )
        .catch(error => console.log(error))


    }   

    render(){
    return (
        <>
        <form onSubmit={this.actualizar.bind(this) }>
                    
            <input type="text" ref="nombre" name="nombre" placeholder={this.props.detalle.nombre} />
            <input type="text" ref="precio" name="precio"  placeholder={ this.props.detalle.precio } />
            <input type="text" ref="cantidad" name="cantidad"  placeholder={ this.props.detalle.cantidad } />
            <input type="text" ref="estado" name="estado"  placeholder={ this.props.detalle.estado } />


            <button class="waves-effect yellow lighten-2 btn" type="submit">
                <i class="material-icons">edit</i>
            </button>
        </form>

        <form onSubmit={ this.eliminar.bind(this) }>
            <button class="waves-effect red lighten-2 btn" type="submit">
                <i class="material-icons">delete</i>
            </button>
        </form>


        </>
    )
    }
}


export default TiendaDetalle;