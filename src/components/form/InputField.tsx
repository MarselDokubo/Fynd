import React, { FC } from "react";

import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  forwardRef
} from "@chakra-ui/react";

import { FieldError, UseFormRegister } from "react-hook-form";

export type InputFieldProps = {
  type?: "text" | "email" | "password" | "textarea"; //the type  props determines how the input functions
  label?: string; // some descriptive text
  error?: FieldError; // some error message
} & Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

export const InputField: FC<InputFieldProps> = forwardRef(
  ({ type = "text", label, error, ...inputProps }, ref) => {
    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        {type === "textarea" ? (
          <Textarea bg={`white`} rows={8} {...inputProps} ref={ref} />
        ) : (
          <Input bg={`white`} type={type} {...inputProps} ref={ref} />
        )}
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }
);
