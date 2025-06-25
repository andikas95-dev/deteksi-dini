import { useEffect } from 'react';
import { useBoolean } from 'usehooks-ts';
import BabyIcon from '@/components/assets/icons/baby-icon';
import { AvatarIcon, Avatar } from '@/components/ui/avatar';
import { FormProvider, useForm } from 'react-hook-form';
import InputForm from '@/components/form/input-form';
import { Button } from '@/components/ui/button';
import DatePickerForm from '@/components/form/date-picker-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DataAnak } from '@/helpers/interface/child';
import { stat } from 'fs';

interface FormPasienProps {
  status?: 'create' | 'update';
  detailData?: DataAnak;
  onSubmitDataAnak?: (data: any) => void;
  default_tanggal_lahir?: {
    from?: Date;
    to?: Date;
  };
}

interface FormAnakProps {
  nama_anak?: string;
  tanggal_lahir: {
    from?: Date;
    to?: Date;
  };
}

function FormPasien({
  status = 'create',
  detailData,
  onSubmitDataAnak,
  default_tanggal_lahir = {
    from: undefined,
    to: undefined,
  },
}: FormPasienProps) {
  const { value: valEdit, setValue: setValEdit } = useBoolean();
  const router = useRouter();

  const form = useForm<FormAnakProps>({
    defaultValues: {
      nama_anak: undefined,
      tanggal_lahir: default_tanggal_lahir,
    },
  });

  useEffect(() => {
    if (status === 'update' && detailData) {
      const { nama_anak, tanggal_lahir } = detailData;
      form.reset({
        nama_anak,
        tanggal_lahir: {
          from: new Date(tanggal_lahir),
          to: new Date(tanggal_lahir),
        },
      });
      // form.setValue('nama_anak', nama_anak);
      // form.setValue('tanggal_lahir', {
      //   from: new Date(tanggal_lahir),
      //   to: new Date(tanggal_lahir),
      // });
    }
  }, [detailData, form, status]);

  const onSubmit = (data: any) => {
    // console.log("🚀 ~ onSubmit ~ data:", data)
    if (onSubmitDataAnak) {
      onSubmitDataAnak(data);
    }
    // if(status === 'create'){

    // }
  };

  const watchAll = form.watch();
  // console.assert('🚀 ~ FormPasien ~ form:', form);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 justify-center"
      >
        <div className="py-8">
          <Avatar className="h-48 w-48 mx-auto">
            <AvatarIcon>
              <BabyIcon />
            </AvatarIcon>
          </Avatar>
        </div>
        <InputForm
          name="nama_anak"
          label="Nama Anak"
          placeholder="Nama Anak"
          disabled={status === 'update' && !valEdit}
        />
        <DatePickerForm
          name="tanggal_lahir"
          label="Tanggal Lahir"
          placeholder="Pilih Tanggal Lahir"
          position="left"
          disabled={status === 'update' && !valEdit}
        />
        <div className="flex flex-col gap-3">
          {/* {status === 'view' && <Button type="button">Ubah</Button>} */}
          {status === 'update' ? (
            valEdit ? (
              <>
                <Button type="submit">Simpan</Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="w-full"
                  onClick={() => setValEdit(false)}
                >
                  Batal
                </Button>
              </>
            ) : (
              <>
                <Button type="button" onClick={() => setValEdit(true)}>
                  Ubah
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => setValEdit(true)}
                >
                  Hapus
                </Button>
              </>
            )
          ) : null}
          {status === 'create' && (
            <>
              <Button type="submit">Simpan</Button>
              <Button
                type="button"
                variant="destructive"
                className="w-full"
                onClick={() => router.back()}
              >
                Kembali
              </Button>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default FormPasien;
