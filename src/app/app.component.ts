import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.use('en');
    this.translate.use('de');
  }

  ngOnInit() {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('de');
  }
}
