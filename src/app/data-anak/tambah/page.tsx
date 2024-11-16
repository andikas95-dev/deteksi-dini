'use client';
import FormPasien from '@/components/shared-components/form-pasien';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

function TambahDataAnak() {
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <LayoutRoot className="px-4">
      <h3 className='mt-5 text-2xl'>Buat Data Anak</h3>
      <Separator className='my-3' />
      <FormPasien status="create" />
    </LayoutRoot>
  );
}

export default TambahDataAnak;
