import Cl_mIngreso from "../models/Cl_mIngreso.js";

export default class Cl_vIngreso {
  lblPromedio: HTMLLabelElement;
  lblMenor: HTMLLabelElement;
  lblContPersonas: HTMLLabelElement;
  btNuevoIngreso: HTMLButtonElement;

  constructor() {
    this.btNuevoIngreso = document.getElementById(
      "body_btNuevoIngreso",
    ) as HTMLButtonElement;
    this.lblPromedio = document.getElementById(
      "body_lblPromedio",
    ) as HTMLLabelElement;
    this.lblMenor = document.getElementById(
      "body_lblMenor",
    ) as HTMLLabelElement;
    this.lblContPersonas = document.getElementById(
      "body_lblContPersonas",
    ) as HTMLLabelElement;
  }

  reportar({ ingreso }: { ingreso: Cl_mIngreso }): void {
    this.lblPromedio.innerHTML = `${ingreso.promedioIngresos}`;
    this.lblMenor.innerHTML = `${ingreso.menorIngreso}`;
    this.lblContPersonas.innerHTML = `${ingreso.contPersonas}`;
  }
}
