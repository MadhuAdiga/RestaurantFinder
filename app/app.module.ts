import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';



import { AppComponent }  from './app.component';
import { navigationComponent }  from './navigation.component';
import { inputComponent }  from './input.component';
import { RestaurantDetail }  from './restaurant.component';

import { LocationService } from './location.services';
import { RestaurantService } from './restaurant.services'


@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2Bs3ModalModule, RouterModule.forRoot([{path: 'restaurant', component: RestaurantDetail}]) ],
  //Defines router paths for the application
  //Can be alternatively done by creating a custom RouterModule and define all paths as a constant, import custom RouterModule in AppModule
  declarations: [ AppComponent,navigationComponent, inputComponent, RestaurantDetail ],
  bootstrap:    [ AppComponent, navigationComponent, inputComponent ],
  providers : [ LocationService, RestaurantService ]
})
export class AppModule { }
