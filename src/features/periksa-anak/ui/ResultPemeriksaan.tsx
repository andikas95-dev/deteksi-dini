'use client';
import CardDataAnak from '@/components/components-parts/card-data-anak';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { radioValues } from '@/helpers/constants/constants';
import { locbe } from '@/lib/axiosInstance';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import HasilPeriksa from '../components/HasilPeriksa';
import { toast } from 'sonner';
import useRiwayatPeriksa from '@/helpers/hooks/useRiwayatPeriksa';
import useHasilPeriksa from '@/helpers/hooks/useHasilPeriksa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import HasilPeriksaPdf from '../components/HasilPeriksaPdf';

interface ResultPemeriksaanProps {
  id?: number;
  onBack?: () => void;
}

function ResultPemeriksaan({ id, onBack }: ResultPemeriksaanProps) {
  // const { id } = useParams();
  const session = useSession();
  console.log('🚀 ~ Result ~ session:', session);

  const {
    child,
    diagnosa,
    detailDiagnosa,
    setDiagnosa,
    setDetailDiagnosa,
    setChild,
  } = useHasilPeriksa();

  const {
    data: dataDiagnosa,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ['Result Data Diagnosa', `ID - ${id}]`],
    queryFn: async () => {
      try {
        const res = await locbe.get(`/periksa/result/${id}`, {});

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

        setChild(res.data.data.child);
        setDiagnosa({
          id: res.data.data.diagnosa.id,
          cf_result: res.data.data.diagnosa.cf_result,
          cf_result_percentage: res.data.data.diagnosa.cf_result_percentage,
          created_at: res.data.data.diagnosa.created_at,
          child_id: res.data.data.diagnosa.child_id,
        });
        setDetailDiagnosa(returnDetail);

        // setDetailDiagnosa(returnDetail);

        return res.data;
      } catch (error) {
        toast.error('Gagal mendapatkan data hasil pemeriksaan');
      }
    },
    enabled: !!id,
  });
  console.log('🚀 ~ Result ~ dataDiagnosa:', dataDiagnosa);

  if (!id && isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner show />
      </div>
    );
  }

  return (
    <div className="py-3">
      <div className="flex gap-3 items-center">
        <Button variant="ghost" className="text-[1.8rem]" onClick={onBack}>
          <MdKeyboardArrowLeft />
        </Button>
        <h3>Hasil Konsultasi</h3>
      </div>
      <div className="flex justify-between items-center">
        <h4>Data Anak</h4>
        {diagnosa && (
          <Button asChild variant="secondary">
            <PDFDownloadLink
              document={
                <HasilPeriksaPdf
                  data={{
                    detailDiagnosa,
                    child,
                    diagnosa,
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
        )}
      </div>
      <CardDataAnak data={child} />
      <HasilPeriksa />
      {/* <h4>Rincian Pertanyaan</h4>
        <ol className="list-decimal list-outside px-3 space-y-2">
          {dataDiagnosa?.data?.diagnosa?.DetailDiagnosa?.map(
            (item: any, index: number) => (
              <li key={index}>
                <p className="font-semibold">
                  Pertanyaan Gejala: {item.Gejala.nama_gejala}
                </p>
                <p>
                  Jawaban:{' '}
                  {radioValues.find((itemVal) => itemVal.value === item.cf_user)
                    ?.label || 'N/A'}
                </p>
              </li>
            )
          )}
        </ol> */}
    </div>
  );
}

export default ResultPemeriksaan;
