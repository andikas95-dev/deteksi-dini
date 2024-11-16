'use client';
import { useRouter } from 'next/navigation';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TAMBAH_DATA_ANAK } from '@/helpers/constants/path';
import CardDataAnak from '@/components/components-parts/card-data-anak';

function DaftarAnak() {
  const router = useRouter();

  return (
    <LayoutRoot className="px-4">
      <div className="py-3 flex items-center justify-between">
        <h3>DAFTAR ANAK</h3>
        <Button onClick={() => router.push(TAMBAH_DATA_ANAK)}>
          Tambah Data
        </Button>
      </div>
      {new Array(10).fill(0).map((_, i) => (
        <CardDataAnak
          key={i}
          data={{
            nama: `Anak ${i + 1}`,
            tanggalLahir: '12-12-2021',
            id: i.toString(),
          }}
        />
      ))}
    </LayoutRoot>
  );
}

export default DaftarAnak;
