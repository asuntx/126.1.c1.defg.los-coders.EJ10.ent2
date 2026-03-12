import Cl_mIngreso from "../models/Cl_mIngreso.js";
import Cl_vIngreso from "../views/Cl_vIngreso.js";
import Cl_cPersona from "./Cl_cPersona.js";

export default class Cl_cIngreso {
  private mIngreso: Cl_mIngreso = new Cl_mIngreso();
  private vIngreso: Cl_vIngreso = new Cl_vIngreso();

  constructor() {
    this.vIngreso.btNuevoIngreso.onclick = () => this.procesarPersona();
  }

  procesarPersona(): void {
    new Cl_cPersona({
      callback: (persona) => {
        if (persona) {
          this.mIngreso.procesarPersona(persona);
          this.vIngreso.reportar({ ingreso: this.mIngreso });
        }
      },
    });
  }
}
