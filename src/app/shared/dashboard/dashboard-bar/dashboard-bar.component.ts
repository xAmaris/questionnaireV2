import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-dashboard-bar',
  templateUrl: './dashboard-bar.component.html',
  styleUrls: ['./dashboard-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBarComponent {
  @Input() groupTitle: string;
  @Input() buttonDets: string;
  @Output() buttonClick = new EventEmitter<boolean>();

  onButtonClick() {
    this.buttonClick.emit(true);
  }
}
