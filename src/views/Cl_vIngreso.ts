import Cl_mIngreso from "../models/Cl_mIngreso.js";

export default class Cl_vIngreso {
  lblPromedio: HTMLLabelElement;
  lblMenor: HTMLLabelElement;
  lblMayor: HTMLLabelElement;
  lblPorcentajeIngAltos: HTMLLabelElement;
  lblTipoPredominante: HTMLLabelElement;
  btNuevoIngreso: HTMLButtonElement;

  constructor() {
    this.lblPromedio = document.getElementById(
      "body_lblPromedio",
    ) as HTMLLabelElement;
    this.lblMenor = document.getElementById(
      "body_lblMenor",
    ) as HTMLLabelElement;
    this.lblMayor = document.getElementById(
      "body_lblMayor",
    ) as HTMLLabelElement;
    this.lblPorcentajeIngAltos = document.getElementById(
      "body_lblPorcentajeIngAltos",
    ) as HTMLLabelElement;
    this.lblTipoPredominante = document.getElementById(
      "body_lblTipoPredominante",
    ) as HTMLLabelElement;
    this.btNuevoIngreso = document.getElementById(
      "body_btNuevoIngreso",
    ) as HTMLButtonElement;
  }

  reportar({ ingreso }: { ingreso: Cl_mIngreso }): void {
    this.lblPromedio!.innerHTML = `${ingreso.ingresoPromedio}`;
    this.lblMenor!.innerHTML = `${ingreso.ingresoMenor}`;
    this.lblMayor!.innerHTML = `${ingreso.nombreMayor}`;
    this.lblPorcentajeIngAltos!.innerHTML = `${ingreso.porcentajeIngAltos.toFixed(2)}`;
    this.lblTipoPredominante!.innerHTML = `${ingreso.tipoPredominante}`;
  }
}
