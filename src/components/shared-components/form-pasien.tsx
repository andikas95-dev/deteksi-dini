import { useBoolean } from 'usehooks-ts';
import BabyIcon from '@/components/assets/icons/baby-icon';
import { AvatarIcon, Avatar } from '@/components/ui/avatar';
import { FormProvider, useForm } from 'react-hook-form';
import InputForm from '@/components/form/input-form';
import { Button } from '@/components/ui/button';
import DatePickerForm from '@/components/form/date-picker-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormPasienProps {
  status?: 'create' | 'update';
}

function FormPasien({ status = 'create' }: FormPasienProps) {
  const { value: valEdit, setValue: setValEdit } = useBoolean();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      tanggalLahir: {
        from: undefined,
        to: undefined,
      },
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 justify-center pt-32"
      >
        <div className="py-8">
          <Avatar className="h-48 w-48 mx-auto">
            <AvatarIcon>
              <BabyIcon />
            </AvatarIcon>
          </Avatar>
        </div>
        <InputForm
          name="nama"
          label="Nama Anak"
          placeholder="Nama Anak"
          disabled={status === 'update' && !valEdit}
        />
        <DatePickerForm
          name="tanggalLahir"
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
              <Button type="button" onClick={() => setValEdit(true)}>
                Ubah
              </Button>
            )
          ) : null}
          {status === 'create' && (
            <>
              <Button type="submit">Buat</Button>
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
