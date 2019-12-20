import { Component, HostListener, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation, newAnimation } from './animation';
import { trigger, transition, style, query, animate, animateChild, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('first => second', [
        group([
          query(':leave', [
            style({ transform: 'translateY(0)' }),

            animate('.5s', style({ transform: 'translateY(-100vh)' })),
            // animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(100vh)' }),

            animate('.5s', style({ transform: 'translateY(0)' })),
            // animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true })
        ]),
      ]),
      transition('second => first', [
        group([
          query(':leave', [
            style({ transform: 'translateY(0)' }),

            animate('.5s', style({ transform: 'translateY(100vh)' })),
            // animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(-100vh)' }),

            animate('.5s', style({ transform: 'translateY(0)' })),
            // animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true })
        ]),
      ])


    ])
  ]
})





export class AppComponent {
  config: any;
  fullpage_api: any;
  title = 'osta';

  // @HostBinding('@myAnimation') myAnimation = true;


  constructor(public translateService: TranslateService, public router: Router) {
    this.translateService.setDefaultLang('ua');
    this.translateService.use('ua');
  }

  ngOnInit() {
    console.log(this.router.config);
  }


  @HostListener('window:keydown', ['$event']) onKeyDown(e) {

      const currentUrlItem = this.router.config.find(f => f.path == this.router.url.split('/')[1]);
      const currentUrlItemIndex = this.router.config.indexOf(currentUrlItem);

      if (e.keyCode == 40 && this.router.config[currentUrlItemIndex + 1]) {
        const urlForNavigate = this.router.config[currentUrlItemIndex + 1].path;
        this.router.navigateByUrl(urlForNavigate);
      } 

      if (e.keyCode == 38 &&  this.router.config[currentUrlItemIndex - 1]) {
        const urlForNavigate = this.router.config[currentUrlItemIndex - 1].path;
        this.router.navigateByUrl(urlForNavigate);
      }

  }

  @HostListener('window:mousewheel', ['$event']) onMousewheel(e) {

    const currentUrlItem = this.router.config.find(f => f.path == this.router.url.split('/')[1]);
    const currentUrlItemIndex = this.router.config.indexOf(currentUrlItem);

    if (e.deltaY == -100 && this.router.config[currentUrlItemIndex + 1]) {
      const urlForNavigate = this.router.config[currentUrlItemIndex + 1].path;
      this.router.navigateByUrl(urlForNavigate);
    } 

    if (e.deltaY == 100 &&  this.router.config[currentUrlItemIndex - 1]) {
      const urlForNavigate = this.router.config[currentUrlItemIndex - 1].path;
      this.router.navigateByUrl(urlForNavigate);
    }
  }


  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }




  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  prepareRoute(outlet: RouterOutlet) {
    // console.log(outlet);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
