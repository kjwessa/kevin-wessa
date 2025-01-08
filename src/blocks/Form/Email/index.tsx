import type { EmailField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/Input/index'
import { Label } from '@/components/ui/Label/index'
import React from 'react'

import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'

export const Email: React.FC<
  EmailField & {
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
        {/* Required asterisk already implemented with correct styling */}
        {requiredFromProps && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required: requiredFromProps })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
