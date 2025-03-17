import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { EmailType } from '../../models/email-type.enum';
import { MatDialogRef } from '@angular/material/dialog';

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
    public dialogRef: MatDialogRef<PurchaseModalComponent>
  ) {
    this.purchaseForm = this.formBuilder.group({
      name: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      expiryDate: ['', Validators.required]
    });
  }

  onSubmit() {
    this.notificationService.send('email-address', EmailType.Purchase);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
