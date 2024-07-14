import { Component, EventEmitter, Output } from '@angular/core';
import { PageCommunicationService } from '../models/services/page-communication.service';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  constructor(
    private pageCommunicationService: PageCommunicationService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    this.translate.use('de');
  }

  invokeTab2ChangeDetailMethod(e: any) {
    this.pageCommunicationService.callTab2ChangeDetailMethod(e.detail.value);
    console.log("ionChange fired with value: " + e.detail.value);
  }

  changeLanguage(e: any) {
    console.log("Language changed to: " + e.detail.value);
    const selectedLanguage = e.detail.value;
    this.translate.use(selectedLanguage).subscribe(() => {
      this.cdr.detectChanges(); // Force update the view
    });
  }
}
