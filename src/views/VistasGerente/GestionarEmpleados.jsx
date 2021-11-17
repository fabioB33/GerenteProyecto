
import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const empleados = [
  {
    Nombre: "Reinaldo",
    Apellido: "Flieta",
    CorreoElectrónico: "reinaldoflieta@gmail.com",
    NumeroCelular: 3623305906,
  },
  {
    Nombre: "Faldo",
    Apellido: "Reina",
    CorreoElectrónico: "freina@gmail.com",
    NumeroCelular: 3623345906,
  },
  {
    Nombre: "Carlos",
    Apellido: "Fletarro",
    CorreoElectrónico: "cafle@gmail.com",
    NumeroCelular: 3623303216,
  },
  {
    Nombre: "Aldo",
    Apellido: "Etal",
    CorreoElectrónico: "tael@gmail.com",
    NumeroCelular: 36209803216,
  },
];

// function useLocalSto(itemName, initialValue) {
//   const localStEm = localStorage.getItem(itemName);
//   let parsedEmp;

//   if (!localStEm) {
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     parsedEmp = initialValue;
//   } else {
//     parsedEmp = JSON.parse(localStEm);
//   }

//   const [itemValue, setItemValue] = React.useState(parsedEmp);

//   const saveItem = (empleados) => {
//     const empStrin = JSON.stringify(empleados);
//     localStorage.setItem(itemName, empStrin);
//     setItemValue(empleados);
//   };

//   return [itemValue, saveItem];
// }

