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
import UserForm from '../forms/UserForm';
import { format } from 'date-fns';
import PasienForm from '../forms/PasienForm';
import PasienFormBackup from '../forms/PasienFormBackup';

function MasterPasien() {
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
    data: listDataPasien,
    isLoading: isLoadingPasien,
    isFetching: isFetchingPasien,
    refetch: refetchGejala,
  } = useQuery({
    queryKey: ['listDataPasien', `For Master`],
    queryFn: async () => {
      const res = await locbe.get('/master/pasien');

      // const resData = res.data.map((item: any) => ({
      //   ...item,
      //   cf_user: null,
      // }));

      return res;
    },
  });

  const { mutateAsync: createPasien } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.post('/master/pasien', data);
      console.log('🚀 ~ mutationFn: ~ res:', res);
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
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutateAsync: mutateEditPasien } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.patch(`/master/pasien/${data?.id}`, data);
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

  const { mutateAsync: mutateDeletePasien } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.delete(`/master/pasien/${data?.id}`);
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
      toast.success('Berhasil menghapus data basis pengetahuan');
      refetchGejala();
      // router.push('/data-anak');
    },
  });

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'nama_anak',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nama Anak" />
      ),
      cell: ({ row }) => <div>{row.getValue('nama_anak')}</div>,
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'tanggal_lahir',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tanggal Lahir" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">
          {format(row.getValue('tanggal_lahir'), 'dd MMMM yyyy')}
        </div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'nama_orangtua',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nama Orang Tua" />
      ),
      cell: ({ row }) => {
        return (
          <div className="w-[80px]">{row.original.Users.name as string}</div>
        );
      },
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'createdAt',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tanggal Pembuatan" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">
          {format(row.getValue('createdAt'), 'dd MMMM yyyy')}
        </div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'updatedAt',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tanggal Perubahan" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">
          {format(row.getValue('updatedAt'), 'dd MMMM yyyy')}
        </div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
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
          handleDelete={() => mutateDeletePasien(row.original)}
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

  if (isLoadingPasien || isFetchingPasien) {
    return <LoadingPage show />;
  }

  return (
    <>
      {dialogCreate ? (
        <PasienFormBackup
          submitForm={(data) => {
            if (typeModal === 'create') {
              createPasien(data);
            }
            if (typeModal === 'update') {
              mutateEditPasien(data);
            }
          }}
          setOpenChange={() => {
            setDialogCreate(false);
            setTypeModal('create');
          }}
          type={typeModal}
          dataEdit={dataRow}
        />
      ) : (
        <div className="space-y-3">
          <h3 className="">Pasien Management</h3>
          <DataTable
            columns={columns}
            data={listDataPasien?.data || []}
            onCreate={() => {
              setDialogCreate(true);
            }}
            filterSearchTopToolbar="nama_anak"
            placeholderTopToolbar="Cari Nama Pasien..."
          />
        </div>
      )}
    </>
  );
}

export default MasterPasien;
