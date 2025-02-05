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
import { Input, InputProps } from '@/components/ui/input';

interface InputFormProps extends InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
}

function InputForm({
  name = '',
  label,
  placeholder,
  labelClassName,
  ...props
}: InputFormProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={labelClassName}>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...props} {...field} value={field.value ?? ''} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputForm;
