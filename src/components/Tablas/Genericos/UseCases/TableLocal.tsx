import { BaseTable } from '../components/BaseTable';
import { TableProps } from '../types';

export function TableLocal<T extends object>(props: TableProps<T>) {
  return <BaseTable {...props} />;
}

export default TableLocal;
