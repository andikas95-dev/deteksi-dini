'use client';
import CardDataAnak from '@/components/components-parts/card-data-anak';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { radioValues } from '@/helpers/constants/constants';
import { locbe } from '@/lib/axiosInstance';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import HasilPeriksa from '../components/HasilPeriksa';

interface ResultPemeriksaanProps {
  id?: number;
  onBack?: () => void;
}

function ResultPemeriksaan({ id, onBack }: ResultPemeriksaanProps) {
  // const { id } = useParams();
  const session = useSession();
  console.log('🚀 ~ Result ~ session:', session);

  const {
    data: dataDiagnosa,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ['Result Data Diagnosa', `ID - ${id}]`],
    queryFn: async () => {
      const res = await locbe.get(`/periksa/result/${id}`, {});

      return res.data;
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
      <h4>Data Anak</h4>
      <CardDataAnak data={dataDiagnosa?.data?.child} />
      <HasilPeriksa dataDiagnosa={dataDiagnosa} />
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
