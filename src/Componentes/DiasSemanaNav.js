import React from 'react';

const DiasSemanaNav = () => {
  return (
    <div className="horarios-semana">
      <h1>Horarios de la semana</h1>
        <div className='dias-semana'>
            <div className='dia'>
            <h6>Lunes:</h6>
            <button type="button" className="hora btn btn-sm btn-outline-secondary">10:00 AM</button>
            <button type="button" className="hora btn btn-sm btn-outline-secondary">12:30 PM</button>
            <button type="button" className="hora btn btn-sm btn-outline-secondary">3:00 PM</button>
            </div>
            <div className='dia'>
                <h6>Martes:</h6>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">9:00 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">11:30 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">2:30 PM</button>
            </div>
            <div className='dia'>
                <h6>Miércoles:</h6>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">10:30 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">1:00 PM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">4:00 PM</button>
            </div>
            <div className='dia'>          
                <h6>Jueves:</h6>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">8:45 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">12:00 PM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">3:15 PM</button>
            </div>
            <div className='dia'>
                <h6>Viernes:</h6>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">11:00 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">1:45 PM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">4:30 PM</button>
            </div>
            <div className='dia'>
                <h6>Sábado:</h6>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">9:30 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">12:15 PM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">3:45 PM</button>
            </div>
            <div className='dia'>
                <h6>Domingo:</h6>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">10:45 AM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">2:00 PM</button>
                <button type="button" className="hora btn btn-sm btn-outline-secondary">5:15 PM</button>
            </div>
        </div>
    </div>
    );
};

export default DiasSemanaNav;
