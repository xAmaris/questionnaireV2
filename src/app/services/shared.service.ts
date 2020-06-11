import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly showBack$ = new BehaviorSubject<boolean>(false);
  private readonly showUserInfo$ = new BehaviorSubject<boolean>(false);
  private readonly showPreview$ = new Subject<boolean>();
  private readonly showAdminMenu$ = new Subject<boolean>();

  constructor(private readonly router: Router) {}

  get showBack(): Observable<boolean> {
    return this.showBack$.asObservable();
  }
  get showPreview(): Observable<boolean> {
    return this.showPreview$.asObservable();
  }
  get showAdminMenu(): Observable<boolean> {
    return this.showAdminMenu$.asObservable();
  }
  get showUserInfo(): Observable<boolean> {
    return this.showUserInfo$.asObservable();
  }

  setShowButton(x: boolean): void {
    this.showBack$.next(x);
  }
  setShowPreview(x: boolean): void {
    this.showPreview$.next(x);
  }
  setShowAdminMenu(x: boolean): void {
    this.showAdminMenu$.next(x);
  }
  setShowUserInfo(x: boolean): void {
    this.showUserInfo$.next(x);
  }

  routeSwitch(role: string): void {
    switch (role) {
      case 'student':
        this.router.navigateByUrl('/app/student');
        break;
      case 'careerOffice':
        this.router.navigateByUrl('/app/admin/d/survey/(s:a//m:a)');
        break;
    }
  }
}
