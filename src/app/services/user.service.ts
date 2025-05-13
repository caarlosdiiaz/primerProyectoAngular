import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: "Carlos",
    lastname: "Díaz",
    email: "carlos.diaz@practicas.qraneos.com",
    username: "carlos.diaz",
    password: "123456"
  }, {
    id: 2,
    name: "Gaston",
    lastname: "Mora",
    email: "gaston.mora@qraneos.com",
    username: "gaston.mora",
    password: "123456"
  }]
  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
