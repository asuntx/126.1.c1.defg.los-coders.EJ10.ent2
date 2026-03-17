import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mIngreso {
  private acIngresos: number;
  private contPersona: number;
  private ingMenor: number;
  private ingMayor: number;
  private auxNombre: string;

  constructor() {
    this.acIngresos = 0;
    this.contPersona = 0;
    this.ingMenor = 0;
    this.ingMayor = 0;
    this.auxNombre = "";
  }

  procesarPersona(p: Cl_mPersona): void {
    this.contPersona++;
    this.acIngresos += p.ingreso;

    if (this.contPersona === 1) {
      this.ingMenor = p.ingreso;
    } else if (p.ingreso < this.ingMenor) {
      this.ingMenor = p.ingreso;
    }
    if (p.ingreso > this.ingMayor) {
      this.ingMayor = p.ingreso;
      this.auxNombre = p.nombre;
    }
  }

  // nuevo requerimiento sugerido por el profesor Giovanni en Clases
  get nombreMayor(): string {
    return this.auxNombre;
  }

  get ingresoPromedio(): number {
    if (this.contPersona > 0) {
      return this.acIngresos / this.contPersona;
    }
    return 0;
  }

  get ingresoMenor(): number {
    return this.ingMenor;
  }

  get contPersonas(): number {
    return this.contPersona;
  }
}
