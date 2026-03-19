import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mIngreso {
  private acIngresos: number;
  private contPersona: number;
  private ingMenor: number;
  private ingMayor: number;
  private auxNombre: string;
  private contIngresosAltos: number;
  private contRemoto: number;
  private contPresencial: number;

  constructor() {
    this.acIngresos = 0;
    this.contPersona = 0;
    this.ingMenor = 999;
    this.ingMayor = 0;
    this.auxNombre = "";
    this.contIngresosAltos = 0;
    this.contRemoto = 0;
    this.contPresencial = 0;
  }

  procesarPersona(p: Cl_mPersona): void {
    this.contPersona++;
    this.acIngresos += p.ingreso;

    if (p.ingreso < this.ingMenor) {
      this.ingMenor = p.ingreso;
    }
    if (p.ingreso > this.ingMayor) {
      this.ingMayor = p.ingreso;
      this.auxNombre = p.nombre;
    }

    if (p.ingreso > 500) {
      this.contIngresosAltos++;
    }

    if (p.tipo === 0) {
      this.contRemoto++;
    } else {
      this.contPresencial++;
    }
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

  get nombreMayor(): string {
    return this.auxNombre;
  }

  get porcentajeIngAltos(): number {
    if (this.contPersona > 0) {
      return (this.contIngresosAltos / this.contPersona) * 100;
    }
    return 0;
  }

  get tipoPredominante(): string {
    if (this.contRemoto > this.contPresencial) {
      return "Remoto";
    } else if (this.contPresencial > this.contRemoto) {
      return "Presencial";
    } else {
      return "Ambas modalidades de trabajo presentan una equivalencia";
    }
  }
}