function GestionarEmpleados() {
  const [empValue, setEmpValue] = React.useState(empleados);
  const [modalEditar, setModalEditar] = React.useState(false);
  const [modalEliminar, setModalEliminar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);

  const [empleadoSeleccionado, setEmpleadoSeleccionado] = React.useState({
    Nombre: " ",
    Apellido: " ",
    CorreoElectrónico: " ",
    NumeroCelular: " ",
  });

  const seleccionEmpleado = (elemento, caso) => {
    setEmpleadoSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  //useLocalSto(emplea, []);

  //React.useState(emplea) empezar de nuevo con los empleados

  //

  // const AddEmp = (Emp) => {
  //   const empNew = [...empValue];
  //   empNew.push(Emp)
  //   useLocalSto.saveItem(empNew);
  // }

  // const saveEmp = (empleados) => {
  //   const empStrin = JSON.stringify(empleados);
  //   localStorage.setItem("Empleados_V1", empStrin);
  //   setEmpValue(empleados);
  // };

  // const DeleteEmp = (text) => {
  //   const newEmp = [...empValue];
  //   const empIndex = empValue.findIndex((emp) => emp.Nombre === text);
  //   newEmp.splice(empIndex, 1);
  //   useLocalSto.saveItem(newEmp);
  // };

  const onChange = (event) => {
    const { name, value } = event.target;
    setEmpleadoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(empleadoSeleccionado);
  };

  const editar = () => {
    var dataNueva = empValue;
    dataNueva.map((emp) => {
      if (emp.Apellido === empleadoSeleccionado.Apellido) {
        emp.Nombre = empleadoSeleccionado.Nombre;
        emp.CorreoElectrónico = empleadoSeleccionado.CorreoElectrónico;
        emp.NumeroCelular = empleadoSeleccionado.NumeroCelular;
      }
    });
    setEmpValue(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setEmpValue(
      empValue.filter((emp) => emp.Apellido !== empleadoSeleccionado.Apellido)
    );
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setEmpleadoSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar= () => {
    var valorInsertar= empleadoSeleccionado;
    var dataNueva = empValue;
    dataNueva.push(valorInsertar)
    setEmpValue(dataNueva)
    setModalInsertar(false)
  }



  return (
    <div id="wrapper">
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <div className="container">
            <h3 className="text-dark">
              <strong>Empleados</strong>
            </h3>
          </div>
          <div className="container">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo electrónico</th>
                    <th>Numero de Celular</th>
                  </tr>
                </thead>
                <tbody>
                  {empValue.map((em) => (
                    <tr>
                      <td>{em.Nombre}</td>
                      <td>{em.Apellido}</td>
                      <td>{em.CorreoElectrónico}</td>
                      <td>{em.NumeroCelular} </td>
                      <td className="d-flex flex-column align-items-start">
                        <button
                          className="btn btn-warning btn-sm"
                          type="button"
                          style={{ width: "85px", marginBottom: "3px" }}
                          onClick={() => seleccionEmpleado(em, "Editar")}
                        >
                          <i className="fa fa-edit" />
                          &nbsp;Editar
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          type="button"
                          style={{ width: "85px" }}
                          onClick={() => seleccionEmpleado(em, "Eliminar")}
                        >
                          <i className="fa fa-trash-o" />
                          &nbsp;Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal isOpen={modalEditar}>
              <ModalHeader>
                <div>
                  <h3>Editar Empleado</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Nombre"
                    value={empleadoSeleccionado && empleadoSeleccionado.Nombre}
                    onChange={onChange}
                  />
                  <br />

                  <label>Apellido</label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="Apellido"
                    value={
                      empleadoSeleccionado && empleadoSeleccionado.Apellido
                    }
                    onChange={onChange}
                  />
                  <br />

                  <label>Correo Electrónico</label>
                  <input
                    className="form-control"
                    type="email"
                    name="CorreoElectrónico"
                    value={
                      empleadoSeleccionado &&
                      empleadoSeleccionado.CorreoElectrónico
                    }
                    onChange={onChange}
                  />
                  <br />
                  <label>Numero de Celular</label>
                  <input
                    className="form-control"
                    type="number"
                    name="NumeroCelular"
                    value={
                      empleadoSeleccionado && empleadoSeleccionado.NumeroCelular
                    }
                    onChange={onChange}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={() => editar()}>
                  Actualizar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setModalEditar(false)}
                >
                  Cancelar
                </button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
              <ModalBody>
                Estás Seguro que deseas eliminar al empleado
                {empleadoSeleccionado &&
                  empleadoSeleccionado.Nombre +
                    " " +
                    empleadoSeleccionado.Apellido}
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={() => eliminar()}>
                  Sí
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setModalEliminar(false)}
                >
                  No
                </button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={modalInsertar}>
              <ModalHeader>
                <div>
                  <h3>Insertar Empleado</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Nombre"
                    value={empleadoSeleccionado && empleadoSeleccionado.Nombre}
                    onChange={onChange}
                    // value={data[data.length-1].id+1}
                  />
                  <br />

                  <label>Apellido</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Apellido"
                    value={
                      empleadoSeleccionado ? empleadoSeleccionado.Apellido : " "
                    }
                    onChange={onChange}
                  />
                  <br />

                  <label>Correo Electrónico</label>
                  <input
                    className="form-control"
                    type="email"
                    name="CorreoElectrónico"
                    value={
                      empleadoSeleccionado
                        ? empleadoSeleccionado.CorreoElectrónico
                        : ""
                    }
                    onChange={onChange}
                    // value={paisSeleccionado ? paisSeleccionado.minutos: ''}
                    // onChange={handleChange}
                  />
                  <br />
                  <label>Numero de Celular</label>
                  <input
                    className="form-control"
                    type="number"
                    name="NumeroCelular"
                    value={
                      empleadoSeleccionado
                        ? empleadoSeleccionado.NumeroCelular
                        : ""
                    }
                    onChange={onChange}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={() => insertar()}>
                  Insertar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setModalInsertar(false)}
                >
                  Cancelar
                </button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="container d-flex justify-content-center">
            <button className="btn btn-primary" onClick={()=> abrirModalInsertar()}
            >Agregar Empleado</button>
          </div>
        </div>
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
}

export default GestionarEmpleados;
