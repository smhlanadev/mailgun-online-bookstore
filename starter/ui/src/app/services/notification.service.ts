import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationInput } from '../models/notification-input.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://localhost:7234/Notifications';
  constructor(private http: HttpClient) { }

  send(input: NotificationInput): Observable<any> {
    return this.http.post(this.apiUrl, input);
  }
}
