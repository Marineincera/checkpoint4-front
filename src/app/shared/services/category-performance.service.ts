import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryPerformanceService {

  static URL = 'http://localhost:3000/';

  constructor() { }
}
