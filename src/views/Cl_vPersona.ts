export default class Cl_vPersona {
  inNombre: HTMLInputElement;
  inIngreso: HTMLInputElement;
  inTipo: HTMLInputElement;
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
    this.inTipo = document.getElementById("persona_inTipo") as HTMLInputElement;
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

  get tipo(): number {
    return +this.inTipo.value;
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
