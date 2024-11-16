'use client';
import FormPasien from '@/components/shared-components/form-pasien';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Separator } from '@/components/ui/separator';
import React from 'react';

function DetailDataAnak() {
  return (
    <LayoutRoot className="px-4">
      <h3 className="mt-5 text-2xl">Detail Data Anak</h3>
      <Separator className="my-3" />
      <FormPasien status="update" />
    </LayoutRoot>
  );
}

export default DetailDataAnak;
