import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";
import { useHistory } from 'react-router';
const LineaDeMisReservas = ({id,nombre,piso, direccion, fecha, hora, estado,cantidadReservada, autotest=false}) => {
    let history=useHistory()
    const MySwal = withReactContent(Swal);
    const detallesModal=_=>
        MySwal.fire(
            {
                title: `<strong>Reserva para <u>${nombre}</u></strong>`,
                icon: 'info',
                html:
                `<b>Dirección: </b>${direccion} <b>piso: </b>${piso}<br>`+
                `<b>fecha:</b> ${fecha} <strong>hora: </strong> ${hora}<br>`+ 
                `<b> estado: </b> ${estado} <b> cantidad reservada: </b> ${cantidadReservada}<br>` +
                `<a href="//sweetalert2.github.io">links</a> ` +
                'and other HTML tags',
                showCloseButton: true,
                focusConfirm: true,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> entendido',
                confirmButtonAriaLabel: 'entendido',
                
            }
        )
    const cancelarReserva=_=>{
        const swalWithBootstrapButtons = Swal.mixin(
            {
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            }
          );
         
        swalWithBootstrapButtons.fire(
            {
                title: `¿Está seguro que desea anular la reserva para ${nombre}?`,
                html: 
                `fecha: ${fecha}, hora: ${hora}, con ${cantidadReservada}  acompañantes`+
                `<br/><b> esta operación anula la reserva de manera definitiva</b>`,
                icon: 'warning',
                allowOutsideClick: false,
                showCancelButton: true,
                cancelButtonText: '<i class="fas fa-times"></i> Cancelar',
                confirmButtonText: '<i class="fas fa-check"></i> Confirmar',
                reverseButtons: false
            }
        )
        .then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/api/reservas/${id}`
                ).then(res => {
                        swalWithBootstrapButtons.fire(
                            {
                            title: `Reserva para ir a ${nombre} eliminada`,
                            text: `tu reserva para el ${fecha}, a la  hora: ${hora} ha sido eliminada`,
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonText: '<i class="fas fa-check"></i> Confirmar',
                            reverseButtons: false,
                            }
                        );
                        history.push('/mis-reservas');
                    }
                ).catch(e =>console.log(e))
            }
        })

    }
    return (
        <>
            <tr>
                <td>
                    {nombre}
                </td>
                <td>
                    {fecha}
                <br />
                </td>
                <td>
                    {hora}
                </td>
                <td>
                    {estado}
                </td>
                <td>
                    <button 
                        title={`ver más datos de la reserva para el local ${nombre}`}  
                        className={autotest? "btn btn-sm btn-secondary" :"btn btn-sm btn-secondary disabled"} 
                        type="button"
                        onClick={detallesModal}
                    >
                        <span className="icon text-white-50">
                            <i className="fas fa-calendar-week"/>
                        </span>
                        <span className="text"> Detalles</span>
                    </button>
                </td>
                <td>
                    <button 
                        title={`completar el autotest para el local ${nombre}`} 
                        className={autotest? "btn btn-sm btn-info" :"btn btn-sm btn-info disabled"} 
                        type="button"
                        onClick={e=>alert("djhdjh")}
                        disabled={!autotest}
                    >
                        <span className="icon text-white-50">
                            <i className="fas fa-clipboard-list"/>
                        </span>
                        <span className="text"> {autotest? " Completar" :"Completado"}</span>
                    </button>
                </td>
                <td>
                    <button     
                        title={`cancela la reserva para el local ${nombre}`} 
                        className="btn btn-sm btn-danger" 
                        type="button"
                        onClick={cancelarReserva}
                    >
                        <span className="icon text-white-50">
                            <i className="fas fa-trash"/>
                        </span>
                        <span className="text"> Anular</span>
                    </button>
                </td>
            </tr>   
        </>
    )
}

export default LineaDeMisReservas

