import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  @Input() user: User;
  @Input() open: boolean = false;
  @Output() newUserEventEmiter: EventEmitter<User> = new EventEmitter
  @Output() openEventEmiter = new EventEmitter

  constructor() {
    this.user = new User;
  }

  onSubmit(userForm: NgForm): void {
    if(userForm.valid){
      this.newUserEventEmiter.emit(this.user);
      console.log(this.user);
    }

    this.onClear(userForm);
  }

  onClear(userForm: NgForm): void {
    userForm.reset();
    userForm.resetForm();
  }

  onOpen(): void {
    this.openEventEmiter.emit();
  }
}
