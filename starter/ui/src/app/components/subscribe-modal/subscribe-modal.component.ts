import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    public dialogRef: MatDialogRef<SubscribeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.subscribeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
