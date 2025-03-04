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
import ModalDetailRiwayat from '../_components/ModalDetailRiwayat';

function Riwayat() {
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
  const [dataId, setDataId] = useState();
  const [typeModal, setTypeModal] = useState<'create' | 'update'>('create');

  const {
    data: listDataRiwayat,
    isLoading: isLoadingGejala,
    isFetching: isFetchingGejala,
    refetch: refetchGejala,
  } = useQuery({
    queryKey: ['listDataRiwayat', `For Master`],
    queryFn: async () => {
      const res = await locbe.get('/master/riwayat');

      // const resData = res.data.map((item: any) => ({
      //   ...item,
      //   cf_user: null,
      // }));

      return res;
    },
  });

  const {
    data: dataDetailRiwayat,
    isLoading: isLoadingDetailRiwayat,
    isFetching: isFetchingDetailRiwayat,
    refetch: refetchDetailRiwayat,
  } = useQuery({
    queryKey: ['dataDetailRiwayat', `For Master`, "DATA ID", dataId],
    queryFn: async () => {
      const res = await locbe.get(`/master/riwayat/${dataId}`);

      // const resData = res.data.map((item: any) => ({
      //   ...item,
      //   cf_user: null,
      // }));

      return res.data;
    },
    enabled: !!dataId,
  });
  // console.log('🚀 ~ Riwayat ~ dataDetailRiwayat:', dataDetailRiwayat);

  // const { mutateAsync: createUser } = useMutation({
  //   mutationFn: async (data: any) => {
  //     const res = await locbe.post('/master/user', data);
  // //     console.log('🚀 ~ mutationFn: ~ res:', res);
  //     // prisma.childs.create({
  //     //   data: {
  //     //     user_id: session?.data?.user?.id,
  //     //     nama_anak: data.nama_anak,
  //     //     berat_badan: 0,
  //     //     tinggi_badan: 0,
  //     //     tanggal_lahir: new Date(data.tanggal_lahir),
  //     //     createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
  //     //     updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
  //     //   }
  //     // })
  //     return res;
  //   },
  //   onSuccess: () => {
  //     toast.success('Berhasil menambahkan data basis pengetahuan');
  //     refetchGejala();
  //     setDialogCreate(false);
  //     // router.push('/data-anak');
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });

  // const { mutateAsync: mutateEditGejala } = useMutation({
  //   mutationFn: async (data: any) => {
  //     const res = await locbe.patch(`/master/user/${data?.id}`, {
  //       name: data.name,
  //       email: data.email,
  //       role: data.role,
  //       password: data.password,
  //     });
  //     // prisma.childs.create({
  //     //   data: {
  //     //     user_id: session?.data?.user?.id,
  //     //     nama_anak: data.nama_anak,
  //     //     berat_badan: 0,
  //     //     tinggi_badan: 0,
  //     //     tanggal_lahir: new Date(data.tanggal_lahir),
  //     //     createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
  //     //     updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
  //     //   }
  //     // })
  //     return res;
  //   },
  //   onSuccess: () => {
  //     toast.success('Berhasil merubah data basis pengetahuan');
  //     refetchGejala();
  //     setTypeModal('create');
  //     setDataRow(undefined);
  //     setDialogCreate(false);
  //     // router.push('/data-anak');
  //   },
  // });

  // const { mutateAsync: mutateDeleteGejala } = useMutation({
  //   mutationFn: async (data: any) => {
  //     const res = await locbe.delete(`/master/user/${data?.id}`);
  //     // prisma.childs.create({
  //     //   data: {
  //     //     user_id: session?.data?.user?.id,
  //     //     nama_anak: data.nama_anak,
  //     //     berat_badan: 0,
  //     //     tinggi_badan: 0,
  //     //     tanggal_lahir: new Date(data.tanggal_lahir),
  //     //     createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
  //     //     updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
  //     //   }
  //     // })
  //     return res;
  //   },
  //   onSuccess: () => {
  //     toast.success('Berhasil menghapus data basis pengetahuan');
  //     refetchGejala();
  //     // router.push('/data-anak');
  //   },
  // });

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Id Pemeriksaan" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
      enableSorting: false,
      // enableHiding: false,
    },
    {
      id: 'Childs.nama_anak',
      accessorKey: 'Childs.nama_anak',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nama Anak" />
      ),
      cell: ({ row }) => <div>{row.getValue('Childs.nama_anak')}</div>,
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'cf_result',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nilai CF" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue('cf_result')}</div>
      ),
      enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: 'created_at',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tanggal Pemeriksaan" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">
          {format(row.getValue('created_at'), 'dd MMMM yyyy')}
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
          // handleEdit={() => {
          // //   console.log('🚀 ~ Gejala ~ row:', row.original);
          //   setDataRow(row.original as any);
          //   setTypeModal('update');
          //   setDialogCreate(true);
          // }}
          // handleDelete={() => mutateDeleteGejala(row.original)}
          handleDetail={() => {
            setDialogCreate(true);
            setDataId(row.original.id);
          }}
        />
      ),
    },
  ];

  // const handleSubmit = async (data: any) => {
  //   mutateGejala
  // //   console.log('🚀 ~ handleSubmit ~ data:', data);
  //   // const res = await locbe.post('/master/gejala', data);
  // //   // console.log('🚀 ~ handleSubmit ~ res:', res);
  // }

  if (loadingMutate || loadingFetch) {
    return <LoadingPage show />;
  }

  return (
    <>
      <ModalDetailRiwayat
        open={dialogCreate}
        onOpenChange={setDialogCreate}
        data={dataDetailRiwayat}
        loadingModal={isLoadingDetailRiwayat || isFetchingDetailRiwayat}
      />
      <div className="space-y-3">
        {/* <UserForm
          submitForm={(data) => {
            if (typeModal === 'create') {
              createUser(data);
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
        /> */}
        <h3 className="">Riwayat Pemeriksaan</h3>
        <DataTable
          columns={columns}
          data={listDataRiwayat?.data || []}
          // onCreate={() => {
          //   setDialogCreate(true);
          // }}
          filterSearchTopToolbar="Childs.nama_anak"
          placeholderTopToolbar="Cari Nama Anak..."
        />
      </div>
    </>
  );
}

export default Riwayat;
