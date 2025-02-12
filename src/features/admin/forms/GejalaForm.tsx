import InputForm from '@/components/form/input-form';
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
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface GejalaFormProps {
  type?: 'create' | 'update';
  submitForm: (data: any) => void;
  open?: boolean;
  setOpenChange: (open: boolean) => void;
  dataEdit?: any;
}

function GejalaForm({
  type = 'create',
  submitForm,
  open = false,
  setOpenChange,
  dataEdit,
}: GejalaFormProps) {
  const form = useForm();

  

  useEffect(() => {
    if (type === 'update' && dataEdit) {
      form.reset({
        id: dataEdit.id,
        gejala_id: dataEdit.gejala_id,
        nama_gejala: dataEdit.nama_gejala,
        cf_pakar: dataEdit.cf_pakar,
      });
    }
  }, [type, dataEdit, form]);

  return (
    <FormProvider {...form}>
      <Dialog open={open} onOpenChange={setOpenChange}>
        <DialogContent>
          <form onSubmit={form.handleSubmit(submitForm)}>
            <DialogHeader className="mb-3">
              <DialogTitle>Form Basis Pengetahuan</DialogTitle>
              <DialogDescription>
                <p></p>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <InputForm name="nama_gejala" label="Nama Gejala" />
              <InputForm name="cf_pakar" label="Nilai Pakar" />
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

export default GejalaForm;
