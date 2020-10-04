import { DisplayedColumn } from '../models/table.model';

export const SKUS_TABLE_COLUMNS: DisplayedColumn[] = [
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
