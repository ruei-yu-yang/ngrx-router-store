import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './core/components/app-footer/app-footer.component';
import { LoaderComponent } from './core/components/loader/loader.component';
import { UserCardComponent } from './core/components/user-card/user-card.component';
import { HomeComponent } from './home/home.component';
import { AppEffects } from './store/app.effects';
import * as appStore from './store/app.reducer';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppFooterComponent,
    UserCardComponent,
    LoaderComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({app: appStore.reducer}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
