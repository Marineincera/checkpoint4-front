import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryPerformanceService {

  static URL = 'http://localhost:3000/categoriesperformances/';

  constructor(private wsh: WshelperService) { }



  getAllCategoryPerformance() {
    return this.wsh.get(CategoryPerformanceService.URL);
  }

  postCategoryPerformance(performance) {
    return this.wsh.post(CategoryPerformanceService.URL, performance);
  }

  getOneCategoryPerformance(id: number) {
    return this.wsh.get(CategoryPerformanceService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(CategoryPerformanceService.URL + 'delete/' + id);
  }

  update(id, performance) {
    return this.wsh.put(CategoryPerformanceService.URL + 'modify/' + id, performance);
  }
}
