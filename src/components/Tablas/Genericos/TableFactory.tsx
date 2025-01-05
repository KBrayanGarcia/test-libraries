import TableLocal from './UseCases/TableLocal';
import TableServer from './UseCases/TableServer';
import { TableProps, TableType } from './types';

export class TableFactory {
  static createTable<T extends object>({ ...props }: TableProps<T>) {
    switch (props.type) {
      case TableType.LOCAL:
        return <TableLocal {...props} />;
      case TableType.SERVER:
        return <TableServer {...props} />;
      default:
        throw new Error(`Tipo de tabla no soportado: ${props.type}`);
    }
  }
}

export function CustomTable<T extends object>(props: TableProps<T>) {
  if (!props.columns) {
    return <div>No columns available</div>;
  }

  return TableFactory.createTable(props);
}
