import { Injectable } from '@angular/core';
import { books } from '../data/book.data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() {
    return books;
  }
}
