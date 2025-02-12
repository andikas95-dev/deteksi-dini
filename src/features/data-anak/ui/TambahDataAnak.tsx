'use client';
import FormPasien from '@/components/shared-components/form-pasien';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Separator } from '@/components/ui/separator';
import { locbe } from '@/lib/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function TambahDataAnak() {
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  const router = useRouter();
  const session: any = useSession();

  const { mutateAsync: mutateDataAnak } = useMutation({
    mutationFn: async (data: any) => {
      console.log('🚀 ~ mutationFn: ~ data:', data);
      const res = await locbe.post('/data-anak', {
        usid: session?.data?.user?.id,
        nama_anak: data.nama_anak,
        tanggal_lahir: data.tanggal_lahir.from,
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
    },
    onSuccess: () => {
      router.push('/data-anak');
    },
  });

  return (
    <LayoutRoot className="px-4">
      <h3 className="mt-5 text-2xl">Buat Data Anak</h3>
      <Separator className="my-3" />
      <FormPasien
        status="create"
        onSubmitDataAnak={(data) => mutateDataAnak(data)}
        default_tanggal_lahir={{
          from: new Date(),
          to: new Date(),
        }}
      />
    </LayoutRoot>
  );
}

export default TambahDataAnak;
