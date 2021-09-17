import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

url='/api';
  constructor(private http: HttpClient) { }


  //metodo get
getEquipos()
{
  return this.http.get(this.url);
}

// mostrar
getUnEquipo(id:string){
  return this.http.get(this.url+'/'+id);
}

//agregar 
addEquipo(equipo:Equipo){
  return this.http.post(this.url, equipo);
}

//eliminar
deleteEquipo(id:string){
  return this.http.delete(this.url+'/'+id);
}

//modificar
editEquipo(id:string, equipo:Equipo){
  return this.http.put(this.url+'/'+id, equipo);
}

}

//interface para poder hacer uso de nuestros datos
export interface Equipo{
  id_equipo:string;
  nombre:string;
  cita: string;
  descripcion:string;
  hora:string;
}


