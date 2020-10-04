import { ID } from '@datorama/akita';

export interface BasicSku {
  readonly id: ID;
  readonly name: string;
  readonly price: number;
}

export interface Sku extends BasicSku {
  readonly lastChange: Date;
  readonly parent: SkuParent;
}

export interface SkuParent {
  readonly id: ID;
  readonly name: string;
}

export interface SkuParentChip extends SkuParent {
  selected: boolean;
}

export interface SkusWithParent {
  readonly sku: BasicSku[];
  readonly group: SkuParent;
}

export interface SkuFilter {
  lastChange: Date;
}

export interface SkuUpdate {
  id?: ID;
  name?: string;
  price?: number;
}

ex
