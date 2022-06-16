import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   //export the class. Class is ablueprint for JS object. Angular creates object, we need not create. This class is normal TS class, but to inform angular, should be treated a s a component
  myimage: string = "assets/images/wo.jpg";

  // myJK:string = "assets/images/JK.jpg"
  // myAP: string = "assets/images/AP.jpg"
  // myKA: string = "assets/images/Karnataka.jpg"
  // myMH:string ="assets/images/Maha.jpg"

  title = 'a TOUR OF INDIAN STATES!';
}


