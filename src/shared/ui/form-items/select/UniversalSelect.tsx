import { useController, useFormContext } from 'react-hook-form'
import { Select } from 'antd'
import { options } from './options.ts'
import { SelectProps } from 'antd/es/select'
import styles from './styles.module.scss'

const { Option } = Select
type Props = { name: string } & SelectProps //кастомные пропсы + наследование пропсов из библиотеки
const UniversalSelect = ({ name, ...selectProps }: Props) => {
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
