import CardDataAnak from '@/components/components-parts/card-data-anak';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Spinner } from '@/components/ui/spinner';
import HasilPeriksa from '@/features/periksa-anak/components/HasilPeriksa';
import { radioValues } from '@/helpers/constants/constants';
import useRiwayatPeriksa from '@/helpers/hooks/useRiwayatPeriksa';
import { locbe } from '@/lib/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { useToggle } from 'usehooks-ts';
import HasilPeriksaRiwayat from './HasilPeriksaRiwayat';

interface ListRiwayatPeriksaProps {
  selectedData: any;
  setSelectedRiwayat: (data: any) => void;
}

function ListRiwayatPeriksa() {
  const session: any = useSession();
  const { child, diagnosa, setDiagnosa, setDetailDiagnosa } =
    useRiwayatPeriksa();

  const [drawerListRiwayat, , setDrawerListRiwayat] = useToggle();

  const { data: listTanggalRiwayat, isLoading } = useQuery({
    queryKey: ['ListRiwayat', `ChildId - ${child?.id}]`],
    queryFn: async () => {
      const res = await locbe.get('/diagnosa', {
        params: {
          cid: child?.id,
        },
      });

      return res.data;
    },
    enabled: !!child?.id,
  });
  // console.log("🚀 ~ ListRiwayatPeriksa ~ listTanggalRiwayat:", listTanggalRiwayat)

  const { isFetched: dataDiagnosaFatched } = useQuery({
    queryKey: ['Riwayat Hasil Diagnosa', `Diagnosa ID - ${diagnosa?.id}]`],
    queryFn: async () => {
      try {
        const res = await locbe.get(`/periksa/result/${diagnosa?.id}`, {});

        if (res.status !== 200) {
          return new Error('Gagal mendapatkan data hasil pemeriksaan');
        }

        const detailDiagnosa = res?.data?.data?.diagnosa?.DetailDiagnosa;
        const returnDetail = detailDiagnosa.map((item: any) => {
          const jawaban = radioValues.find(
            (radioItem) => radioItem.value === item.cf_user
          );

          return {
            nama_gejala: item.Gejala.nama_gejala,
            jawaban: jawaban?.label,
            cf_combined: item.cf_combined,
            cf_user: item.cf_user,
            cf_pakar: item.cf_pakar,
          };
        });

        setDetailDiagnosa(returnDetail);

        return res.data;
      } catch (error) {
        toast.error('Gagal mendapatkan data hasil pemeriksaan');
      }
    },
    enabled: !!diagnosa?.id,
  });

  return (
    <>
      <h4>Data Diagnosa</h4>
      {diagnosa && dataDiagnosaFatched && <HasilPeriksaRiwayat />}
      <Drawer open={drawerListRiwayat} onOpenChange={setDrawerListRiwayat}>
        <DrawerTrigger asChild>
          {!diagnosa && (
            <Button className="w-full">Pilih Tanggal Pemeriksaan</Button>
          )}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Tanggal Permeriksaan</DrawerTitle>
            <DrawerDescription>
              Pilih tanggal anda melakukan pemeriksaan
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-3 px-3 h-72 overflow-y-auto">
            {listTanggalRiwayat?.map((dataRiwayat: any, i: number) => (
              <Card
                key={dataRiwayat.id}
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => {
                  setDiagnosa(dataRiwayat);
                  setDrawerListRiwayat(false);
                }}
              >
                <CardContent className="flex justify-center items-center p-3">
                  <p>{format(dataRiwayat.created_at, 'dd MMMM yyyy HH:mm')}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
      {/* <Drawer open={drawerListRiwayat} onOpenChange={setDrawerListRiwayat}>
        <DrawerTrigger asChild> */}
      {/* {!selectedAnak && <Button className="w-full">Pilih Tanggal Pemeriksaan</Button>} */}
      {/* <Button className="w-full">Pilih Tanggal Pemeriksaan</Button>
        </DrawerTrigger>
        <DrawerContent> */}
      {/* <DrawerHeader>
            <DrawerTitle>Daftar Anak</DrawerTitle>
            <DrawerDescription>
              Pilih Anak anda untuk melihat riwayat periksa
            </DrawerDescription>
          </DrawerHeader> */}
      {/* <div className="h-72 overflow-y-auto">
            <Spinner show={isLoading} />
            {listAnak?.map((dataAnak: any, i: number) => (
              <span
                key={dataAnak.id}
                onClick={() => {
                  // form.setValue('data_anak', dataAnak);
                  setSelectedAnak(dataAnak);
                  setDrawerDaftarAnak(false);
                }}
              >
                <CardDataAnak data={dataAnak} />
              </span>
            ))}
          </div> */}
      {/* </DrawerContent>
      </Drawer> */}

      {/* <Spinner show={isLoading} />
    {listAnak?.map((dataAnak: any, i: number) => (
      <div onClick={() => setDataAnak(dataAnak)} key={dataAnak.id}>
        <CardDataAnak data={dataAnak} />
      </div>
    ))} */}
    </>
  );
}

export default ListRiwayatPeriksa;
