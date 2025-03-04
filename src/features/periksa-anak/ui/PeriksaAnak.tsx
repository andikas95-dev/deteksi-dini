'use client';

import CardDataAnak from '@/components/components-parts/card-data-anak';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Spinner } from '@/components/ui/spinner';
import { locbe } from '@/lib/axiosInstance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useToggle } from 'usehooks-ts';
import QuestionFormArray from '../forms/QuestionFormArray';

interface PeriksaAnakProps {
  handleResult?: (id: number) => void;
}

function PeriksaAnak({ handleResult }: PeriksaAnakProps) {
  const session: any = useSession();
  const router = useRouter();

  if(session?.status === "unauthenticated") {
    router.replace('/login');
  }

  const { mutateAsync: mutateCheckup } = useMutation({
    mutationFn: async (data: any) => {
      const res = await locbe.post('/periksa', data);
      console.log('🚀 ~ mutationFn: ~ res:', res);

      return res.data;
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
    },
    onSuccess: (res) => {
      console.log('🚀 ~ PeriksaAnak ~ res:', res);
      // router.replace(`/periksa-anak/result/${res.data.id}`);
      if (handleResult) {
        handleResult(res.data.id);
      }
    },
  });

  const form = useForm({
    defaultValues: {
      data_anak: null,
      gejala: [],
    },
  });
  console.log('🚀 ~ PeriksaAnak ~ form:', form);

  const [valDrawer, , setDrawer] = useToggle();
  const [submitLoading, , setSubmitLoading] = useToggle();

  const { data: listAnak, isLoading } = useQuery({
    queryKey: ['listDataAnak', `USID - ${session?.data?.user?.id}]`],
    queryFn: async () => {
      const res = await locbe.get('/data-anak', {
        params: {
          usid: session?.data?.user?.id,
        },
      });

      return res.data;
    },
    enabled: !!session?.data?.user?.id,
  });

  const {
    data: listGejala,
    isLoading: isLoadingGejala,
    isFetching: isFetchingGejala,
  } = useQuery({
    queryKey: ['listDataGejala', `USID - ${session?.data?.user?.id}]`],
    queryFn: async () => {
      const res = await locbe.get('/master/gejala/periksa');

      const resData = res.data.map((item: any) => ({
        ...item,
        cf_user: null,
      }));

      return resData;
    },
    enabled: !!session?.data?.user?.id,
  });
  console.log('🚀 ~ PeriksaAnak ~ listGejala:', listGejala);

  useEffect(() => {
    if (listGejala) {
      form.reset({
        gejala: listGejala,
      });
    }
  }, [listGejala, form]);

  const handleSubmit = async (data: any) => {
    try {
      setSubmitLoading(true);
      await mutateCheckup(data);
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error);
    } finally {
      setSubmitLoading(false);
    }
  };

  console.log('🚀 ~ PeriksaAnak ~ watchAll:', form.watch());

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="py-3 flex items-center justify-between">
          <h3>Periksa Anak</h3>
          {/* <Button onClick={() => router.push(TAMBAH_DATA_ANAK)}>
          Tambah Data
        </Button> */}
        </div>
        <h5 className="text-base">
          Halaman ini digunakan untuk memastikan kesehatan anak anda
        </h5>

        {form.getValues('data_anak') && (
          <Button className="w-full" onClick={() => form.reset()}>
            Reset
          </Button>
        )}
        <Drawer onOpenChange={(val) => setDrawer(val)} open={valDrawer}>
          <DrawerTrigger asChild>
            {!form.getValues('data_anak') && (
              <Button className="w-full">Pilih Anak Anda</Button>
            )}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Pilih Daftar Anak</DrawerTitle>
              <DrawerDescription>
                Pilih Anak anda yang akan di periksa
              </DrawerDescription>
            </DrawerHeader>
            <div className="h-72 overflow-y-auto">
              <Spinner show={isLoading} />
              {listAnak?.map((dataAnak: any, i: number) => (
                <span
                  key={dataAnak.id}
                  onClick={() => {
                    form.setValue('data_anak', dataAnak);
                    setDrawer(false);
                  }}
                >
                  <CardDataAnak data={dataAnak} />
                </span>
              ))}
            </div>
          </DrawerContent>
        </Drawer>

        {form.watch('data_anak') && (
          <CardDataAnak data={form.getValues('data_anak')} />
        )}
        {listGejala && form.watch('data_anak') && (
          <>
            <QuestionFormArray />
            <Button
              type="submit"
              className="w-full my-5"
              isLoading={submitLoading}
            >
              Proses Data
            </Button>
          </>
        )}
      </form>
    </FormProvider>
  );
}

export default PeriksaAnak;
