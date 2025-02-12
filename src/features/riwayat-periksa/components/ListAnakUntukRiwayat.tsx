'use client';

import { useState } from 'react';
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
import { Slot } from '@radix-ui/react-slot';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useToggle } from 'usehooks-ts';

interface ListAnakUntukRiwayatProps {
  setSelectedData: (dataAnak: any) => void;
  selectedData?: any;
  onReset?: () => void;
}

function ListAnakUntukRiwayat({
  setSelectedData,
  selectedData,
  onReset,
}: ListAnakUntukRiwayatProps) {
  console.log('🚀 ~ ListAnakUntukRiwayat ~ selectedAnak:', selectedData);
  const session: any = useSession();
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
      {selectedData?.diagnosa && <Button onClick={onReset}>Reset</Button>}
    </div>
      {selectedData.child && <CardDataAnak data={selectedData.child} />}
      <Drawer open={drawerDaftarAnak} onOpenChange={setDrawerDaftarAnak}>
        <DrawerTrigger asChild>
          {!selectedData.child && <Button className="w-full">Pilih Anak Anda</Button>}
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
                  setSelectedData(dataAnak);
                  setDrawerDaftarAnak(false);
                }}
                className='px-3'
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
