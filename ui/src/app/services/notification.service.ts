import { Injectable } from '@angular/core';
import { EmailType } from '../models/email-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  send(email: string, emailType: EmailType): void {
    alert(`Send email ${emailType} notification to ${email}`);
  }
}
