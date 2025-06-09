import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { radioValues } from '@/helpers/constants/constants';
import useRiwayatPeriksa from '@/helpers/hooks/useRiwayatPeriksa';
import { cn } from '@/lib/utils';
import React from 'react';

function HasilPeriksaRiwayat() {
  const { diagnosa, detailDiagnosa } = useRiwayatPeriksa();
  console.log('🚀 ~ HasilPeriksaRiwayat ~ detailDiagnosa:', detailDiagnosa);
  console.log('🚀 ~ HasilPeriksaRiwayat ~ diagnosa:', diagnosa);

  return (
    <Accordion type="multiple" defaultValue={['hasil-konsultasi']}>
      <AccordionItem value="hasil-konsultasi">
        <AccordionTrigger>Hasil Konsultasi</AccordionTrigger>
        <AccordionContent>
          <Card
            className={cn([
              'text-white',
              {
                'bg-red-700': (Number(diagnosa?.cf_result_percentage) ?? 0) >= 50,
                'bg-green-700': (Number(diagnosa?.cf_result_percentage) ?? 0) < 50,
              },
            ])}
          >
            <CardContent className="py-4">
              <p>
                Berdasarkan hasil perhitungan, nilai yang diperoleh adalah{' '}
                <span className="font-bold">{diagnosa?.cf_result}</span>. Dari
                hasil yang diperoleh maka sistem mengidentifikasi bahwa balita
                tersebut teridentifikasi:
              </p>
              <h5 className="font-bold text-center text-xl underline">
                {(Number(diagnosa?.cf_result_percentage) ?? 0) >= 50
                  ? 'STUNTING'
                  : 'TIDAK STUNTING'}
              </h5>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="rincian-pertanyaan">
        <AccordionTrigger>Rincian Pertanyaan</AccordionTrigger>
        <AccordionContent>
          <ol className="list-decimal px-10 space-y-2">
            {detailDiagnosa?.map((item: any, index: number) => (
              <li key={index}>
                <p className="font-semibold">
                  Pertanyaan Gejala: {item.nama_gejala}
                </p>
                <p>Jawaban: {item?.jawaban}</p>
              </li>
            ))}
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default HasilPeriksaRiwayat;
