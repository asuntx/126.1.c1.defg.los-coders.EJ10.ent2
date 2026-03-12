import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mIngreso {
  private acIngresos: number;
  private contPersona: number;
  private menor: number;

  constructor() {
    this.acIngresos = 0;
    this.contPersona = 0;
    this.menor = 0;
  }

  procesarPersona(p: Cl_mPersona): void {
    this.contPersona++;
    this.acIngresos += p.ingreso;

    if (this.contPersona === 1) {
      this.menor = p.ingreso;
    } else if (p.ingreso < this.menor) {
      this.menor = p.ingreso;
    }
  }

  get promedioIngresos(): number {
    if (this.contPersona > 0) {
      return this.acIngresos / this.contPersona;
    }
    return 0;
  }

  get menorIngreso(): number {
    return this.menor;
  }

  get contPersonas(): number {
    return this.contPersona;
  }
}
