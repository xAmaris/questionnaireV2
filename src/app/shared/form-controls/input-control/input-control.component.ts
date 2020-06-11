import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputControlComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() autocomplete: string;
  @Input() setAutofocus: boolean;
  @Input() controlHint: string;

  @Output() controlFocus = new EventEmitter<FocusEvent>();
  @Output() controlBlur = new EventEmitter<FocusEvent>();
  @Output() controlKeydown = new EventEmitter<KeyboardEvent>();

  constructor() {}

  ngOnInit(): void {}

  onFocus(e: FocusEvent): void {
    this.controlFocus.emit(e);
  }
  onBlur(e: FocusEvent): void {
    this.controlBlur.emit(e);
  }
  onKeydown(e: KeyboardEvent): void {
    this.controlKeydown.emit(e);
  }
}
