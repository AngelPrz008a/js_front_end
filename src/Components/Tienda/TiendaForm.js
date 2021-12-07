import React from "react";
import axios from 'axios';
import App from "../App";

class TiendaForm extends React.Component{

    constructor( props ){
        super( props )
        this.state = {  }
    }



    crear(event){
        event.preventDefault();

        const url = 'http://localhost:4000/TiendaCompra/crear'
        axios.post(url, {
            nombre: this.refs.nombre.value,
            precio: this.refs.precio.value,
            cantidad:this.refs.cantidad.value,
            estado: this.refs.estado.value
        })
        .then( 
            window.location.replace(window.location.href) 
         )
        .catch( (error)=>{
            console.log( error )
        } )

    }

    render(){
        return (
            <>
            
                <form onSubmit={this.crear.bind(this)} >
                    
                    <input type="text" name="nombre" ref="nombre" placeholder="Nombre" />
                    <input type="text" name="precio" ref="precio" placeholder='Precio' />
                    <input type="text" name="cantidad"  ref="cantidad" placeholder="Cantidad" />
                    <input type="text" name="estado" ref="estado" placeholder="Estado" />


                    <button class="waves-effect green lighten-2 btn" type="submit">
                    <i class="material-icons">add</i>
                    </button>
                    
                </form>

            </>
        )
    }
}

export default TiendaForm;