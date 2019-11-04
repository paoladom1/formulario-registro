import React from "react";
import styles from "./RegisterForm.module.scss";

const RegisterForm = props => {
  return (
    <form>
      <div
        className={`columns is-centered is-vcentered is-half ${styles.container}`}
      >
        <div className="column">
          <h1 className="title is-2">Registro de laboratorio</h1>
          <div className="field">
            <label className="label">Ingrese el carnet:</label>
            <input
              name="carnet"
              className="input"
              type="text"
              placeholder="carnet"
              onChange={props.handleChange}
              value={props.data.carnet}
            />
          </div>

          <div className="field">
            <label className="label">Seleccione el horario:</label>
            <div className="control">
              <div className="select">
                <select
                  name="schedule"
                  value={props.data.schedule}
                  onChange={props.handleChange}
                >
                  <option value="Lunes de 9:00 a 11.00">Lunes de 9:00 a 11.00</option>
                  <option value="Martes de 13:30 a 15:30">Martes de 13:30 a 15:30</option>
                  <option value="Miércoles de 9:00 a 11.00">Miércoles de 9:00 a 11.00</option>
                  <option value="Jueves de 13:30 a 15:30">Jueves de 13:30 a 15:30</option>
                  <option value="Viernes de 9:00 a 11.00">Viernes de 9:00 a 11.00</option>
                  <option value="Viernes de 15:30 a 17:30">Viernes de 15:30 a 17:30</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <input
              id="switchRtlExample"
              name="switchRtlExample"
              type="checkbox"
              className="switch is-rounded"
            />
            <label htmlFor="switchRtlExample" className="label">
              Llegó tarde?
            </label>
          </div>

          <div className="field">
            <div className="control">
              <button
                className="button is-primary"
                onClick={props.handleSubmit}
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;