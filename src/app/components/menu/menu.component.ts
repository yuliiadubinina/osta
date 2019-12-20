import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SemanticSidebarComponent } from 'ng-semantic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @ViewChild('invertedSidebar', {static: false}) invertedSidebar: SemanticSidebarComponent;

  constructor(public translateService: TranslateService, public router: Router) { }

  ngOnInit() {
    this.translateService.setDefaultLang('ru');
    console.log(this.translateService.currentLang);
  }
  
  


  setLang(lang) {
    this.translateService.use(lang);
  }

  goToRoute(url) {
    this.router.navigateByUrl(url);
  }

}
