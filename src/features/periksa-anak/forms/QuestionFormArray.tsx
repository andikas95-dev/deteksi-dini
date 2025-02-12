import { FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { radioValues } from '@/helpers/constants/constants';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';


import { Controller } from 'react-hook-form';

function QuestionFormArray() {
  const methods = useFormContext();
  const { fields } = useFieldArray({
    control: methods.control,
    name: 'gejala',
  });
  console.log("🚀 ~ QuestionFormArray ~ fields:", fields);

  return (
    <>
      <h5 className="font-bold py-5">
        Isi sesuai keadaan anak anda dan sesuai sepengetahuan anda!!
      </h5>
      <div className="space-y-4">
        {fields.map((dataGejala: any, i: number) => (
          <div key={dataGejala.id}>
            <p className="pb-2 font-semibold">{`${i + 1}. ${
              dataGejala.nama_gejala
            }`}</p>
            <Controller
              name={`gejala.${i}.cf_user`}
              control={methods.control}
              render={({ field }) => (
                <RadioGroup
                  className="grid grid-cols-3 gap-2"
                  {...field}
                  onValueChange={field.onChange}
                >
                  {radioValues.map((radioValue, index) => (
                    <div className="flex items-start space-x-2" key={radioValue.label}>
                    <RadioGroupItem value={`${radioValue.value}`} id={`${radioValue.label}-${i}`} />
                    <Label htmlFor={`${radioValue.label}-${i}`}>{radioValue.label}</Label>
                  </div>
                  ))}
                </RadioGroup>
              )}
            />
          </div>
        ))}
      </div>
    </>
  );
}

// function QuestionForm({list}) {
//   return (
//     <>
//       <h5 className="font-bold py-5">
//         Isi sesuai keadaan anak anda dan sesuai sepengetahuan anda!!
//       </h5>
//       <div className="space-y-4">
//         {list &&
//           list.map((dataGejala: any, i: number) => (
//             <div key={dataGejala.id}>
//               <p className="pb-2 font-semibold">{`${i + 1}. ${
//                 dataGejala.nama_gejala
//               }`}</p>
//               <RadioGroup className="grid grid-cols-3 gap-2">
//                 <div className="flex items-start space-x-2">
//                   <RadioGroupItem value="option-one" id="option-one" />
//                   <Label htmlFor="option-one">Tidak Tahu</Label>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <RadioGroupItem value="option-two" id="option-two" />
//                   <Label htmlFor="option-two">Hampir Mungkin</Label>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <RadioGroupItem value="option-two" id="option-two" />
//                   <Label htmlFor="option-two">Mungkin</Label>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <RadioGroupItem value="option-two" id="option-two" />
//                   <Label htmlFor="option-two">Kemungkinan Besar</Label>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <RadioGroupItem value="option-two" id="option-two" />
//                   <Label htmlFor="option-two">Hampir Pasti</Label>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <RadioGroupItem value="option-two" id="option-two" />
//                   <Label htmlFor="option-two">Pasti Benar</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

export default QuestionFormArray;
