import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,  AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'CrudBasico';
     now!: Date;
  //este OnInit lo usamos para la fecha y la hora
  ngOnInit() {
   
        this.now = new Date();
     
        setInterval(() => {
     
          this.now = new Date();
     
        }, 1000);
     
      }


}



