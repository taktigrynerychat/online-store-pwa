import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ID } from '@datorama/akita';
import { CategoriesQuery } from '../../../../services/state/categories/categories.query';
import { CategoriesService } from '../../../../services/state/categories/categories.service';

@Component({
  selector: 'lol-items-table-config',
  templateUrl: './items-table-config.component.html',
  styleUrls: ['./items-table-config.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsTableConfigComponent {

  constructor(private categoriesService: CategoriesService,
              private categoriesQuery: CategoriesQuery) {
  }

  categories$ = this.categoriesQuery.categoriesForChips$;

  selectChip(id: ID): void {
    this.categoriesService.updateSelectedChips(id);
  }

}
