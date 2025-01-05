import { QueryKey } from '@tanstack/react-query';
import { ColumnDef, TableOptions } from '@tanstack/react-table';

export enum TableType {
  LOCAL = 'LOCAL',
  SERVER = 'SERVER',
}

export interface QueryProps<T extends object> {
  fn: () => Promise<T[]>;
  queryKey: QueryKey;
}

export interface TableProps<T extends object> extends QueryProps<T> {
  columns: ColumnDef<T>[];
  type: TableType;
}

export interface BaseTableProps<T extends object>
  extends Omit<TableOptions<T>, 'getCoreRowModel' | 'data'>,
    QueryProps<T> {}
