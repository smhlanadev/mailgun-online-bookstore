import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { userCredentials, users } from '../data/user.data';
import { UserCredentials } from '../models/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  userCredentials: UserCredentials[] = [];

  constructor() {
    this.users = users;
    this.userCredentials = userCredentials;
  }

  login(email: string, password: string): boolean {
    return true;
  }

  register(user: User, password: string): void {
    if (this.users.find(u => u.email === user.email)) {
      throw new Error('User already exists');
    }

    const lastId = this.users[this.users.length - 1]?.id || 0;
    user.id = lastId + 1;
    user.firstTimeLogin = true;
    users.push(user);
    userCredentials.push({ email: user.email, password });

    alert('Send email notification to ' + user.email);
  }
}
