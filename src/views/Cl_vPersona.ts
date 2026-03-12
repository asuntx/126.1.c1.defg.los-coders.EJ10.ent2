export default class Cl_vPersona {
  inNombre: HTMLInputElement;
  inIngreso: HTMLInputElement;
  inCedula: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("persona") as HTMLElement;
    this.inNombre = document.getElementById(
      "persona_inNombre",
    ) as HTMLInputElement;
    this.inIngreso = document.getElementById(
      "persona_inIngreso",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "persona_inCedula",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "persona_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "persona_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }

  get nombre(): string {
    return this.inNombre.value;
  }
  get ingreso(): number {
    return +this.inIngreso.value;
  }

  get cedula(): number {
    return +this.inCedula.value;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
