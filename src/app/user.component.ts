import {Component} from '@angular/core';  //decorator


@Component({
selector: 'app-user',
templateUrl: './user.component.html',
//styleUrls:

})
export class UserComponent{
  name = "I'm Kavya Polavarapu";
  // name1 = 'One Way Binding';
  // name2 = 'Two way Binding'
   // adding a new property
   onUserInput(event:any) {
this.name=event?.target.value;  //input element that user gives so, .value is used
}
}
//component code
