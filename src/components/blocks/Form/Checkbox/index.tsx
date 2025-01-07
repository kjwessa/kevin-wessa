import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { useFormContext } from 'react-hook-form'

import { Checkbox as CheckboxUi } from '@/components/ui/Checkbox/index'
import { Label } from '@/components/ui/Label/index'
import React from 'react'

import { Error } from '@/components/blocks/Form/Error'
import { Width } from '@/components/blocks/Form/Width'

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    getValues: any
    register: UseFormRegister<FieldValues>
    setValue: any
  }
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width }) => {
  const props = register(name, { required: requiredFromProps })
  const { setValue } = useFormContext()

  return (
    <Width width={width}>
      <div className="flex items-center gap-2">
        <CheckboxUi
          defaultChecked={defaultValue}
          id={name}
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked)
          }}
        />
        <Label htmlFor={name}>
          {label}
          {requiredFromProps && <span className="text-destructive ml-1">*</span>}
        </Label>
      </div>
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
