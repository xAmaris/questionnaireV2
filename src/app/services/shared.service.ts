import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly showBack$ = new BehaviorSubject<boolean>(false);
  private readonly showPreview$ = new Subject<boolean>();

  constructor() {}

  get showBack(): Observable<boolean> {
    return this.showBack$.asObservable();
  }
  get showPreview(): Observable<boolean> {
    return this.showPreview$.asObservable();
  }

  setShowButton(x: boolean): void {
    this.showBack$.next(x);
  }
  setShowPreview(x: boolean): void {
    this.showPreview$.next(x);
  }
}
