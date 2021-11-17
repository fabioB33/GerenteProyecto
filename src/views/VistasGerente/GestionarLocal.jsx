import React from "react";

function GestionarLocal() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Blank Page - Brand</title>

      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
      />
      <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
      <link
        rel="stylesheet"
        href="assets/fonts/fontawesome5-overrides.min.css"
      />
      <link rel="stylesheet" href="assets/css/untitled.css" />
      <div id="wrapper">
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid">
                <button
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  id="sidebarToggleTop"
                  type="button"
                >
                  <i className="fas fa-bars" />
                </button>
              </div>
            </nav>
            <div className="container">
              <h3 className="text-dark">
                <strong>Local</strong>
              </h3>
            </div>
            <div className="container">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="text-primary m-0 font-weight-bold">
                    Aforo permitido actualmente (%)
                  </h6>
                </div>
                <div className="card-body">
                  <input
                    type="number"
                    style={{ width: "80px" }}
                    defaultValue={100}
                    disabled
                    readOnly
                  />
                </div>
              </div>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="text-primary m-0 font-weight-bold">
                    Autotest
                  </h6>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-1"
                      disabled
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="formCheck-1">
                      Obligatorio
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="text-primary m-0 font-weight-bold">Mesas</h6>
                </div>
                <div className="card-body">
                  <table className="table table-borderless ">
                    <tbody>
                      <tr>
                        <th />
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md disabled"
                            style={{ backgroundColor: "#4e72dfb9" }}
                          >
                            <input type="checkbox" defaultChecked disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md disabled"
                            style={{ backgroundColor: "#4e72dfb9" }}
                          >
                            <input type="checkbox" defaultChecked disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md disabled"
                            style={{ backgroundColor: "#4e72dfb9" }}
                          >
                            <input type="checkbox" defaultChecked disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                        <td>
                          <label
                            className="btn btn-md"
                            style={{
                              backgroundColor: "#4e73df",
                              pointerEvents: "none",
                            }}
                          >
                            <input type="checkbox" disabled />
                            <font color="black" size={4}>
                              <strong>05</strong>
                            </font>
                            <img
                              src="mesa.svg"
                              style={{ width: "55px", height: "30px" }}
                            />
                            <br />
                            <strong>
                              <font style={{ color: "black" }}>5 asientos</font>
                            </strong>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="container d-flex justify-content-center"
              style={{ marginBottom: "24px" }}
            >
              <a
                className="btn btn-primary"
                role="button"
                href="gerente-local-editar.html"
              >
                Editar
              </a>
            </div>
          </div>
          <footer className="text-left bg-white sticky-footer">
            <div className="container my-auto">
              <div className="text-center my-auto copyright">
                <span>Copyright © MeetApp 2021</span>
              </div>
            </div>
          </footer>
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </div>
  );
}

export default GestionarLocal;
