import React from "react";

const TiendaLista = ( props ) => {
    return (
        <>
        <ul className="collection">
        {
            props.lista.map( (element) => {
                return (
                    <>

                    <li class="collection-item"
                    key={ element._id }
                    >
                        <div>

                            {element.nombre}

                            <a type='submit' class="secondary-content"
                            onClick={ props.actualizaActual.bind( this, element )}
                            >
                                <i class="material-icons right">send</i>
                            </a>

                        </div>
                    </li>
    
                    </>
                )
            } )
        }
           
        </ul>
        </>
    )
}

export default TiendaLista;