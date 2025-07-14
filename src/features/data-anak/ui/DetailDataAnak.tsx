'use client';
import FormPasien from '@/components/shared-components/form-pasien';
import LayoutRoot from '@/components/shared-components/layout-root';
import LoadingPage from '@/components/shared-components/loading-page';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { locbe } from '@/lib/axiosInstance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { toast } from 'sonner';

function DetailDataAnak() {
  const router = useRouter();
  const { id: childId } = useParams();
    const session : any = useSession();
  console.log('🚀 ~ DetailDataAnak ~ id:', childId);

  const { data: detailDataAnak, isLoading } = useQuery({
    queryKey: ['Detail Data Anak', `USID - ${childId}]`],
    queryFn: async () => {
      const res = await locbe.get(`/data-anak/${childId}`, {});

      return res.data;
    },
    enabled: !!childId,
  });
  console.log('🚀 ~ DetailDataAnak ~ detailDataAnak:', detailDataAnak);

  const {mutateAsync: mutateDataAnak } = useMutation({
    mutationFn: async (data: any) => {
      console.log("🚀 ~ mutationFn: ~ data:", data)
      const res = await locbe.patch(`/data-anak/${childId}`, {
        usid: session?.data?.user?.id,
        nama_anak: data.nama_anak,
        tanggal_lahir: data.tanggal_lahir.from,
      })
      return res.data
    },
    onSuccess: () => {
      router.push('/data-anak')
      return toast.success("Data Anak Berhasil Diupdate", {
        position: "top-center",
        duration: 2000
      })
    },
    onError: (error: any) => {
      return toast.error(error?.response?.data?.message || "Terjadi kesalahan saat mengupdate data anak")
    }
  })

  const {mutateAsync: mutateDeleteData } = useMutation({
    mutationFn: async () => {
      const res = await locbe.delete(`/data-anak/${childId}`,)
      return res.data
    },
    onSuccess: () => {
      router.push('/data-anak')
      return toast.success("Data Anak Berhasil Di Hapus")
    },
    onError: (error: any) => {
      return toast.error(error?.response?.data?.message || "Terjadi kesalahan saat mengupdate data anak")
    }
  })


  return (
    <LayoutRoot className="px-4">
      <LoadingPage show={isLoading} />
      <div className="flex gap-2 items-center mt-5">
        <Button size="icon" variant="ghost" onClick={() => router.back()}>
          <IoCaretBackCircleOutline className="size-6" />
        </Button>
        <h3 className="text-2xl">Detail Data Anak</h3>
      </div>
      <Separator className="my-3" />
      <FormPasien status="update" detailData={detailDataAnak} onSubmitDataAnak={(data) => mutateDataAnak(data)} handleDelete={() => mutateDeleteData()}  />
    </LayoutRoot>
  );
}

export default DetailDataAnak;
