import { Component, OnInit, ChangeDetectorRef , DoCheck, ChangeDetectionStrategy} from '@angular/core';
import { CityService } from '../../service/city-service';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationModal } from '../confirmation-modal/confirmation-modal';
import { CountryService } from '../../service/country-service';
import { forkJoin,Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  standalone: false,
  templateUrl: './city.html',
  styleUrl: './city.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class City {

  cities:any[]=[];
  countries:any[]=[];
  selectedItem=null;

  constructor(
    private cityService : CityService,
    private countryService : CountryService,
    private dialog : MatDialog,
    private cdRef: ChangeDetectorRef){
    /*this.cityService.getCities().subscribe(res=>{
      this.cities=res;
    });*/
    const cityCall:Observable<any[]> = this.cityService.getCities();
    const countryCall:Observable<any[]> = this.countryService.getCountries();

    /*forkJoin([cityCall, countryCall]).subscribe([cityCall, countryCall])=>{
      this.cities=cityRes;
      this.countries=countryRes;
    });*/
    forkJoin([cityCall, countryCall]).subscribe((res)=>{
      console.log(res);
      this.countries=res[1];
      this.cities=res[0];
      this.cities.forEach((cit) => {
        cit.country = this.countries[19].countryId;
      });
    });
  }

  ngOnInit(){
    /*this.cityService.getCities().subscribe(res=>{
      this.cities=res;
      console.log("Done ");
    });*/
    console.log("Done");
  }

  ngAfterContentChecked(){
    //this.cdRef.detectChanges();
    //this.cdRef.markForCheck();
    console.log("Content checked");
  }

  ngAfterViewInit(){
    //this.cdRef.detectChanges();
  }

  ngDoCheck(){
    if(this.cdRef !=undefined){
      this.cdRef.detectChanges();
    }
  }

  create(){
    console.log("Created");
  }


  delete(city:any){
    let selectedCity = this.cities[city];
    this.selectedItem=selectedCity;
    console.log("Selected city: ",selectedCity)
    this.dialog.open(ConfirmationModal,{
      data : selectedCity
    }).afterClosed()
    .subscribe((response)=>{
      if(response){
        console.log("option is ",response);
        console.log("Before deletion ",this.cities.length);
        //this.cities = this.cities.filter(cit => cit.city!=selectedCity.city);
        this.cities.splice(city,1);
        this.cdRef.markForCheck();
        //this.cdRef.detectChanges();
        console.log("After deletion ",this.cities.length);
      }
    });

  }

}
