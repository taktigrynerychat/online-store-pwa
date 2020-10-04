import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Sku } from '../../../../models/skus.model';
import { SkusStateQuery } from '../../../../services/state/skus/skus-state.query';

export interface DisplayedColumn {
  key: string;
  title: string;
  parent?: string;
}

@Component({
  selector: 'lol-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsTableComponent implements OnInit, OnDestroy {
  noDataMessage: string;

  columns: DisplayedColumn[] = [
    {
      key: 'name',
      title: 'SKU name',
    },
    {
      key: 'price',
      title: 'Price',
    },
    {
      key: 'parent',
      title: 'Category',
      parent: 'category.name',
    },
    {
      key: 'lastChange',
      title: 'Last Change',
    },
  ];

  dataSource: MatTableDataSource<Sku> = new MatTableDataSource<Sku>([]);
  selection = new SelectionModel<Sku>(true, []);

  private unsub: Subject<any> = new Subject<any>();

  constructor(private skusStateQuery: SkusStateQuery,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.skusStateQuery.filteredSkusTable$
      .pipe(takeUntil(this.unsub))
      .subscribe(data => {
        this.dataSource = data;
        this.noDataMessage = 'OOPS, No data was found :(';
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

  getTableKeys(): string[] {
    return this.columns.map(column => column.key);
  }

  getParent(sku: Sku, keyString: string): any {
    const keys = keyString.split('.');
    let tmp;
    keys.forEach(key => {
      tmp = sku[key];
    });
    return tmp;
  }

}
