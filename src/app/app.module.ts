import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { HtmlCameraComponent } from './components/html-camera/html-camera.component';
import { NgCameraComponent } from './components/ng-camera/ng-camera.component';
import { OptionsPanelComponent } from './components/options-panel/options-panel.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PicColorCanvasComponent } from './components/pic-color-canvas/pic-color-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCameraComponent,
    NgCameraComponent,
    OptionsPanelComponent,
    ScoreboardComponent,
    PicColorCanvasComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
