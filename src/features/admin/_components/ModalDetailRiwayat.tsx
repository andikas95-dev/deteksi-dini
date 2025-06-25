'use client';

import CardDataAnak from '@/components/components-parts/card-data-anak';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import DetailRiwayatPeriksa from './DetailRiwayatPeriksa';
import { Button } from '@/components/ui/button';
import LoadingPage from '@/components/shared-components/loading-page';
import { Spinner } from '@/components/ui/spinner';
import HasilPeriksaPdf from '@/features/periksa-anak/components/HasilPeriksaPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { format } from 'date-fns';

interface ModalDetailRiwayatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: any;
  loadingModal: boolean;
}

function ModalDetailRiwayat({
  open,
  onOpenChange,
  data,
  loadingModal,
}: ModalDetailRiwayatProps) {
  // console.log('🚀 ~ ModalDetailRiwayat ~ data:', data);

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data?.info_anak?.nama_anak}</DialogTitle>
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>
        <div>
          <Spinner show={loadingModal} />
          {data?.info_anak && <CardDataAnak data={data?.info_anak} />}
          {data && <DetailRiwayatPeriksa data={data} />}
        </div>
        <DialogFooter>
          <Button asChild variant="secondary">
            <PDFDownloadLink
              document={
                <HasilPeriksaPdf
                  data={{
                    detailDiagnosa: data?.detail_diagnosa,
                    child: data?.info_anak,
                    diagnosa: data?.diagnosa,
                  }}
                />
              }
              fileName={`Hasil_Pemeriksaan_${data?.info_anak?.nama_anak}_${format(new Date(), "ddMMyyyyHHmmss")}.pdf`}
            >
              {({ loading }) =>
                loading ? 'Generating PDF...' : 'Download PDF'
              }
            </PDFDownloadLink>
          </Button>
          <Button onClick={() => onOpenChange(false)}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDetailRiwayat;
