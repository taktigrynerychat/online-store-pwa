import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesQuery } from '../../services/state/categories/categories.query';
import { CategoriesService } from '../../services/state/categories/categories.service';
import { CategoriesStore } from '../../services/state/categories/categories.store';
import { SkusStateQuery } from '../../services/state/skus/skus-state.query';
import { SkusStateService } from '../../services/state/skus/skus-state.service';
import { SkusStateStore } from '../../services/state/skus/skus-state.store';


@Component({
  selector: 'lol-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {

  private unsub: Subject<any> = new Subject<any>();

  constructor(
    private categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery,
    private categoriesStore: CategoriesStore,
    private skusStateService: SkusStateService,
    private skusStateQuery: SkusStateQuery,
    private skusStateStore: SkusStateStore,
  ) {
  }

  ngOnInit(): void {
    this.skusStateService.getAll().pipe(takeUntil(this.unsub)).subscribe();
    this.categoriesService.getCategories().pipe(takeUntil(this.unsub)).subscribe();
  }

  ngOnDestroy(): void {
    this.unsub.next();
  }

}
