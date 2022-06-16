import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  myJK:string = "assets/images/JK.jpg"
  myAP:string = "assets/images/AP.jpg"
  myKA:string = "assets/images/Karnataka.jpg"
  myMH:string = "assets/images/Maha.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
