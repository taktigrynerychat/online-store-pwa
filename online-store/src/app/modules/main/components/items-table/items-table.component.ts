import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Sku } from '../../../../models/skus.model';
import { SkusStateQuery } from '../../../../services/state/skus/skus-state.query';
import { SkusStateService } from '../../../../services/state/skus/skus-state.service';
import { SkusStateStore } from '../../../../services/state/skus/skus-state.store';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'lol-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
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

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${ this.isAllSelected() ? 'select' : 'deselect' } all`;
  //   }
  //   return `${ this.selection.isSelected(row) ? 'deselect' : 'select' } row ${ row.position + 1 }`;
  // }

}
