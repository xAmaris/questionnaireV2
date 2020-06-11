import { GuidGuard } from './auth/guards/guid.auth';
import { RoleGuard } from './auth/guards/role.auth';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfig } from './app.config';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from './auth/guards/guard.auth';
import { ViewformGuard } from './auth/guards/viewform.auth';
import { JwtInterceptor } from './auth/jwt.interceptor';

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
  providers: [
    AppConfig,
    AuthGuard,
    RoleGuard,
    GuidGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
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
