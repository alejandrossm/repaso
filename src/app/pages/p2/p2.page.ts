import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Este es el on init");
  }

  onClick(){
    console.log("Hola mundo!!!!");
  }

  otroevento()
  {
    let fecha=new Date()
    console.log(fecha);
  }

}
