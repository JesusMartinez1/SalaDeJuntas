import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../SERVICIOS/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable para mostrar en la pantalla lo de la consola el Equipo es la interface en donde tenemos todos nuestros datos de la bd
  ListarEquipo: Equipo[] = [];

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

//para mostrar el los datos con el metodo get
  listarEquipo(){
    this.EquipoService.getEquipos().subscribe(
      res => {
        console.log(res)
        this.ListarEquipo = <any> res;
      },
      err => console.log(err)
    );
  }

  //eliminar sala de juntas con el metodo delete
  eliminar(id:string)
  {
    this.EquipoService.deleteEquipo(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }

}
