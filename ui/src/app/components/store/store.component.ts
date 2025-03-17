import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Book } from '../../models/book.model';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-store',
  imports: [MatGridListModule, CommonModule, MatCardModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  books: Book[] = [];

  constructor(private bookService: BookService, private dialog: MatDialog, private notificationService: NotificationService) {
    this.books = this.bookService.getBooks();
  }

  onBuy(book: Book) {
    const dialogRef = this.dialog.open(PurchaseModalComponent, {
      width: '25rem',
      minHeight: '25rem',
      maxHeight: '28rem',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
