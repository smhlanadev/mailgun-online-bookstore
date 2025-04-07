import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { EmailType } from '../../models/email-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationInput } from '../../models/notification-input.model';

@Component({
  selector: 'app-purchase-modal',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './purchase-modal.component.html',
  styleUrl: './purchase-modal.component.scss'
})
export class PurchaseModalComponent {
  purchaseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<PurchaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.purchaseForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      expiryDate: ['', Validators.required]
    });
  }

  onSubmit() {
    const input: NotificationInput = {
      emailTo: this.purchaseForm.value.email,
      emailType: EmailType.Purchase,
      name: this.purchaseForm.value.name,
      bookTitle: this.data.book.title,
      bookAuthor: this.data.book.author,
    };
    
    this.notificationService.send(input).subscribe({
      next: (result) => {
        this.dialogRef.close(result.isSuccessful);
      },
      error: error => {
        console.error('Error sending notification', error);
        this.dialogRef.close(false);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
