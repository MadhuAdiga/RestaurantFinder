import { Component, OnInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocationService } from './location.services' // Import LocationService 
import { RestaurantService } from './restaurant.services' // Import LocationService
import { inputComponent } from './input.component';// Import inputComponent

@Component({
  selector:`resto-detail`,
  templateUrl: 'app/restaurant.component.html' , 
  providers:[inputComponent]
                
})


export class RestaurantDetail  { 

  locData:any; // Declare a variable locData
  restoData:any;
  selLoc:string;
  @Input() child_selectedRestoId: number;//A variable of the restaurant component that recives and holds the selectedRestoId data from the input component
  @Input() child_cusineInputValidated:boolean;//A variable of the restaurant component that recives and holds the cusineInputValidated data from the input component
  @Input() child_hideResto:boolean;//A variable of the restaurant component that recives and holds the hideResto data from the input component
  
  
 
    constructor(private _locationService: LocationService, private _restoService: RestaurantService){} // Declares a private variable and assign it to the type LocationService and another to RestaurantService

    ngOnInit(){
        this.locData= this._locationService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the locData to the data fetched by the function getData in the LocationService
        this.restoData= this._restoService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the restoData to the data fetched by the function getData in the RestaurantService
      }
      
    getStyle(star:any){//A function to style the ratings badge
        if(star<4){//if the ratings are less than 4 return gold colour as the background
            return 'gold';
        }
        else return 'palegreen';//if the ratings are greater than 4 return palegreen colour as the background
            
  }
}