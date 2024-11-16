import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { InputProps } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';

interface InputFormProps extends InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
}

function InputPasswordForm({
  name = '',
  label,
  placeholder,
  ...props
}: InputFormProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputPassword placeholder={placeholder} {...props} {...field} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputPasswordForm;
