import { Injectable } from '@angular/core'; // Import Injectables dependencies

@Injectable() //Use Decorator @Injectable for services
export class RestaurantService { //Export class RestaurantService
    getData(){ // Declare a function getData which returns an array of restaurants
        return [
        
        {
            id:1,
            name:"Chavadi",
            address:"4, Arama Suites, Sarvabhouma Nagar, Off Bannerghatta Road, Bannerghatta Road, Bangalore",
            location:"Bannerghatta Road",
            contact: "080 49653031",
            cuisine:["Continental"],
            open:"11 AM to 11 PM",
            highlights:["Full Bar Available", "Rooftop", "Outdoor Seating", "Smoking Area", "Nightlife" ],
            cost: "₹1,200 for two people (approx.) with alcohol",
            stars:4.5,
            gallery:"../assets/img/chavadi2.jpg",
            menu:"../assets/img/chavadi1.jpg",

        },

        {   
            id:2,
            name:"Nagarjuna",
            address:"174/1, Bannerghatta Main Road, Bannerghatta Road, Bangalore",
            location:"Bannerghatta Road",
            contact: "080 49653045",
            cuisine:["Andhra"],
            open:"12 Noon to 3:30 PM, 7 PM to 11 PM",
            highlights:["Home Delivery", "Home Delivery"],
            cost: "₹800 for two people (approx.)",
            stars: 3.0,
            gallery:"../assets/img/nagarjuna2.jpg",
            menu:"../assets/img/nagarjuna1.jpg",


        },
        {   
            id:3,
            name:"Grasshopper",
            address:"45, Near Meenakshi Temple, Kalena Agrahara, Bannerghatta Road, Bangalore",
            location:"Bannerghatta Road",
            contact: "080 49653247",
            cuisine:["European"],
            open:"7:30 PM to 11:30 PM",
            highlights:["Wheelchair Accessible", "Full Bar Available","Outdoor Seating","Smoking Area","Luxury Dining"],
            cost: "₹5,000 for two people (approx.)",
            stars: 4.2,
            gallery:"../assets/img/grasshopper2.jpg",
            menu:"../assets/img/grasshopper1.jpg",


        },

        
        {   
            id:4,
            name:"The Black Pearl",
            address:"105, 1st A Cross Road, Jyothi Nivas College Road, Koramangala 5th Block, Bangalore",
            location:"Koramangala",
            contact: "080 45128773",
            cuisine:["North Indian", "European", "Mediterranean"],
            open:"12 Noon to 4 PM, 7 PM to 11:30 PM",
            highlights:["Home Delivery", "Full Bar Available","Outdoor Seating","Smoking Area","Live Music","Rooftop"],
            cost: "₹1,400 for two people (approx.)",
            stars: 4.0,
            gallery:"../assets/img/theblackpearl2.jpg",
            menu:"../assets/img/theblackpearl1.jpg",


        }
        ,
        {   
            id:5,
            name:"Bakasur",
            address:"23, Indraprastha Equinox, 4th Floor, Near Sony Signal, 100 Feet Inner Ring Road, Koramangala 6th Block, Bangalore",
            location:"Koramangala",
            contact: "080 49653279",
            cuisine:["North Indian"],
            open:" 12 Noon to 3:30 PM, 7 PM to 11 PM",
            highlights:["Full Bar Available", "Buffet"],
            cost: "₹1,200 for two people (approx.)",
            stars: 3.3,
            gallery:"../assets/img/bakasur2.jpg",
            menu:"../assets/img/bakasur1.jpg",


        },
        {   
            id:6,
            name:"Buff Buffet Buff",
            address:"60, Jyothi Nivas College Road, Koramangala 5th Block, Bangalore",
            location:"Koramangala",
            contact: "080 49652556",
            cuisine:["North Indian", "Chinese", "Continental", "Thai"],
            open:"7 AM to 10 AM, 11:30 AM to 4:30 PM, 7 PM to 11:30 PM",
            highlights:["Wheelchair Accessible", "Full Bar Available","Breakfast","Valet Parking Available","Buffet"],
            cost: "₹1,500 for two people (approx.)",
            stars: 4.3,
            gallery:"../assets/img/buffbuffetbuff2.jpg",
            menu:"../assets/img/buffbuffetbuff1.jpg",


        },
        {   
            id:7,
            name:"Sultans of Spice",
            address:"BluPetal Hotel, 60 Jyoti Nivas College Road, Koramangala 5th Block, Bangalore",
            location:"Koramangala",
            contact: "080 49653172",
            cuisine:["North Indian", "Mughlai"],
            open:"12 Noon to 4:30 PM, 7 PM to 11:30 PM",
            highlights:["Home Delivery", "Full Bar Available","Wifi","Live Sports Screening","Buffet"],
            cost: "₹1,300 for two people (approx.) ",
            stars: 4.2,
            gallery:"../assets/img/sultansofspice2.jpg",
            menu:"../assets/img/sultansofspice1.jpg",


        },
        {   
            id:8,
            name:"AB's - Absolute Barbecues",
            address:"CPR Towers, Near Jayadeva Flyover, 100 Feet Road, 1st Phase, 2nd Stage",
            location:"Jayanagar",
            contact: "+91 8880488809",
            cuisine:["European", "Mediterranean", "North Indian"],
            open:"12 Noon to 4 PM, 6:30 PM to 12 Midnight",
            highlights:["Full Bar Available","Buffet"],
            cost: "₹5,000 for two people (approx.)",
            stars: 4.7,
            gallery:"../assets/img/AB2.jpg",
            menu:"../assets/img/AB1.jpg",


        },
        {   
            id:9,
            name:"1947",
            address:"62, The High Street Building, 5th Floor, 4T Block, Opposite Vijaya College, Jayanagar, Bangalore",
            location:"Jayanagar",
            contact: "080 41261947 , +91 9739989453",
            cuisine:["North Indian", "Chinese"],
            open:"12:30 PM to 3:30 PM, 7 PM to 10:30 PM",
            highlights:["Home Delivery", "Vegetarian Only","Buffet"],
            cost: "₹750 for two people (approx.)",
            stars: 3.8,
            gallery:"../assets/img/19472.jpg",
            menu:"../assets/img/19471.jpg",


        }

    ] ;
    }
}