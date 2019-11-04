import React from "react";

const ScheduleTable = props => {
  return (
    <table className="table is-striped is-fullwidth" style={{marginTop: "50px"}}>
      <thead>
        <tr>
          <th>Carnet</th>
          <th>Horario de Laboratorio</th>
          <th>Hora de ingreso</th>
          <th>Tarde?</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {props.registers.map((register, i) => {
          return (
            <tr key={i}>
              <td>{register.carnet}</td>
              <td>{register.schedule}</td>
              <td>{register.entryTime.toUTCString()}</td>
              <td>tarde</td>
              <td>boton</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ScheduleTable;