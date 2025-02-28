import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; // Generic type for different schemas
  error?: FieldError;
  labelClass?: string;
  inputClass?: string;
};

export default function InputField({
  label,
  name,
  type = "text",
  register,
  error,
  labelClass = "",
  inputClass = "",
}: InputFieldProps) {
  return (
    <div className="space-y-1">
      <Label className={labelClass}>{label}</Label>
      <Input
        type={type}
        className={inputClass}
        {...register(name, {
          setValueAs:
            type === "number"
              ? (v) => (v ? Number(v) : undefined)
              : type === "datetime-local"
              ? (v) => (v ? new Date(v).toISOString() : undefined) 
              : undefined,
        })}
      />
      {error && <p className="text-[11px] text-red-500">{error.message}</p>}
    </div>
  );
}
