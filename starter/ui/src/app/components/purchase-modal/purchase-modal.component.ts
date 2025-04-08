import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
