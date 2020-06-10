import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  openingCreatorLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}
}
