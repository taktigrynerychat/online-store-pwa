import { SelectionModel } from '@angular/cdk/collections';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SKUS_TABLE_COLUMNS } from '../../../../constants/table.constants';
import { Sku } from '../../../../models/skus.model';
import { DisplayedColumn } from '../../../../models/table.model';
import { SkusStateQuery } from '../../../../services/state/skus/skus-state.query';
import { getChildValue } from '../../../../utils/array.utils';

@Component({
  selector: 'lol-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsTableComponent implements OnInit, OnDestroy {

  noDataMessage: string;
  columns: DisplayedColumn[] = SKUS_TABLE_COLUMNS;
  dataSource: MatTableDataSource<Sku> = new MatTableDataSource<Sku>([]);
  selection = new SelectionModel<Sku>(true, []);

  private unsub: Subject<any> = new Subject<any>();

  constructor(private skusStateQuery: SkusStateQuery,
              private cdr: ChangeDetectorRef,
              private datePipe: DatePipe,
              private currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
    this.skusStateQuery.filteredSkusTable$
      .pipe(takeUntil(this.unsub))
      .subscribe(data => {
        this.dataSource = data;
        this.noDataMessage = 'no data :(';
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsub.next();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Sku): string {
    if (!row) {
      return `${ this.isAllSelected() ? 'select' : 'deselect' } all`;
    }
    return `${ this.selection.isSelected(row) ? 'deselect' : 'select' } row ${ +row.id + 1 }`;
  }

  getTableKeys(): string[] {
    return ['select', ...this.columns.map(column => column.key)];
  }

  getParent(sku: Sku, keyString: string): any {
    const keys = keyString.split('.');
    let tmp;
    keys.forEach(key => {
      tmp = sku[key];
    });
    return tmp;
  }

  getCellContent(data: any, column: DisplayedColumn): any {
    if (column.parent) {
      return getChildValue(data, column.parent);
    } else {
      switch (column.key) {
        case 'lastChange':
          return this.datePipe.transform(data, 'dd.MM.yyy hh:mm');
        case 'price':
          return this.currencyPipe.transform(data, '$');
        default:
          return data;
      }
    }
  }
}
