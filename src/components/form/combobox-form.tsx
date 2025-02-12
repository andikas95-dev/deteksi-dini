import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover';
import { ChevronsUpDown, Command, Check } from 'lucide-react';
import { Button } from '../ui/button';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import Combobox, { ComboboxProps } from '../ui/combobox';

type ComboboxFormProps = ComboboxProps & {
  name: string;
  labelClassName?: string;
  label: string;
};

function ComboboxForm({
  labelClassName,
  label,
  name,
  ...props
}: ComboboxFormProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className={labelClassName}>{label}</FormLabel>
          <Combobox
            {...props}
            {...field}
            value={field.value}
            setValue={(item: any) => field.onChange(item.value)}
          />
          {/* <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ComboboxForm;
