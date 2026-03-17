// INGRESOS PERSONAS
// Dado el nombre y el ingreso de varias personas.
//  Determinar e imprimir: el monto del ingreso menor y el ingreso promedio.
// Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
// (José, 135), (Carlos, 160), (Pedro, 75)
// Monto del ingreso menor: 75$
// Ingreso promedio: 130$

import Cl_mPersona from "../models/Cl_mPersona.js";
import vista from "../views/Cl_vPersona.js";

export default class Cl_cPersona {
  private vista = new vista();
  callback: (persona: Cl_mPersona | null) => void;

  constructor({
    callback,
  }: {
    callback: (persona: Cl_mPersona | null) => void;
  }) {
    this.callback = callback;
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
  }

  btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  btAceptarOnClick() {
    this.callback(
      new Cl_mPersona({
        nombre: this.vista.nombre,
        ingreso: this.vista.ingreso,
        cedula: this.vista.cedula,
      }),
    );
    this.vista.ocultar();
  }
}
