import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(email: string, password: string): boolean {
    return true;
  }

  register(user: User, password: string): void {
  }
}
