import type { CountryField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'

import { Label } from '@/components/ui/Label/index'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select/index'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '@/components/blocks/Form/Error'
import { Width } from '@/components/blocks/Form/Width'
import { countryOptions } from './options'

export const Country: React.FC<
  CountryField & {
    control: Control<FieldValues, any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  }
> = ({ name, control, errors, label, required, width }) => {
  return (
    <Width width={width}>
      <Label className="" htmlFor={name}>
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = countryOptions.find((t) => t.value === value)

          return (
            <Select onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger className="w-full" id={name}>
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map(({ label, value }) => {
                  return (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          )
        }}
        rules={{ required }}
      />
      {required && errors[name] && <Error />}
    </Width>
  )
}
