import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-city',
  standalone: false,
  templateUrl: './new-city.html',
  styleUrl: './new-city.css'
})
export class NewCity {

  countries:any[]=[] ;

  ngOnInit(){
    console.log("Started");
  }

  create(){
    console.log("Created");
  }
}
