import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  static URL = 'http://localhost:3000/';

  constructor() { }
}
