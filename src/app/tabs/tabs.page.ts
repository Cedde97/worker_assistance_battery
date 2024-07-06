import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;
  constructor() {}
}
