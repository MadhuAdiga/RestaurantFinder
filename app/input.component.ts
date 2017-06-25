import { Component, OnInit, Input, Directive, ElementRef , OnChanges, SimpleChange  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from './location.services' // Import LocationService 
import { RestaurantService } from './restaurant.services' // Import LocationService
import { RestaurantDetail } from './restaurant.component';

@Component({
  selector: 'my-input',
  templateUrl: 'app/input.component.html'            
})


export class inputComponent  { 

     filterBy:string;// Declare the below variable
     hideResto=true;
     locData:any;  
     restoData:any;
     selLoc:any;
     cusineInputValidated=false;
     classApplied:string;
     
     clearAll(filterBy:string){ //Function called when the Clear filters button is clicked
        if(filterBy){ //If the cuisine has been entered
            this.filterBy=null; //Clear the varaiable setting
            this.cusineInputValidated=false; //Set the cusineInputValidated variable to false
            this.hideResto=true; //Hide the detailed display of the restaurant
            this.selectedRestoId=null; //Set none to the selected restaurant
        }
        else { //If cuisine filter has not been input
            this.selectedLoc = 'Select your locality'; //Set the selected locality to default  
            this.hideResto=true; //Hide the detailed display of the restaurant
            this.selectedRestoId=null;//Set none to the selected restaurant
         }
     }

    
     selectedLoc:string; 
            updateloc(loc:string){//When locality has been selected
            this.selectedLoc=loc;//Update the selected loc to the input parameter
            return this.selectedLoc;//return
            
        }
     selectedRestoId:number;
            updateresto(resto:number){//when a particular restaurant has been clicked on
            this.selectedRestoId=resto;//update selectedRestoId with the current selection
            this.hideResto=false; //display the restaurant detail
            }
  
  
    constructor(private _locationService: LocationService, private _restoService: RestaurantService, private router: Router){} // Declares a private variable and assign it to the type RestaurantService

    ngOnInit(){
        this.locData= this._locationService.getData();// Apply the ngOnInit lifecycle on the variable which assigns the locData to the data fetched by the function getData in the RestaurantService
        this.restoData= this._restoService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the restoData to the data fetched by the function getData in the RestaurantService
    }

    
   onChange(filterBy:string){//on change of the ngModel value of the cuisine input
        for (let x of this.restoData) {//iterate through the restaurant array
            for( let y of x.cuisine){//iterate through the cusine array
                if(filterBy.toUpperCase()==y.toUpperCase()){//if the typed cuisine is same as the restaurant cusine
                    this.cusineInputValidated=true;//set cusineInputValidated to true so that the restaurant detail is displayed
                }
                else if(filterBy==null){//else if no value has been typed
                    this.cusineInputValidated=false;//set cusineInputValidated to false so that the restaurant detail is not displayed
                }
            }
        }
    }
   }
   
