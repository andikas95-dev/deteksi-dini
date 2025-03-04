'use client';
import { DataTable } from '@/components/customs/data-table/data-table';
import { DataTableColumnHeader } from '@/components/customs/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/customs/data-table/data-table-row-actions';
import LoadingPage from '@/components/shared-components/loading-page';
import { DataGejala } from '@/helpers/types/gejala';
import { locbe } from '@/lib/axiosInstance';
import {
  useIsFetching,
  useIsMutating,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { toast } from 'sonner';
import { useToggle } from 'usehooks-ts';
import GejalaForm from '../forms/GejalaForm';
import { Badge } from '@/components/ui/badge';

function Gejala() {
  // const [listGejala, setListGejala] = useState<{
  //   error: { message: string } | null;
  //   status: { status: number; statusText: string };
  //   data: DataGejala[];
  // }>({
  //   error: null,
  //   status: { status: 0, statusText: '' },
  //   data: [],
  // });

  const loadingMutate = useIsMutating();
  const loadingFetch = useIsFetching();

  const [dialogCreate, , setDialogCreate] = useToggle();
  const [dataRow, setDataRow] = useState();
  const [typeModal, setTypeModal] = useState<'create' | 'update'>('create');

  const {
    data: listDataGejala,
    isLoading: isLoadingGejala,
    isFetching: isFetchingGejala,
    refetch: refetchGejala,
  } = useQuery({
    queryKey: ['listDataGejala', `For Master`],
    queryFn: async () => {
      const res = await locbe.get('/master/gejala');

      // const resData = res.data.map((item: any) => ({
      //   ...item,
      //   cf_user: null,
      // }));

      return res;
    },
  });

  const { mutateAsync: mutateGejala } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.post('/master/gejala', {
        nama_gejala: data.nama_gejala,
        cf_pakar: Number(data.cf_pakar),
      });
      // prisma.childs.create({
      //   data: {
      //     user_id: session?.data?.user?.id,
      //     nama_anak: data.nama_anak,
      //     berat_badan: 0,
      //     tinggi_badan: 0,
      //     tanggal_lahir: new Date(data.tanggal_lahir),
      //     createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      //     updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      //   }
      // })
      return res;
    },
    onSuccess: () => {
      toast.success('Berhasil menambahkan data basis pengetahuan');
      refetchGejala();
      setDialogCreate(false);
      // router.push('/data-anak');
    },
  });

  const { mutateAsync: mutateEditGejala } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.patch(`/master/gejala/${data?.id}`, {
        gejala_id: data.gejala_id,
        nama_gejala: data.nama_gejala,
        cf_pakar: Number(data.cf_pakar),
      });
      // prisma.childs.create({
      //   data: {
      //     user_id: session?.data?.user?.id,
      //     nama_anak: data.nama_anak,
      //     berat_badan: 0,
      //     tinggi_badan: 0,
      //     tanggal_lahir: new Date(data.tanggal_lahir),
      //     createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      //     updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      //   }
      // })
      return res;
    },
    onSuccess: () => {
      toast.success('Berhasil merubah data basis pengetahuan');
      refetchGejala();
      setTypeModal('create');
      setDataRow(undefined);
      setDialogCreate(false);
      // router.push('/data-anak');
    },
  });

  const { mutateAsync: mutateDeleteGejala } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.delete(`/master/gejala/${data?.id}`);
      // prisma.childs.create({
      //   data: {
      //     user_id: session?.data?.user?.id,
      //     nama_anak: data.nama_anak,
      //     berat_badan: 0,
      //     tinggi_badan: 0,
      //     tanggal_lahir: new Date(data.tanggal_lahir),
      //     createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      //     updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      //   }
      // })
      return res;
    },
    onSuccess: () => {
      toast.success('Berhasil Merubah data basis pengetahuan');
      refetchGejala();
      // router.push('/data-anak');
    },
  });

  const columns: ColumnDef<DataGejala>[] = [
    {
      accessorKey: 'gejala_id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue('gejala_id')}</div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'nama_gejala',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nama Pengetahuan" />
      ),
      cell: ({ row }) => <div>{row.getValue('nama_gejala')}</div>,
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'cf_pakar',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nilai Pakar" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue('cf_pakar')}</div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'isDisabled',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue('isDisabled');
        console.log('🚀 ~ Gejala ~ status:', status);
        return (
          <Badge variant={status ? 'destructive' : 'active'}>
            {status ? 'Tidak Aktif' : 'Aktif'}
          </Badge>
        );
      },
      enableSorting: false,
      // enableHiding: false,
    },
    // {
    //   accessorKey: 'nama gejala',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Nama Gejala" />
    //   ),
    //   cell: ({ row }) => {
    //     // const label = labels.find((label) => label.value === row.original.label)

    //     return (
    //       <div className="flex space-x-2">
    //         {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
    //         <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
    //           {row.getValue('nama_gejala')}
    //         </span>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   accessorKey: 'solusi',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Solusi" />
    //   ),
    //   cell: ({ row }) => {
    //     // const label = labels.find((label) => label.value === row.original.label)

    //     return (
    //       <div className="flex space-x-2">
    //         {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
    //         <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
    //           {row.getValue('solusi')}
    //         </span>
    //       </div>
    //     );
    //   },
    // },
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
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          handleEdit={() => {
            console.log('🚀 ~ Gejala ~ row:', row.original);
            setDataRow(row.original as any);
            setTypeModal('update');
            setDialogCreate(true);
          }}
          handleActive={() => mutateDeleteGejala(row.original)}
          textActive={row.original.isDisabled ? 'Aktifkan' : 'Nonaktifkan'}
        />
      ),
    },
  ];

  // const handleSubmit = async (data: any) => {
  //   mutateGejala
  //   console.log('🚀 ~ handleSubmit ~ data:', data);
  //   // const res = await locbe.post('/master/gejala', data);
  //   // console.log('🚀 ~ handleSubmit ~ res:', res);
  // }

  if (isLoadingGejala || isFetchingGejala) {
    return <LoadingPage show />;
  }

  return (
    <div className="space-y-3">
      <GejalaForm
        submitForm={(data) => {
          if (typeModal === 'create') {
            mutateGejala(data);
          }
          if (typeModal === 'update') {
            mutateEditGejala(data);
          }
        }}
        open={dialogCreate}
        setOpenChange={() => {
          setDialogCreate(false);
          setTypeModal('create');
        }}
        type={typeModal}
        dataEdit={dataRow}
      />
      <h3 className="">Basis Pengetahuan</h3>
      <DataTable
        columns={columns}
        data={listDataGejala?.data || []}
        onCreate={() => {
          setDialogCreate(true);
        }}
        filterSearchTopToolbar="nama_gejala"
        placeholderTopToolbar="Cari Nama Basis Pengetahuan..."
      />
    </div>
  );
}

export default Gejala;
