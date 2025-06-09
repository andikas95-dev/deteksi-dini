'use client';

import LayoutRoot from '@/components/shared-components/layout-root';
import ListAnakUntukRiwayat from '../components/ListAnakUntukRiwayat';
import { useState } from 'react';
import CardRiwayat from '../components/ListRiwayatPeriksa';
import ListRiwayatPeriksa from '../components/ListRiwayatPeriksa';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useRiwayatPeriksa from '@/helpers/hooks/useRiwayatPeriksa';

function RiwayatPeriksa() {
  const session: any = useSession();
  const router = useRouter();

  const { child, setChild, setDiagnosa } = useRiwayatPeriksa();

  if (session?.status === 'unauthenticated') {
    router.replace('/login');
  }

  // const [dataRiwayat, setDataRiwayat] = useState({
  //   child: null,
  //   diagnosa: null,
  // });
  // console.log('🚀 ~ RiwayatPeriksa ~ dataRiwayat:', dataRiwayat);

  return (
    <LayoutRoot className="px-4">
      <div className="py-3 flex items-center">
        <h3>RIWAYAT PERIKSA ANAK {1%2}</h3>
      </div>
      <ListAnakUntukRiwayat />
      {child && (
        <ListRiwayatPeriksa
          // selectedData={dataRiwayat}
          // setSelectedRiwayat={(dataRiwayat) => {
          //   console.log('🚀 ~ RiwayatPeriksa ~ dataRiwayat:', dataRiwayat);
          //   setDataRiwayat((prev) => ({
          //     ...prev,
          //     diagnosa: dataRiwayat,
          //   }));
          // }}
        />
      )}
    </LayoutRoot>
  );
}

export default RiwayatPeriksa;
