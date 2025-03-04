import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import { CustomButton } from '@/components/customs/custom-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaPenToSquare, FaTrashCan, FaMagnifyingGlass } from 'react-icons/fa6';

import { labels } from './data/data';
import { taskSchema } from './data/schema';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleDetail?: () => void;
  handleActive?: () => void;
  textActive?: string
}

export function DataTableRowActions<TData>({
  row,
  handleEdit,
  handleDelete,
  handleDetail,
  handleActive,
  textActive
}: DataTableRowActionsProps<TData>) {
  // const task = taskSchema.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CustomButton
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </CustomButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {handleEdit && (
          <DropdownMenuItem onClick={handleEdit}>
            <DropdownMenuIcon>
              <FaPenToSquare />
            </DropdownMenuIcon>
            Edit
          </DropdownMenuItem>
        )}
        {handleActive && (
          <DropdownMenuItem onClick={handleActive}>
            <DropdownMenuIcon>
              <FaPenToSquare />
            </DropdownMenuIcon>
            {textActive}
          </DropdownMenuItem>
        )}
        {handleDelete && (
          <DropdownMenuItem onClick={handleDelete}>
            <DropdownMenuIcon>
              <FaTrashCan />
            </DropdownMenuIcon>
            Delete
          </DropdownMenuItem>
        )}
        {handleDetail && (
          <DropdownMenuItem onClick={handleDetail}>
            <DropdownMenuIcon>
            <FaMagnifyingGlass />
            </DropdownMenuIcon>
            Detail
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
