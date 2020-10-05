import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';


export interface KeyValueTableItem {
  key: string;
  value: any;
}

@Component({
  selector: 'lol-key-value-table',
  templateUrl: './key-value-table.component.html',
  styleUrls: ['./key-value-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyValueTableComponent implements OnInit {
  @Input() table: KeyValueTableItem[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
