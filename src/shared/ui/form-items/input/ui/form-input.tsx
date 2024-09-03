import { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Input as AntInput, InputProps } from 'antd'
import styles from './styles.module.scss'

type InputType = {
  type: string
  name: string
  required: boolean
  defaultValue: string
  placeholder: string
  label?: string
} & InputProps
const FormInput: FC<InputType> = ({
  type,
  name,
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
    rules: { required },
    defaultValue,
  })
  return (
    <div>
      <label>{label}</label>
      <AntInput
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