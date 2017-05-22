import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GameModule} from './game/game.module';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    GameModule
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
