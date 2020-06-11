import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-base-auth',
  templateUrl: './base-auth.component.html',
  styleUrls: ['./base-auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseAuthComponent implements OnInit {
  @Input() header: string;
  @Input() loading: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;

  @ContentChild('headerContent') headerContentTmpl: TemplateRef<any>;
  @ContentChild('main') mainTmpl: TemplateRef<any>;
  @ContentChild('btnBox') btnBoxTmpl: TemplateRef<any>;
  @ContentChild('additional') additionalTmpl: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
