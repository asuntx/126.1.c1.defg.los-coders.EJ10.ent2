export default class Cl_mPersona {
  private _nombre: string = "";
  private _ingreso: number = 0;
  private _cedula: number = 0 ;

  constructor(
    { nombre, ingreso, cedula}: { nombre: string; ingreso: number; cedula: number } = {
      nombre: "",
      ingreso: 0,     
      cedula: 0,
    },
  ) {
    this.nombre = nombre;
    this.ingreso = ingreso;
    this.cedula = cedula;
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
  set cedula(cedula : number){
    this._cedula = +cedula
  }
  get cedula(): number {
    return this._cedula;
  }
}
