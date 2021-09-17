 import { Component, OnInit } from '@angular/core';
 import { Equipo, EquipoService} from '../../SERVICIOS/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

// en equipo le mandamos lo que contiene la interfaz Equipo
  equipo: Equipo = {
    id_equipo: '',
    nombre: '',
    descripcion: '',
    cita: '',
    hora: ''
  };

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    
    //haciendo uso de add agregamos una nueva sala de juntas
    this.EquipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }

}
