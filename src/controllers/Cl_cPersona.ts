// INGRESOS PERSONAS
// Dado el nombre, el ingreso y el tipo de trabajo (0=Remoto, 1=Presencial) de varias personas.
// Determinar e imprimir:
//   Ra- El monto del ingreso menor.
//   Rb- El ingreso promedio.
//   Rc- El nombre de la persona con el mayor ingreso.
//   Rd- El porcentaje de personas con ingresos mayores a $500.
//   Re- El tipo de trabajo predominante (Remoto / Presencial / Empate).
//
// Datos de prueba: (nombre, ingreso, tipo)
//   (Mary, 150, 0), (José, 135, 1), (Carlos, 160, 0), (Pedro, 75, 1)
//
// Ejemplo de salida:
//   Monto del ingreso menor: 75$
//   Ingreso promedio: 130$
//   Nombre de la persona con mayor ingreso: Carlos
//   Porcentaje de personas con ingresos mayores a $500: 0%
//   Tipo de trabajo predominante: Ambas modalidades de trabajo presentan una equivalencia

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
        tipo: this.vista.tipo,
      }),
    );
    this.vista.ocultar();
  }
}
