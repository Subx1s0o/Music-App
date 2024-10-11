"use client";
import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { Input } from "rizzui";
import { SongFormValues } from "./schemes/add-form.schema";

type TextInputProps = ComponentProps<"input"> & {
  control: Control<SongFormValues>;
  label?: string;
  name: keyof SongFormValues;
};

export default function TextInput({ label, name, control }: TextInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col gap-1">
      <Input
        {...control.register(name)}
        name={name}
        label={label}
        size="md"
        inputClassName="border border-black"
        className="w-full"
      />

      {errors[name] && (
        <p className="text-red-600">{errors[name].message?.toString()}</p>
      )}
    </div>
  );
}
