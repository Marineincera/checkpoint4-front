import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryPriceService {

  static URL = 'http://localhost:3000/categoriesprices';

  constructor(private wsh: WshelperService) { }


  getAll() {
    return this.wsh.get(CategoryPriceService.URL);
  }

  postCategory(performance) {
    return this.wsh.post(CategoryPriceService.URL, performance);
  }

  getOneCategory(id: number) {
    return this.wsh.get(CategoryPriceService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(CategoryPriceService.URL + 'delete/' + id);
  }

  update(id, performance) {
    return this.wsh.put(CategoryPriceService.URL + 'modify/' + id, performance);
  }
}
