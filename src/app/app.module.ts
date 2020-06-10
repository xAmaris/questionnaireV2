import { LoadingScreenModule } from './shared/loading-screen/loading-screen.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBarModule } from './core/main-bar/main-bar.module';
import { library } from '@fortawesome/fontawesome-svg-core';
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

library.add(
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainBarModule,
    LoadingOverlayModule,
    LoadingScreenModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
