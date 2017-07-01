import { Component } from '@angular/core';

@Component({
  selector: 'my-app',//selector
  template: `<h1>Hello {{name}}</h1>`,//template loading
  
})


export class AppComponent  { name = 'Angular'; }//value of the loading variable
