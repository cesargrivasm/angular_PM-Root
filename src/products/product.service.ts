import { Injectable } from '@angular/core';
import { IProduct } from './products';



@Injectable({providedIn: 'root'})
export class ProductService {
    
    getProducts() : IProduct[] {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "assets/garden cart.jpg"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2019",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/hammer.jpg"
            },
            {
                "productId": 7,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2018",
                "description": "PS4 controller",
                "price": 35.95,
                "starRating": 4.5,
                "imageUrl": "assets/download.png"
            },
        ]
    } 

}