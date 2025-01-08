import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/Label/index'
import { Textarea as TextAreaComponent } from '@/components/ui/Textarea/index'
import React from 'react'

import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    rows?: number
    placeholder?: string
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 3,
  width,
  placeholder,
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}
        {requiredFromProps && <span className="text-destructive ml-1">*</span>}
      </Label>

      <TextAreaComponent
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        placeholder={placeholder}
        {...register(name, { required: requiredFromProps })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
