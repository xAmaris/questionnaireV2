import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTileComponent implements OnInit {
  @Input() itemData: any;

  @Output() tileClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  boxClick(item: any) {
    this.tileClick.emit(item);
  }
}
