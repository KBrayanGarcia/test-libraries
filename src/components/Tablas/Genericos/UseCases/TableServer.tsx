import { TableProps } from '../types';
import { BaseTable } from '../components/BaseTable';

export function TableServer<T extends object>(props: TableProps<T>) {
  return <BaseTable {...props} />;
}

export default TableServer;
