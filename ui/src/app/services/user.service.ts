import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { userCredentials, users } from '../data/user.data';
import { UserCredentials } from '../models/user-credentials.model';
import { NotificationService } from './notification.service';
import { EmailType } from '../models/email-type.enum';
import { NotificationInput } from '../models/notification-input.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  userCredentials: UserCredentials[] = [];
  EmailType = EmailType;
  currentUser: User | undefined = undefined;

  constructor(private notificationService: NotificationService) {
    this.users = users;
    this.userCredentials = userCredentials;
  }

  login(email: string, password: string): boolean {
    if (!this.userCredentials.find(uc => uc.email === email && uc.password === password)) return false;
    
    this.currentUser = this.users.find(u => u.email === email);
    if (!this.currentUser) return false;
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

    const input: NotificationInput = {
      emailTo: user.email,
      emailType: EmailType.Registration,
      name: user.name
    };

    this.notificationService.send(input);
  }
}
