import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IndianState} from './indianState';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

IS1:IndianState=new IndianState('Maharashtra','Mumbai','Marathi','VadaPav')
IS2:IndianState=new IndianState('Andhra Pradesh','Amaravati','Telugu','Pachadi')
IS3:IndianState=new IndianState('Karnataka','Bengaluru','Kannada','Bissibilabath')
IS4:IndianState=new IndianState('Jammu & kashmir','India','Kashmiri','Kashmiri Pulao')

indianStates:IndianState[] = []

constructor() {}

  ngOnInit(): void {
    this.indianStates.push(this.IS1,this.IS2,this.IS3,this.IS4);
  }

trackByFn(index:any){
  return index.capital
}
}
// class IndianState{
//   state: string;
//   capital: string;
//   languageSpoken: string;
//   famousDish: string;

//   constructor(state: string, capital: string, languageSpoken: string, famousDish: string) {
//     this.state=state;
//     this.capital=capital;
//     this.languageSpoken=languageSpoken;
//     this.famousDish=famousDish;
//       }
// }
