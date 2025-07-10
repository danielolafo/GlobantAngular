import { Component } from '@angular/core';
import { NotificationService } from '../../service/notification-service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  messages :any[] = [];

  constructor(
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(){
    this.notificationService.getRandomData().subscribe(res =>{
      this.messages = res;
      console.log("Response ",res);
    })
  }

  viewTeamInfo(){
    console.log("Team info");
  }

}
