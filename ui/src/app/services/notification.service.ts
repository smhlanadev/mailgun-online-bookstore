import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationInput } from '../models/notification-input.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://localhost:7234/Notifications';
  constructor(private http: HttpClient) { }

  send(input: NotificationInput): void {
    this.http.post(this.apiUrl, input).subscribe({
      error: error => {
        console.error('Error sending notification', error);
      }
    });
  }
}
