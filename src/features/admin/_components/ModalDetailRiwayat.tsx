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
          <Button onClick={() => onOpenChange(false)}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDetailRiwayat;
