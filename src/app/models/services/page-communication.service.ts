import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageCommunicationService {
  private invokeTab2ChangeDetailMethod = new Subject<string>();
  invokeTab2ChangeDetailMethod$ = this.invokeTab2ChangeDetailMethod.asObservable();

  constructor() { }

  callTab2ChangeDetailMethod(detail_level:string) {
    this.invokeTab2ChangeDetailMethod.next(detail_level);
  }
}
