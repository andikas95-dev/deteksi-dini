import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { radioValues } from '@/helpers/constants/constants';
import { cn } from '@/lib/utils';
import React from 'react';

function DetailRiwayatPeriksa({ data }: any) {
  return (
    <Accordion type="multiple" defaultValue={['hasil-konsultasi']}>
      <AccordionItem value="hasil-konsultasi">
        <AccordionTrigger>Hasil Konsultasi</AccordionTrigger>
        <AccordionContent>
          <Card
            className={cn([
              'text-white',
              {
                'bg-red-700':
                  data?.diagnosa?.cf_result_percentage >= 50,
                'bg-green-700':
                  data?.diagnosa?.cf_result_percentage < 50,
              },
            ])}
          >
            <CardContent className="py-4">
              <p>
                Berdasarkan hasil perhitungan, nilai yang diperoleh adalah{' '}
                <span className="font-bold">
                  {data?.diagnosa?.cf_result}
                </span>
                . Dari hasil yang diperoleh maka sistem mengidentifikasi bahwa
                balita tersebut teridentifikasi:
              </p>
              <h5 className="font-bold text-center text-xl underline">
                {data?.diagnosa?.cf_result_percentage >= 50
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
          <ol className="list-decimal px-10 space-y-2 h-52 overflow-y-auto">
            {data?.detail_diagnosa?.map(
              (item: any, index: number) => (
                <li key={index}>
                  <p className="font-semibold">
                    Pertanyaan Gejala: {item.Gejala.nama_gejala}
                  </p>
                  <p>
                    Jawaban:{' '}
                    {radioValues.find(
                      (itemVal) => itemVal.value === item.cf_user
                    )?.label || 'N/A'}
                  </p>
                </li>
              )
            )}
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default DetailRiwayatPeriksa;
