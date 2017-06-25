import { Injectable } from '@angular/core'; // Import Injectables dependencies

@Injectable() //Use Decorator @Injectable for services
export class LocationService { //Export class LocationService
    
    getData(){ // Declare a function getData which returns an array of locations
    return [
            {
             id:1,
             name:"Bannerghatta Road"   
            },
            {
             id:2,
             name:"Jayanagar"
            },
            {
             id:3,
             name:"Koramangala"
            }
            ];
    }
}