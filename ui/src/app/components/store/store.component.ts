import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-store',
  imports: [MatGridListModule, CommonModule, MatCardModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  books: any = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }


}
