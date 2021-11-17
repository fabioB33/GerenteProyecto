import React from "react";
import { Link } from "react-router-dom";


const InicioGerente = () => {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Inicio</title>
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="assets/img/avatars/avatar6.png"
        />
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
          <div classname="container-fluid d-flex flex-column p-0">
            <i classname="fa fa-meetup">
              <hr classname="sidebar-divider my-0" />
            </i>
          </div>
          <i classname="fa fa-meetup"></i>
        </div>
      </div>

      <div>
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <div className="">
            <i className="fab fa-meetup fa-10x" />
            <h1
              className="display-4 font-weight-normal"
              style={{ marginTop: "3rem" }}
            >
              MeetApp
            </h1>
          </div>
          <div className="container">
            <h3 className="text-dark">
              <strong>Bienvenido </strong>
            </h3>
          </div>
          <div
            className="container d-flex flex-column align-items-center"
            style={{ color: "black" }}
          >
            <p
              className="text-break text-center"
              style={{ width: "150%", margin: "40px" }}
            >
              Como gerente, MeetApp te permite administrar tus empleados y los
              detalles de tu local gastronómico, todo en un solo lugar.
            </p>
          </div>
          <div className="container d-flex justify-content-center">
            <Link
              className="btn btn-primary"
              role="button"
              style={{ width: "180px", marginRight: "10px" }}
              to="/gestion-empleados"
            >
              Gestionar Empleados
            </Link>

            <Link
              className="btn btn-primary"
              role="button"
              style={{ minWidth: "auto", width: "180px" }}
              to="/gestion-local"
            >
              Gestionar Local
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioGerente;

// var NewComponent = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
//         <title>Blank Page - Brand</title>
//         <link rel="icon" type="image/png" sizes="160x160" href="assets/img/avatars/avatar6.png" />
//         <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
//         <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
//         <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
//         <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css" />
//         <link rel="stylesheet" href="assets/css/untitled.css" />
//         <div id="wrapper">
//           <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
//             <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
//                 <div className="sidebar-brand-icon rotate-n-15"><i className="fa fa-meetup" /></div>
//                 <div className="sidebar-brand-text mx-3"><span className="text-capitalize">MeetApp</span></div>
//               </a>
//               <hr className="sidebar-divider my-0" />
//               <ul className="navbar-nav text-light" id="accordionSidebar">
//                 <li className="nav-item"><a className="nav-link active" href="gerente-inicio.html"><i className="fa fa-home" /><span>Inicio</span></a></li>
//                 <li className="nav-item"><a className="nav-link" href="gerente-empleados.html"><i className="fa fa-user" /><span>Empleados</span></a><a className="nav-link" href="gerente-local.html"><i className="fa fa-shopping-bag" /><span>Local</span></a></li>
//                 <li className="nav-item" />
//                 <li className="nav-item" />
//                 <li className="nav-item" />
//               </ul>
//               <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" /></div>
//             </div>
//           </nav>
//           <div className="d-flex flex-column" id="content-wrapper">
//             <div id="content">
//               <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
//                 <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
//                   <div className="container d-flex justify-content-start" style={{padding: '0px'}}><img style={{height: '60px', marginRight: '0px', opacity: '0.70', marginLeft: 'auto'}} src="assets/img/locales/logo-1112554951-1590506180-1e938c1c172aa731fe6a14a6f09193851590506181-480-0.png" /></div>
//                   <ul className="navbar-nav flex-nowrap ml-auto">
//                     <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
//                       <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
//                         <form className="form-inline mr-auto navbar-search w-100">
//                           <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
//                             <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
//                           </div>
//                         </form>
//                       </div>
//                     </li>
//                     <li className="nav-item dropdown no-arrow mx-1" />
//                     <li className="nav-item dropdown no-arrow mx-1">
//                       <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown" />
//                     </li>
//                     <div className="d-none d-sm-block topbar-divider" />
//                     <li className="nav-item dropdown no-arrow">
//                       <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">José Delgado</span><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar6.png" /></a>
//                         <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Activity log</a>
//                           <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Logout</a>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>
//               <div className="container">
//                 <h3 className="text-dark"><strong>Bienvenido, José</strong></h3>
//               </div>
//               <div className="container d-flex flex-column align-items-center" style={{color: 'black'}}>
//                 <h1 className="d-flex flex-column align-items-center"><i className="fa fa-meetup" style={{fontSize: '100px'}} />MeetApp</h1>
//                 <p className="text-break text-center" 
//style={{width: '40%'}}>Como gerente, MeetApp te permite administrar tus empleados y los detalles básicos de tu local, todo en un solo lugar.</p>
//               </div>
//               <div className="container d-flex justify-content-center"><a className="btn btn-primary" 
//role="button" style={{width: '180px', marginRight: '10px'}} href="gerente-empleados.html">Gestionar empleados</a>
//<a className="btn btn-primary" role="button" style={{minWidth: 'auto', width: '180px'}} href="gerente-local.html">Gestionar local</a></div>
//             </div>
//             <footer className="text-left bg-white sticky-footer">
//               <div className="container my-auto">
//                 <div className="text-center my-auto copyright"><span>Copyright © MeetApp 2021</span></div>
//               </div>
//             </footer>
//           </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
//         </div>
//       </div>
//     );
//   }
// });
