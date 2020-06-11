import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { basicTransition } from './animations/auth-transition.animation';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [basicTransition],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
