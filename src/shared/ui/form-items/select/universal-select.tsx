import { useController, useFormContext } from 'react-hook-form'
import { Select } from 'antd'
import { SelectProps } from 'antd/es/select'
import styles from './styles.module.scss'
import { OptionProps } from 'rc-select/lib/Option'

const { Option } = Select
interface CustomOptionProps extends Omit<OptionProps, 'children'> {
  value: string
  label: string
}
type Props = {
  name: string
  options: CustomOptionProps[]
  label?: string
} & SelectProps //кастомные пропсы + наследование пропсов из библиотеки
const UniversalSelect = ({ name, options, label, ...selectProps }: Props) => {
  const { control } = useFormContext()
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <div className={styles.select}>
      {label && <label htmlFor={name}>{label}</label>}
      <Select {...field} {...selectProps}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {error && <p>{error.message}</p>}
    </div>
  )
}
export default UniversalSelect
