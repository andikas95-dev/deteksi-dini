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
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface UserFormProps {
  type?: 'create' | 'update';
  submitForm: (data: any) => void;
  open?: boolean;
  setOpenChange: (open: boolean) => void;
  dataEdit?: any;
}

function UserForm({
  type = 'create',
  submitForm,
  open = false,
  setOpenChange,
  dataEdit,
}: UserFormProps) {
  const form = useForm();
  useEffect(() => {
    if (type === 'update' && dataEdit) {
      form.reset({
        id: dataEdit.id,
        name: dataEdit.name,
        email: dataEdit.email,
        role: dataEdit.role,
      });
    }
  }, [type, dataEdit, form]);

  return (
    <FormProvider {...form}>
      <Dialog open={open} onOpenChange={setOpenChange}>
        <DialogContent>
          <form onSubmit={form.handleSubmit(submitForm)}>
            <DialogHeader className="mb-3">
              <DialogTitle>Form User</DialogTitle>
              <DialogDescription>
                <p></p>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <InputForm name="name" label="Nama User" />
              <InputForm name="email" type='email' label="Email" />
              <InputPasswordForm name="password" label="Password" />
              <SelectForm name="role" label="Role" options={[
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
              ]} />
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

export default UserForm;
