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
      transition('* => *', [

        // style({ transform: 'translateY(-100vh)' }),
        // animate('.3s'),
        // animateChild(),
        // query(
        //   ':enter',
        //   [style({ opacity: 0 }),
        //    style({ transform: 'translateY(0)' }), 
        //   ],

        //   { optional: true }
        // ),
        // query(
        //   ':leave',
        //   [
        //     animateChild(),
        //     style({ opacity: 1 }),
        //     // style({ transform: 'translateY(0)' }),

        //     animate('0.3s', style({ opacity: 0 })),
        //     // animate('1s', style({ transform: 'translateY(-100vh)' })),


        //   ],
        //   { optional: true }
        // ),
        // query(
        //   ':enter',


        //   [
        //     style({ opacity: 0 }),
        //     // style({ transform: 'translateY(100vh)' }), 

        //     animate('0.3s', style({ opacity: 1 }))
        //     // animate('1s', style({ transform: 'translateY(0)' })),

        //   ],
        //   { optional: true }
        // ),
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
  }


  @HostListener('window:keydown', ['$event']) onKeyDown(e) {

    console.log(e);



    if (e.keyCode == 40) {
      console.log(this.router.url);
      console.log('keyup');
      switch (this.router.url) {
        case '/':
          this.router.navigateByUrl('first')
          break;
        case '/first':
          this.router.navigateByUrl('second')
          break;
        case '/second':
          this.router.navigateByUrl('third')
          break;
        default:
          break;
      }
    }
    if (e.keyCode == 38) {
      console.log(this.router.url);
      console.log('keyup');
      switch (this.router.url) {
        case '/first':
          this.router.navigateByUrl('')
          break;
        case '/second':
          this.router.navigateByUrl('first')
          break;
        case '/third':
          this.router.navigateByUrl('second')
          break;
        default:
          break;
      }
    }
  }



  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  prepareRoute(outlet: RouterOutlet) {
    // console.log(outlet);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
