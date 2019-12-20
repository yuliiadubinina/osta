import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader,  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material.module';

import { NgSemanticModule } from 'ng-semantic';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FirstPageComponent } from './components/pages/first-page/first-page.component';
import { SecondPageComponent } from './components/pages/second-page/second-page.component';
import { NavComponent } from './components/nav/nav.component';
import { ThirdPageComponent } from './components/pages/third-page/third-page.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FirstPageComponent,
    SecondPageComponent,
    NavComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    
    MaterialModule,
    NgSemanticModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
