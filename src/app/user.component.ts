
import {Component} from '@angular/core';  //decorator


@Component({
selector: 'app-user',
template: `
<div>
<input type="text" (input)="onUserInput($event)" value="{{name1}}">
</div>
<br>
<div>
  <button (click)="onUserInput($event)"> SIVA </button>
<input type="text" [(ngModel)]="name2">,
<div>
<!--< // event in TS by calling a method of yopur component class. Use name by ON to make sure  -->
<p><b> Hello {{name}}! </b></p>
<!-- // syntax for outputting content {{}} -->
<p> I'm trying to learn Angular </p>`
})
export class UserComponent{
  name = "I'm Kavya Polavarapu";
  name1 = 'One Way Binding';
  name2 = 'Two way Binding'
   // adding a new property
   onUserInput(event:any) {
this.name1=event?.target.value;  //input element that user gives so, .value is used
}
}
//component code
