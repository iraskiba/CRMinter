import { FC } from 'react'
import { RegisterOptions, useController, useFormContext } from 'react-hook-form'
import { Input, InputProps } from 'antd'
import styles from './styles.module.scss'

type InputType = {
  type: string
  name: string
  required?: boolean
  placeholder: string
  label?: string
  rules?: RegisterOptions
} & InputProps
const FormInput: FC<InputType> = ({
  type,
  name,
  required,
  placeholder,
  label,
  rules,
  ...rest
}) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control,
    rules: { required, ...rules },
  })
  return (
    <div>
      <label>{label}</label>
      <Input
        className={styles.input}
        {...field}
        {...rest}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormInput
