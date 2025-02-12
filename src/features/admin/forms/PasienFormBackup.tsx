import DatePickerForm from '@/components/form/date-picker-form';
import InputForm from '@/components/form/input-form';
import InputPasswordForm from '@/components/form/input-password-form';
import SelectForm from '@/components/form/select-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { locbe } from '@/lib/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface PasienFormBackupProps {
  type?: 'create' | 'update';
  submitForm: (data: any) => void;
  setOpenChange: (open: boolean) => void;
  dataEdit?: any;
}

function PasienFormBackup({
  type = 'create',
  submitForm,
  setOpenChange,
  dataEdit,
}: PasienFormBackupProps) {
  console.log("🚀 ~ dataEdit:", dataEdit)
  const form = useForm({
    defaultValues: {
      id: undefined,
      nama_anak: undefined,
      user_id: undefined as string | undefined,
      tanggal_lahir: {
        from: undefined as Date | undefined,
        to: undefined as Date | undefined,
      },
    },
  });
  console.log("🚀 ~ form watch all:", form.watch())

  const { data: listDataUsers } = useQuery({
    queryKey: ['listDataUser', `For Combobox`],
    queryFn: async () => {
      const res = await locbe.get('/master/user');

      // const resData = res.data.map((item: any) => ({
      //   ...item,
      //   cf_user: null,
      // }));

      const resData = res.data.map((item: any) => ({
        label: item.name,
        value: String(item.id),
      }));

      return resData;
    },
  });

  useEffect(() => {
    if (type === 'update' && dataEdit) {
      console.log("🚀 ~ useEffect ~ dataEdit.user_id:", dataEdit.user_id)
      form.reset({
        id: dataEdit.id,
        nama_anak: dataEdit.nama_anak,
        user_id: String(dataEdit.user_id),
        tanggal_lahir: {
          from: new Date(dataEdit.tanggal_lahir),
          to: new Date(dataEdit.tanggal_lahir),
        }
      });
    }

    // if(type === 'update' && dataEdit && form.watch().user_id === "") {
    //   form.setValue('user_id', String(dataEdit.user_id));
    // }
  }, [type, dataEdit, form]);

  const submitData = form.handleSubmit((data: any) => {
    submitForm({
      ...data,
      nama_anak: data.nama_anak,
      tanggal_lahir: data.tanggal_lahir.from,
      user_id: data.user_id,
    })
  });
  return (
    <FormProvider {...form}>
      <form onSubmit={submitData}>
        <div className="mb-3">
          <h3>Form Pasien</h3>
        </div>
        <div className="space-y-4">
          <InputForm
            name="nama_anak"
            label="Nama Anak"
            placeholder="Nama Anak"
          />
          <DatePickerForm
            name="tanggal_lahir"
            label="Tanggal Lahir"
            placeholder="Pilih Tanggal Lahir"
            position="left"
            side="bottom"
          />
          <SelectForm
            name="user_id"
            label="Nama Orang Tua"
            options={listDataUsers}
          />
        </div>
        <div className="mt-3 flex justify-end space-x-3">
          <Button
            variant="outline-danger"
            type="button"
            onClick={() => setOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default PasienFormBackup;
