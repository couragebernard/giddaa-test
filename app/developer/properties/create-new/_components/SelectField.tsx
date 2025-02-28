/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '@/components/ui/label';
import React from 'react'
import { input_class, label_class, select_class } from './CreateEstateForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InputField from './InputField';

type Props = {
    field: { key: string, label: string, type: string };
    register: any;
    errors: any;
    setValue: any
}

const SelectField = (props: Props) => {
    const { field, register, errors, setValue } = props
    if (field.type === "boolean") {
        return (
            <div className="space-y-1">
                <Label className={label_class}>{field.label}</Label>

                <Select onValueChange={(e) => setValue("features[0]."+field.key, e === "true" ? true : false)}>
                    <SelectTrigger className={select_class}>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                    </SelectContent>
                </Select>

            </div>
        );
    }

    return (
        <InputField
            key={"features[0]."+field.key}
            label={field.label}
            name={field.key}
            type={field.type}
            register={register}
            error={errors[field.key as keyof typeof errors]}
            labelClass={label_class}
            inputClass={input_class}
        />
    );
}

export default SelectField