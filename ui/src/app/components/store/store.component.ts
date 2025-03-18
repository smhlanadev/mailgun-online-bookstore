import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Book } from '../../models/book.model';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-store',
  imports: [MatGridListModule, CommonModule, MatCardModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  books: Book[] = [];

  constructor(private bookService: BookService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.books = this.bookService.getBooks();
  }

  onBuy(book: Book) {
    const dialogRef = this.dialog.open(PurchaseModalComponent, {
      width: '25rem',
      minHeight: '28rem',
      maxHeight: '34rem',
      disableClose: true,
      data: { book }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open(result ? 'Purchase successful!' : 'Purchase cancelled', 'Close', { duration: 3000 });
    });
  }
}
