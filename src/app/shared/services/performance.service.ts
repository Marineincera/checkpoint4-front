import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  static URL = 'http://localhost:3000/performances/';

  constructor(private wsh: WshelperService) { }



  getAllPerformance() {
    return this.wsh.get(PerformanceService.URL);
  }

  postPerformance(performance) {
    return this.wsh.post(PerformanceService.URL, performance);
  }

  getOnePerformance(id: number) {
    return this.wsh.get(PerformanceService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(PerformanceService.URL + 'delete/' + id);
  }

  update(id, performance) {
    return this.wsh.put(PerformanceService.URL + 'modify/' + id, performance);
  }
}
