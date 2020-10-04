import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { SkuParent, SkuParentChip } from '../../../../models/skus.model';
import { SkusService } from '../../../../services/api/skus.service';
import { CategoriesQuery } from '../../../../services/state/categories/categories.query';
import { CategoriesService } from '../../../../services/state/categories/categories.service';
import { CategoriesStore } from '../../../../services/state/categories/categories.store';

@Component({
  selector: 'lol-items-table-config',
  templateUrl: './items-table-config.component.html',
  styleUrls: ['./items-table-config.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsTableConfigComponent implements OnInit{

  selectedChips: Set<ID> = new Set<ID>();

  constructor(private categoriesService: CategoriesService,
              private categoriesQuery: CategoriesQuery,
              private categoriesStore: CategoriesStore,
              private skusService: SkusService) {
  }

  categories$ = this.categoriesQuery.categoriesForChips$;

  selectChip(id: ID): void {
    this.categoriesService.updateSelectedChips(id);
  }

  public ngOnInit(): void {
    this.categoriesService.getCategories().subscribe();
  }


}
