import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  loading: boolean;
  loadingOverlay: boolean;

  routerSub = new Subscription();

  constructor(
    private readonly router: Router,
    private readonly cd: ChangeDetectorRef
  ) {
    this.routerSub = this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  // loading component handler
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.loading = false;
      this.loadingOverlay = false;
      this.cd.markForCheck();
    }
  }

  redirectTo(data: string): void {
    this.loadingOverlay = true;
    this.router.navigateByUrl(data);
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
