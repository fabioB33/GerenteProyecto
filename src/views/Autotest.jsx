import React from 'react';

const Autotest = () => {
    return (
        <>
            <div className="container container-fluid">
                <h3 className="text-dark mb-4"><b>Autotest</b></h3>
            </div>

            <div className="container container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="text-primary m-0 font-weight-bold">Información de la reserva</h6>
                    </div>
                    <div className="card-body">
                        <p style={{marginBottom: '0px'}}>
                            <b>Número de reserva:</b> 1 <br/>
                        </p>
                        <p style={{marginBottom: '0px'}}><b>Reservó:</b> Noelia González<br /></p>
                        <p style={{marginBottom: '0px'}}><b>Hora:</b> 22:00<br /></p>
                        <p style={{marginBottom: '0px'}}><b>Número de mesa/s:</b> 3<br /></p>
                        <p style={{marginBottom: '0px'}}><b>Acompañantes:</b> 2<br /></p>
                    </div>
                </div>
            </div>

            <div className="container container-fluid">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="text-primary m-0 font-weight-bold">Preguntas</h6>
                    </div>
                    <div className="card-body ml-4">
                        <form>
                            <div className="form-group row ">
                                <label for="comensalname" className='col-sm-1 col-form-label'>
                                    Nombre
                                </label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="comensalname" />
                                </div>
                            
                                <label for="comensalname" className='col-sm-1 col-form-label'>
                                    Apellido
                                </label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="comensalname" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>
                                    <b>1)</b> ¿Tuviste contacto estrecho con algún paciente con Coronavirus confirmado (conviviente o compañero/a de trabajo)?
                                </label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio1" name="radio1" />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} htmlFor="radio1">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio2" name="radio1" style={{marginLeft: '20px'}} />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} for="radio2">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>
                                    <b>2)</b> ¿Tuviste estrecho con alguna persona que viajó al exterior o al menos a una de las zonas de transmisión comunitaria en los últimos 14 días?
                                </label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input  className="custom-control-input" type="radio" id="radio3" name="radio2" />
                                    <label className="custom-control-label" id="radio2" style={{marginLeft: '5px'}} htmlFor="radio3">
                                        No
                                    </label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input  className="custom-control-input" type="radio" id="radio4" name="radio2" style={{marginLeft: '20px'}} />
                                    <label className="custom-control-label" id="radio2" style={{marginLeft: '5px'}} for="radio4">
                                        Si
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>
                                    <b>3)</b> ¿Tenés fiebre (37.5° o más)?
                                </label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio5" name="radio3" />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} htmlFor="radio5">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio6" name="radio3" style={{marginLeft: '20px'}} />
                                    <label className="custom-control-label"  style={{marginLeft: '5px'}} for="radio6">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>4)</b> ¿Tenés sensación de falta de aire?</label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio7" name="radio4" />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} htmlFor="radio7">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input  className="custom-control-input"type="radio" id="radio8" name="radio4" style={{marginLeft: '20px'}} />
                                    <label  className="custom-control-label"style={{marginLeft: '5px'}} for="radio8">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>5)</b> ¿Tenés tos?</label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio9" name="radio5" />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} htmlFor="radio9">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio10" name="radio5" style={{marginLeft: '20px'}}/>
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} for="radio10">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>6)</b> ¿Tenés dolor de garganta?</label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio11" name="radio6" />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} htmlFor="radio11">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio12" name="radio6" style={{marginLeft: '20px'}} />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} for="radio12">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>7)</b> ¿Tenés diarrea?</label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio13" name="radio7" />
                                    <label className="custom-control-label"  style={{marginLeft: '5px'}} htmlFor="radio13">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio14" name="radio7" style={{marginLeft: '20px'}}/>
                                    <label  className="custom-control-label"style={{marginLeft: '5px'}} for="radio14">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>8)</b> ¿Tenés enfermedades crónicas? Ej: Diabetes, Hipertención, Enfermedades Renales u Otras.</label> 
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input  className="custom-control-input" type="radio" id="radio15" name="radio8" />
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} htmlFor="radio15">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio16" name="radio8" style={{marginLeft: '20px'}}/>
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} for="radio16">Si</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>9)</b> ¿Sufriste alteración del gusto y/u olfato?</label>
                                <br/>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input className="custom-control-input" type="radio" id="radio17" name="radio9" />
                                    <label className="custom-control-label"  style={{marginLeft: '5px'}} htmlFor="radio17">No</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" id="radio18" name="radio9" style={{marginLeft: '20px'}}/>
                                    <label className="custom-control-label" style={{marginLeft: '5px'}} for="radio18">Si</label>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit" style={{marginLeft: '0px'}} data-toggle="tooltip" data-placement="top" title="enviar"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Autotest;
