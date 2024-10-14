import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import FormInput from '@shared/ui/form-items/input'
import { ScheduleOutlined } from '@ant-design/icons'

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isPickerVisible, setPickerVisible] = useState(false)

  const handleDayClick = (day: Date) => {
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
