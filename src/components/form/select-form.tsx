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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SelectFormProps extends InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  options?: {
    value: string;
    label: string;
  }[];
}

function SelectForm({
  name = '',
  label,
  placeholder,
  labelClassName,
  options,
  ...props
}: SelectFormProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className={labelClassName}>{label}</FormLabel>
            <Select onValueChange={(val) => {
              if(val !== ""){
                field.onChange(val);
              }
            }} defaultValue={field.value} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options?.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* <FormControl>
              <Select placeholder={placeholder} {...props} {...field} value={field.value ?? ''} />
            </FormControl> */}
            {/* <FormDescription>This is your public display name.</FormDescription> */}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  );
}

export default SelectForm;
