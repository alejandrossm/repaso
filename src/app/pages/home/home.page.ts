import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}



  ionViewWillLeave(){
    console.log("Will leave");
  }

  ionViewWillEnter() {
    console.log("Will enter");
  }

  ngOnInit()
  {
    console.log("Esto es el index");
  }

  ionViewDidLeave(){
    console.log("Did leave");
  }

  ionViewDidEnter() {
    
  }

}
