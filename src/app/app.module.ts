import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingScreenModule } from './shared/loading-screen/loading-screen.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBarModule } from './core/main-bar/main-bar.module';
import { faChartBar, faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faBars,
  faBriefcase,
  faClone,
  faCog,
  faEllipsisH,
  faEllipsisV,
  faFileExcel,
  faGripVertical,
  faPen,
  faPlus,
  faSearch,
  faSortDown,
  faSortUp,
  faTimes,
  faTrash,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';
import { LoadingOverlayModule } from './shared/loading-overlay/loading-overlay.module';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainBarModule,
    LoadingOverlayModule,
    LoadingScreenModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTimes,
      faBars,
      faPlus,
      faTrash,
      faSortDown,
      faSortUp,
      faGripVertical,
      faPen,
      faBriefcase,
      faCog,
      faEye,
      faClone,
      faUserAlt,
      faEllipsisV,
      faSearch,
      faEllipsisH,
      faChartBar,
      faArrowLeft,
      faFileExcel
    );
  }
}
