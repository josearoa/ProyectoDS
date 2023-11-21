import React from 'react';

const DiasSemanaNav = () => {
    return (
        <div>
            <h1 className="text-center">Horarios de la semana</h1>
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className="col-lg-1">
                    <div>
                        <h5>Lunes:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">10:00 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">12:30 PM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">3:00 PM</button>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div>
                        <h5>Martes:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">9:00 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">11:30 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">2:30 PM</button>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div>
                        <h5>Miércoles:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">10:30 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">1:00 PM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">4:00 PM</button>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div>
                        <h5>Jueves:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">8:45 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">12:00 PM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">3:15 PM</button>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div>
                        <h5>Viernes:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">11:00 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">1:45 PM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">4:30 PM</button>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div>
                        <h5>Sábado:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">9:30 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">12:15 PM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">3:45 PM</button>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div>
                        <h5>Domingo:</h5>
                        <button type="button" className="btn btn-sm btn-outline-secondary">10:45 AM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">2:00 PM</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">5:15 PM</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiasSemanaNav;

