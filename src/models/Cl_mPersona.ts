export default class Cl_mPersona {
  private _nombre: string = "";
  private _ingreso: number = 0;
  private _tipo: number = 0;

  constructor(
    {
      nombre,
      ingreso,
      tipo,
    }: { nombre: string; ingreso: number; tipo: number } = {
      nombre: "",
      ingreso: 0,
      tipo: 0,
    },
  ) {
    this.nombre = nombre;
    this.ingreso = ingreso;
    this.tipo = tipo;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }
  set ingreso(ingreso: number) {
    this._ingreso = +ingreso;
  }
  get ingreso(): number {
    return this._ingreso;
  }

  set tipo(tipo: number) {
    this._tipo = tipo;
  }

  get tipo(): number {
    return this._tipo;
  }
}
