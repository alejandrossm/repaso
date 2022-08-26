import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.page.html',
  styleUrls: ['./p5.page.scss'],
})
export class P5Page implements OnInit {

  contador:number=0;
  texto:string;
  lista:any=[];
  otralista:any=[];

  constructor() { }

  ngOnInit() {
    let fecha=new Date();
    this.texto=fecha.toString();
  }

  onClick()
  {
    this.contador++;
    this.lista.unshift(this.contador);
    this.otralista.push(this.contador)
    console.log(this.lista);
    console.log(this.otralista);
  }

  mostrar(yo){
    console.log(yo.lista);
  }

  mostrarEvento(evento)
  {
    console.log(evento.srcElement.id);
    document.getElementById(evento.srcElement.id).setAttribute('disabled','true');
  }
}
