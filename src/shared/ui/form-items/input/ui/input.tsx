import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Input as AntInput, InputRef, Form } from 'antd'

type InputType = {
  type: string
  name: string
  minLength?: number
  required: boolean
  defaultValue: string
  placeholder: string
  label: string
} & React.RefAttributes<InputRef>

const Input: React.FC<InputType> = ({
  type,
  name,
  minLength,
  required,
  placeholder,
  defaultValue,
  label,
  ...rest
}) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control,
    rules: { required, minLength },
    defaultValue,
  })

  return (
    <Form.Item label={label}>
      <AntInput
        {...field}
        {...rest}
        type={type}
        placeholder={placeholder}
        ref={field.ref as React.Ref<InputRef>}
      />
    </Form.Item>
  )
}

export default Input
