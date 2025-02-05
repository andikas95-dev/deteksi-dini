'use client';
import { useRouter } from 'next/navigation';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TAMBAH_DATA_ANAK } from '@/helpers/constants/path';
import CardDataAnak from '@/components/components-parts/card-data-anak';
import { useQuery } from '@tanstack/react-query';
import { locbe } from '@/lib/axiosInstance';
import { useSession } from 'next-auth/react';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';

function DaftarAnak() {
  const router = useRouter();

  const session: any = useSession();
  // console.log('🚀 ~ DaftarAnak ~ session:', session);

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
    <LayoutRoot className="px-4">
      <div className="py-3 flex items-center justify-between">
        <h3>DAFTAR ANAK</h3>
        <Button onClick={() => router.push(TAMBAH_DATA_ANAK)}>
          Tambah Data
        </Button>
      </div>
      <Spinner show={isLoading} />
      {listAnak?.map((dataAnak: any, i: number) => (
        <Link href={`/data-anak/${dataAnak.id}`} key={dataAnak.id}>
          <CardDataAnak data={dataAnak} />
        </Link>
      ))}
    </LayoutRoot>
  );
}

export default DaftarAnak;
