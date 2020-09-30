import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lol-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
