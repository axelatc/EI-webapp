import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
    translate.addLangs(['en']);
  }
}
