import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { CalendarDatePicker } from '@/components/ui/calendar-date-picker';
import { DateRange } from 'react-day-picker';

interface DatePickerFormProps {
  name?: string;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  position?: "left" | "center"
  disabled?: boolean
  // dateRange: DateRange;
  // onDateSelect: (range: { from: Date; to: Date }) => void;
}

function DatePickerForm({
  name = '',
  label,
  placeholder,
  labelClassName,
  disabled = false,
  // dateRange,
  // onDateSelect,
  ...props
}: DatePickerFormProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        console.log('🚀 ~ field:', field);

        const handleDataChane = (range: { from: Date; to: Date }) => {
          console.log('🚀 ~ range:', range);
          field.onChange(range)
          // onDateSelect
          return;
        };

        return (
          <FormItem>
            <FormLabel className={labelClassName}>{label}</FormLabel>
            <FormControl>
              <CalendarDatePicker
                date={field.value}
                onDateSelect={handleDataChane}
                variant="outline"
                numberOfMonths={1}
                yearsRange={5}
                yearToNow
                className="w-full"
                placeholder={placeholder}
                disabled={disabled}
                {...props}
              />
            </FormControl>
            {/* <FormDescription>This is your public display name.</FormDescription> */}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default DatePickerForm;
