import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
   toggle1 = false
   toggle2 = false
   toggle3 = false 

   updateItem () {
     if(this.toggle1 && this.toggle2 && this.toggle3) {
       // do the function
     }
   }
  // object : Object
  // printJson(noGuests: string, name: string, phone : String, mailId : String) {
   
  //   var jsonData = {
  //     'noGuests' : noGuests,
  //     'name' : name,
  //     'phone' : phone,
  //     'mailId' : mailId
  //   }
  //   console.log(jsonData);

  // }
}
