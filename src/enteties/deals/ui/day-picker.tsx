import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import FormInput from '@shared/ui/form-items/input'

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDayClick = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <div>
      <FormInput
        type="text"
        name="date"
        placeholder="Appointment Date"
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        readOnly
      />
      <DayPicker onDayClick={handleDayClick} />
    </div>
  )
}

export default DateInput
