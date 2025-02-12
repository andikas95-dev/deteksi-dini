import {
  Cross2Icon,
  MixerHorizontalIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { CustomButton } from '@/components/customs/custom-button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';

import { priorities, statuses } from './data/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { Button } from '@/components/ui/button';

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  onCreate?: () => void;
  placeholder?: string;
  searchColumn?: string;
}

export function DataTableToolbar<TData>({
  table,
  onCreate,
  placeholder,
  searchColumn
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
        {searchColumn && <Input
          placeholder={placeholder}
          value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn(searchColumn)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />}
        {/* <div className="flex gap-x-2">
          {table.getColumn('status') && (
            <DataTableFacetedFilter
              column={table.getColumn('status')}
              title="Status"
              options={statuses}
            />
          )}
          {table.getColumn('priority') && (
            <DataTableFacetedFilter
              column={table.getColumn('priority')}
              title="Priority"
              options={priorities}
            />
          )}
        </div> */}
        {isFiltered && (
          <CustomButton
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </CustomButton>
        )}
      </div>
      <div className="flex items-center gap-x-2">
        <CustomButton
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={onCreate}
        >
          <Pencil1Icon className="mr-2 h-4 w-4" />
          Buat Baru
        </CustomButton>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
