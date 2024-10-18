import 'react-day-picker/dist/style.css'
import { ScheduleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useController, useFormContext } from 'react-hook-form'
import { FormInput } from '@shared/ui/form-items/input'
import 'react-day-picker/dist/style.css'
type DateInputProps = {
  name: string
}
const DateInput = ({ name }: DateInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isPickerVisible, setPickerVisible] = useState(false)
  const { control, getValues, setValue } = useFormContext()
  const { field } = useController({
    name,
    control,
    defaultValue: new Date(),
  })
  useEffect(() => {
    const value = getValues(name)
    if (value) {
      setSelectedDate(new Date(value))
    } else {
      const today = new Date()
      setSelectedDate(today)
      setValue(name, today)
    }
  }, [getValues, name, setValue])

  const handleDayClick = (day: Date) => {
    field.onChange(day)
    setSelectedDate(day)
    setPickerVisible(false)
  }
  const togglePickerVisibility = () => {
    setPickerVisible(!isPickerVisible)
  }
  return (
    <div>
      <FormInput
        type="text"
        name="date"
        icon={<ScheduleOutlined />}
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        readOnly
        onClick={togglePickerVisibility}
      />
      {isPickerVisible && <DayPicker onDayClick={handleDayClick} />}
    </div>
  )
}

export default DateInput
