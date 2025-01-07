import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/Input/index'
import { Label } from '@/components/ui/Label/index'
import React from 'react'

import { Error } from '@/components/blocks/Form/Error'
import { Width } from '@/components/blocks/Form/Width'

export const Number: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    placeholder?: string
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  width,
  placeholder,
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}
        {requiredFromProps && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="number"
        placeholder={placeholder}
        {...register(name, { required: requiredFromProps })}
      />
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
