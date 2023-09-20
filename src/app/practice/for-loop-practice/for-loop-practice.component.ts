import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop-practice',
  templateUrl: './for-loop-practice.component.html',
  styleUrls: ['./for-loop-practice.component.scss']
})
export class ForLoopPracticeComponent implements OnInit{
 

    countryNames: string[] = [];  //  Here i initialize the with empty array that is must otherwise we willl get err...........
    practiceData: any[] = [];
    complecatedData: any[] = [];
  
  
    ngOnInit(): void {
      this.countryNames = [
        "India", "Pakistan", "Bangladesh", "America", "Rasia", "China", "Japan", "Afganistan"
      ]
      this.practiceData = [
        { id: 1, name: 'John', age: 30, city: 'New York' },
        { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
        { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
        { id: 4, name: 'Eve', age: 28, city: 'San Francisco' },
        { id: 5, name: 'Charlie', age: 32, city: 'Miami' }
      ]
  
      this.complecatedData = [
        // Sample data with nested objects and arrays
  
       // Sample data with nested objects and arrays
  {
      id: 1,
      name: 'John Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        postalCode: '10001',
      },
      hobbies: ['Reading', 'Gardening'],
    },
    {
      id: 2,
      name: 'Alice Smith',
      age: 25,
      address: {
        street: '456 Elm St',
        city: 'Los Angeles',
        postalCode: '90001',
      },
      hobbies: ['Painting', 'Cooking', 'Hiking'],
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 35,
      address: {
        street: '789 Oak St',
        city: 'Chicago',
        postalCode: '60601',
      },
      hobbies: ['Fishing', 'Traveling'],
    },
    {
      id: 4,
      name: 'Eve Davis',
      age: 28,
      address: {
        street: '101 Pine St',
        city: 'San Francisco',
        postalCode: '94101',
      },
      hobbies: ['Photography', 'Yoga'],
    },
    {
      id: 5,
      name: 'Charlie Brown',
      age: 32,
      address: {
        street: '555 Maple St',
        city: 'Miami',
        postalCode: '33101',
      },
      hobbies: ['Swimming', 'Cycling'],
    },
    {
      id: 6,
      name: 'Grace Wilson',
      age: 27,
      address: {
        street: '777 Willow St',
        city: 'Seattle',
        postalCode: '98101',
      },
      hobbies: ['Cooking', 'Reading'],
    },
    {
      id: 7,
      name: 'Daniel Lee',
      age: 40,
      address: {
        street: '888 Birch St',
        city: 'Dallas',
        postalCode: '75201',
      },
      hobbies: ['Golfing', 'Traveling'],
    },
    {
      id: 8,
      name: 'Olivia Green',
      age: 22,
      address: {
        street: '202 Oakwood Ave',
        city: 'Boston',
        postalCode: '02101',
      },
      hobbies: ['Hiking', 'Photography'],
    },
    {
      id: 9,
      name: 'William Taylor',
      age: 38,
      address: {
        street: '303 Elmwood Dr',
        city: 'Denver',
        postalCode: '80201',
      },
      hobbies: ['Camping', 'Fishing'],
    },
    {
      id: 10,
      name: 'Sophia Brown',
      age: 29,
      address: {
        street: '404 Cedar Rd',
        city: 'Austin',
        postalCode: '73301',
      },
      hobbies: ['Cooking', 'Yoga'],
    },
      ]
    }
  
}
