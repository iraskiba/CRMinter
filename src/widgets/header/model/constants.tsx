import Paths from '@app/router/path.ts'
import { ButtonVariant } from '@shared/ui/custom-button-plus/custom-button-plus.tsx'

export const formFields = [
  {
    type: 'text',
    name: 'streetAddress',
    placeholder: 'Street Address',
    label: 'Address',
  },
  { type: 'text', name: 'city', placeholder: 'City' },
  { type: 'text', name: 'state', placeholder: 'State/Province' },
  { type: 'text', name: 'zipCode', placeholder: 'Zip Code' },
  { type: 'text', name: 'roomArea', placeholder: '', label: 'Room Area (m2)' },
  {
    type: 'text',
    name: 'numberOfPeople',
    placeholder: '',
    label: '# of People',
  },
  {
    type: 'text',
    name: 'appointmentDate',
    placeholder: 'Nov 14, 2021',
    label: 'Appointment Date',
  },
  {
    type: 'text',
    name: 'specialInstructions',
    placeholder: '',
    label: 'Special Instructions',
  },
  { type: 'select', name: 'roomAccess', placeholder: '', label: 'Room Access' },
  { type: 'text', name: 'roomAccessDetails', placeholder: 'Keys with doorman' },
  { type: 'text', name: 'price', placeholder: '', label: 'Price ($)' },
]

export const buttonVariants: { [key: string]: ButtonVariant } = {
  [Paths.deals.path]: 'deal',
  [Paths.customers.path]: 'customer',
  [Paths.tasks.path]: 'task',
}
