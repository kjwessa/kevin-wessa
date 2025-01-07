'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { TextFieldClientProps } from 'payload'

import { useField, Button, TextInput, FieldLabel, useFormFields, useForm } from '@payloadcms/ui'

import { formatSlug } from '@/utilities/formatSlug'
import './index.scss'

type SlugComponentProps = {
  fieldToUse: string
  checkboxFieldPath: string
} & TextFieldClientProps

export const SlugComponent: React.FC<SlugComponentProps> = ({
  field,
  fieldToUse,
  checkboxFieldPath: checkboxFieldPathFromProps,
  path,
  readOnly: readOnlyFromProps,
}) => {
  const { label } = field
  const [previewSlug, setPreviewSlug] = useState<string>('')

  const checkboxFieldPath = path?.includes('.')
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps

  const { value, setValue } = useField<string>({ path: path || field.name })
  const { dispatchFields } = useForm()

  // The value of the checkbox
  const checkboxValue = useFormFields(([fields]) => {
    return fields[checkboxFieldPath]?.value as string
  })

  // The value of the field we're listening to for the slug
  const targetFieldValue = useFormFields(([fields]) => {
    return fields[fieldToUse]?.value as string
  })

  // Update preview immediately when title changes
  useEffect(() => {
    if (targetFieldValue) {
      const formattedSlug = formatSlug(targetFieldValue)
      setPreviewSlug(formattedSlug)
    } else {
      setPreviewSlug('')
    }
  }, [targetFieldValue])

  // Update actual slug value when conditions are met
  useEffect(() => {
    // Only update the slug if:
    // 1. It's unlocked (checkboxValue is false)
    // 2. AND either:
    //    a) The current value is empty (new post)
    //    b) OR we're not in edit mode (value hasn't been saved yet)
    if (!checkboxValue && (!value || !value.length)) {
      if (targetFieldValue) {
        const formattedSlug = formatSlug(targetFieldValue)
        if (value !== formattedSlug) setValue(formattedSlug)
      } else {
        if (value !== '') setValue('')
      }
    }
  }, [targetFieldValue, checkboxValue, setValue, value])

  const handleLock = useCallback(
    (e) => {
      e.preventDefault()
      dispatchFields({
        type: 'UPDATE',
        path: checkboxFieldPath,
        value: !checkboxValue,
      })
      // When unlocking, don't auto-update from title
      // This allows manual editing while unlocked
    },
    [checkboxValue, checkboxFieldPath, dispatchFields],
  )

  const readOnly = readOnlyFromProps || checkboxValue
  const displayValue = value || previewSlug

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} />
        <Button className="lock-button" buttonStyle="none" onClick={handleLock}>
          {checkboxValue ? 'Unlock' : 'Lock'}
        </Button>
      </div>

      <TextInput
        value={displayValue}
        onChange={setValue}
        path={path || field.name}
        readOnly={Boolean(readOnly)}
      />
    </div>
  )
}
