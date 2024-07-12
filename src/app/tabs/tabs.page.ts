import { Component, EventEmitter, Output } from '@angular/core';
import { PageCommunicationService } from '../models/services/page-communication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;
  constructor(private pageCommunicationService: PageCommunicationService) {}

  invokeTab2ChangeDetailMethod(e:any) {
    this.pageCommunicationService.callTab2ChangeDetailMethod(e.detail.value);
    console.log("hallo")
    console.log('ionChange fired with value: ' + e.detail.value);
  }
}
