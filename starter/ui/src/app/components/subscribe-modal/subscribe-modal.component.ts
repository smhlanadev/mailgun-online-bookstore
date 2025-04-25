import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { EmailType } from '../../models/email-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationInput } from '../../models/notification-input.model';

@Component({
  selector: 'app-subscribe-modal',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './subscribe-modal.component.html',
  styleUrl: './subscribe-modal.component.scss'
})
export class SubscribeModalComponent {
  subscribeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<SubscribeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.subscribeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const input: NotificationInput = {
      emailTo: this.subscribeForm.value.email,
      name: this.subscribeForm.value.name,
      emailType: EmailType.Subscription,
    };
    
    this.notificationService.send(input).subscribe({
      next: (result) => {
        this.dialogRef.close(result.isSuccessful);
      },
      error: () => {
        this.dialogRef.close(false);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
