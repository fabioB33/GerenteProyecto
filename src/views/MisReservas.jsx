import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import LineaDeMisReservas from "./LineaDeMisReservas";
import Loading from "../layout/Loading";
import { useAuth0 } from "@auth0/auth0-react";

const MisReservas = () => {
  const { user } = useAuth0();
  const {email } = user;
  const comensaleId= email;
  const history= useHistory();
  //=================
  const [search, setSearch] = useState("");
  const [reservas, setReservas] = useState( 
    {
      reservas: [], 
      status: false
    })

    //{ "id":uniqid(), "nombre":local,
        // "estado": "Pendiente",
        // "fecha":fecha,
        // "hora":hora,
        // "autotest":false }
  const cargarReservas = () => {
    var url = `http://localhost:5000/api/reservas/${comensaleId}`;
    axios.get(url).then(res => {
        setReservas({
          reservas: res.data,
          status: true
        });
    });
  }
  useEffect (() => {
    cargarReservas();
  }, []);
  console.log(reservas.reservas)

  const reservasFiltradas = reservas.reservas.filter((reserva) =>
    reserva.local.toLowerCase().includes(search.toLowerCase())|
    reserva.fecha.toLowerCase().includes(search.toLowerCase())|
    reserva.hora.toLowerCase().includes(search.toLowerCase())|
    reserva.estado.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">
        <strong>Mis Reservas</strong>
      </h3>
      {!reservas.status?
      <Loading/>
      :
        reservas.reservas.length===0?
        <div className="alert alert-info" role="alert">
          <span className="text-center d-flex justify-content-xl-center align-items-xl-start">
            <strong>Usted no registra reservas</strong>
          </span>
          <button
            title="ir a realizar una reserva"
            className="btn btn-primary text-center d-flex mx-auto justify-content-xl-center align-items-xl-center"
            type="button"
            onClick={e=>history.push('/reservar')}
            style={{ marginTop: "5px", marginNottom: "5px" }}
          >
            <i className="fas fa-arrow-right"/>
            &nbsp; Reservar
          </button>
        </div>
        :
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 text-nowrap">
                <div
                  id="dataTable_length"
                  className="dataTables_length"
                  aria-controls="dataTable"
                >
                  <label>
                    Mostrar 
                    <select
                      className="form-control form-control-sm custom-select custom-select-sm"
                      defaultValue={10}
                    >
                      <option value="10">10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="text-md-right dataTables_filter"
                  id="dataTable_filter"
                >
                  <label>
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      aria-controls="dataTable"
                      placeholder="🔎 Buscar en reservas"
                      autoFocus
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div
              className="table-responsive table mt-2"
              id="dataTable"
              role="grid"
              aria-describedby="dataTable_info"
            >
              <table className="table my-0" id="dataTable">
                <thead>
                  <tr>
                    <th>Local</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Estado</th>
                    <th>Detalles</th>
                    <th>Auto-test</th>
                    <th>Anular</th>
                  </tr>
                </thead>
                <tbody>
                  {reservasFiltradas.map((reserva) => (
                    <LineaDeMisReservas
                      key={reserva.id}
                      id={reserva.id}
                      nombre={reserva.local}
                      direccion={reserva.direccion}
                      piso={reserva.piso}
                      fecha={reserva.fecha}
                      hora={reserva.hora}
                      estado={reserva.estado}
                      cantidadReservada={reserva.cantidadReservada}
                      autotest={false}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p
                  id="dataTable_info"
                  className="dataTables_info"
                  role="status"
                  aria-live="polite"
                >
                  {reservasFiltradas.length !== 0
                    ? `Mostrando 1 a ${reservasFiltradas.length} de 1`
                    : "No hay resultados"}
                  <br />
                </p>
              </div>
              <div className="col-md-6">
                <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <Link
                        className="page-link"
                        to="/mis-reservas"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="/mis-reservas">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="/mis-reservas"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MisReservas;


