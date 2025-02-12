'use client';
import LayoutRoot from '@/components/shared-components/layout-root';
import React from 'react';
import { useToggle } from 'usehooks-ts';
import PeriksaAnak from './PeriksaAnak';
import ResultPemeriksaan from './ResultPemeriksaan';

function AlurPeriksa() {
  const [valPeriksa, , setPeriksa] = useToggle();
  const [resultId, setResultId] = React.useState<number | null>(null);

  return (
    <LayoutRoot className="px-4">
      {!valPeriksa && (
        <PeriksaAnak
          handleResult={(id) => {
            setPeriksa(true);
            setResultId(id);
          }}
        />
      )}
      {valPeriksa && resultId && (
        <ResultPemeriksaan
          id={resultId}
          onBack={() => {
            window.location.reload();
          }}
        />
      )}
    </LayoutRoot>
  );
}

export default AlurPeriksa;
