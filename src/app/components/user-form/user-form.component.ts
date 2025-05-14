import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  user: User;


  constructor(
    private router: Router,
    private sharingData: SharingDataService) {

      if (this.router.getCurrentNavigation()?.extras.state)
        this.user = this.router.getCurrentNavigation()?.extras.state!['user'];
      else
        this.user = new User;
  }

  onSubmit(userForm: NgForm): void {
    if(userForm.valid){
      this.sharingData.newUserEventEmiter.emit(this.user);
      console.log(this.user);
    }

    this.onClear(userForm);
  }

  onClear(userForm: NgForm): void {
    userForm.reset();
    userForm.resetForm();
  }
}
