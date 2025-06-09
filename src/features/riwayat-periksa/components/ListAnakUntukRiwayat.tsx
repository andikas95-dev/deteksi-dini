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
import HasilPeriksaPdf from '@/features/periksa-anak/components/HasilPeriksaPdf';
import useRiwayatPeriksa from '@/helpers/hooks/useRiwayatPeriksa';
import { locbe } from '@/lib/axiosInstance';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useToggle } from 'usehooks-ts';

// interface ListAnakUntukRiwayatProps {
//   setSelectedData: (dataAnak: any) => void;
//   selectedData?: any;
//   onReset?: () => void;
// }

function ListAnakUntukRiwayat() {
  const session: any = useSession();
  const {
    child,
    diagnosa,
    detailDiagnosa,
    setChild,
    clearChild,
    clearDetailDiagnosa,
    clearDiagnosa,
  } = useRiwayatPeriksa();
  // console.log('🚀 ~ DaftarAnak ~ session:', session);

  const [drawerDaftarAnak, , setDrawerDaftarAnak] = useToggle();
  // const [dataAnakSelected, setDataAnakSelected] = useState<any>(null);

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

  console.log('🚀 ~ DaftarAnak ~ listAnak:', listAnak);
  return (
    <>
      <div className="flex justify-between items-center">
        <h4>Data Anak</h4>
        {diagnosa && (
          <div className='flex gap-2'>
            <Button asChild variant="secondary">
              <PDFDownloadLink
                document={
                  <HasilPeriksaPdf
                    data={{
                      detailDiagnosa: detailDiagnosa ?? null,
                      child: child || null,
                      diagnosa: diagnosa || null,
                    }}
                  />
                }
                fileName={`Hasil_Pemeriksaan_${child?.nama_anak}.pdf`}
              >
                {({ loading }) =>
                  loading ? 'Generating PDF...' : 'Download PDF'
                }
              </PDFDownloadLink>
            </Button>
            <Button
              onClick={() => {
                clearChild();
                clearDiagnosa();
                clearDetailDiagnosa();
              }}
            >
              Reset
            </Button>
          </div>
        )}
      </div>
      {child && <CardDataAnak data={child} />}
      <Drawer open={drawerDaftarAnak} onOpenChange={setDrawerDaftarAnak}>
        <DrawerTrigger asChild>
          {!child && <Button className="w-full">Pilih Anak Anda</Button>}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Daftar Anak</DrawerTitle>
            <DrawerDescription>
              Pilih Anak anda untuk melihat riwayat periksa
            </DrawerDescription>
          </DrawerHeader>
          <div className="h-72 overflow-y-auto">
            <Spinner show={isLoading} />
            {listAnak?.map((dataAnak: any, i: number) => (
              <div
                key={dataAnak.id}
                onClick={() => {
                  // form.setValue('data_anak', dataAnak);
                  setChild(dataAnak);
                  setDrawerDaftarAnak(false);
                }}
                className="px-3"
              >
                <CardDataAnak data={dataAnak} />
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      {/* <Spinner show={isLoading} />
      {listAnak?.map((dataAnak: any, i: number) => (
        <div onClick={() => setDataAnak(dataAnak)} key={dataAnak.id}>
          <CardDataAnak data={dataAnak} />
        </div>
      ))} */}
    </>
  );
}

export default ListAnakUntukRiwayat;
