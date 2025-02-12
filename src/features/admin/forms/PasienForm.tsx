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

interface PasienFormProps {
  type?: 'create' | 'update';
  submitForm: (data: any) => void;
  open?: boolean;
  setOpenChange: (open: boolean) => void;
  dataEdit?: any;
}

function PasienForm({
  type = 'create',
  submitForm,
  open = false,
  setOpenChange,
  dataEdit,
}: PasienFormProps) {
  const form = useForm();

  const {
    data: listDataUsers,
  } = useQuery({
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
      console.log('🚀 ~ resData ~ resData:', resData);

      return resData;
    },
  });
  console.log('🚀 ~ listDataUsers:', listDataUsers);

  // useEffect(() => {
  //   if (type === 'update' && dataEdit) {
  //     form.reset({
  //       id: dataEdit.id,
  //       name: dataEdit.name,
  //       email: dataEdit.email,
  //       role: dataEdit.role,
  //     });
  //   }
  // }, [type, dataEdit, form]);

  return (
    <FormProvider {...form}>
      <Dialog open={open} onOpenChange={setOpenChange}>
        <DialogContent>
          <form onSubmit={form.handleSubmit(submitForm)}>
            <DialogHeader className="mb-3">
              <DialogTitle>Form Pasien</DialogTitle>
              <DialogDescription>
                <p></p>
              </DialogDescription>
            </DialogHeader>
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
              />
              <SelectForm
                name="user"
                label="Nama Orang Tua"
                options={listDataUsers}
              />
            </div>
            <DialogFooter className="mt-3">
              <Button
                variant="outline-danger"
                type="button"
                onClick={() => setOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </FormProvider>
  );
}

export default PasienForm;
