import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  standalone: false,
  templateUrl: './confirmation-modal.html',
  styleUrl: './confirmation-modal.css'
})
export class ConfirmationModal {

  @Input()
  entity:string='default';


  constructor(public dialog: MatDialogRef<ConfirmationModal>,
    @Inject(MAT_DIALOG_DATA) public message: string){

  }

  confirm(){
    this.dialog.close(true);
  }

  dismiss(){
    this.dialog.close(false);
  }

}
