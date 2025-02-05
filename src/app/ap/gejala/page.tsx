'use client';
import {useEffect, useState} from 'react';
import { columns } from '@/components/customs/data-table/columns';
import { DataTable } from '@/components/customs/data-table/data-table';
import { DataTableColumnHeader } from '@/components/customs/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/customs/data-table/data-table-row-actions';
import { tasks } from '@/components/customs/data-table/data/tasks';
import { DataGejala } from '@/helpers/types/gejala';
import prisma from '@/lib/prisma';
import { ColumnDef } from '@tanstack/react-table';
import useListGejala from '@/helpers/hooks/admin/useListGejala';

// export const getListGejala = async () => {
//   try {
//     const data = await prisma.gejala.findMany();
//     // return NextResponse.json(
//     //   {
//     //     data,
//     //     status: 200,
//     //   },
//     //   { status: 200 }
//     // );
//     return {
//       error: null,
//       status: { status: 200, statusText: 'OK' },
//       data,
//     };
//   } catch (error) {
//     return {
//       error: { message: (error as Error).message },
//       status: { status: 500, statusText: 'Internal Server Error' },
//       data: [],
//     };
//   }
// };

function Gejala() {
  const [listGejala, setListGejala] = useState<{
    error: { message: string } | null;
    status: { status: number; statusText: string };
    data: DataGejala[];
  }>({
    error: null,
    status: { status: 0, statusText: '' },
    data: [],
  });

  const test = useListGejala();
  console.log("🚀 ~ Gejala ~ test:", test)


  const columns: ColumnDef<DataGejala>[] = [
    // {
    //   id: 'select',
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && 'indeterminate')
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label='Select all'
    //       className='translate-y-[2px]'
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label='Select row'
    //       className='translate-y-[2px]'
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Id" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue('gejala_id')}</div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'nama gejala',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nama Gejala" />
      ),
      cell: ({ row }) => {
        // const label = labels.find((label) => label.value === row.original.label)

        return (
          <div className="flex space-x-2">
            {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
            <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
              {row.getValue('nama_gejala')}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: 'solusi',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Solusi" />
      ),
      cell: ({ row }) => {
        // const label = labels.find((label) => label.value === row.original.label)

        return (
          <div className="flex space-x-2">
            {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
            <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
              {row.getValue('solusi')}
            </span>
          </div>
        );
      },
    },
    // {
    //   accessorKey: 'status',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Status" />
    //   ),
    //   cell: ({ row }) => {
    //     const status = statuses.find(
    //       (status) => status.value === row.getValue('status')
    //     );

    //     if (!status) {
    //       return null;
    //     }

    //     return (
    //       <div className="flex w-[100px] items-center">
    //         {status.icon && (
    //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
    //         )}
    //         <span>{status.label}</span>
    //       </div>
    //     );
    //   },
    //   filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id));
    //   },
    // },
    // {
    //   accessorKey: 'priority',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Priority" />
    //   ),
    //   cell: ({ row }) => {
    //     const priority = priorities.find(
    //       (priority) => priority.value === row.getValue('priority')
    //     );

    //     if (!priority) {
    //       return null;
    //     }

    //     return (
    //       <div className="flex items-center">
    //         {priority.icon && (
    //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
    //         )}
    //         <span>{priority.label}</span>
    //       </div>
    //     );
    //   },
    //   filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id));
    //   },
    // },
    {
      id: 'actions',
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="">Master Gejala</h3>
      <DataTable columns={columns} data={[]} />
    </div>
  );
}

export default Gejala;
