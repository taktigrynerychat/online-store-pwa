import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SkuParent, SkuParentChip } from '../../../../models/skus.model';
import { SkusService } from '../../../../services/api/skus.service';

@Component({
  selector: 'lol-items-table-config',
  templateUrl: './items-table-config.component.html',
  styleUrls: ['./items-table-config.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsTableConfigComponent {

  categories$ = this.skusService.getParents()
    .pipe(
      map((parents: SkuParent[]) => {
          return parents.map(item => ({...item, selected: false} as SkuParentChip));
        },
      ),
    );

  constructor(private skusService: SkusService) {
  }


}
