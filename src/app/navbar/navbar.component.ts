import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';
import { Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  myJK:string = "assets/images/JK.jpg"
  myAP:string = "assets/images/AP.jpg"
  myKA:string = "assets/images/Karnataka.jpg"
  myMH:string = "assets/images/Maha.jpg"

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
