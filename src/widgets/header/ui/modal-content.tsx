import { Avatar, Button, Select, Input } from 'antd'
import { useForm, FormProvider } from 'react-hook-form'
import { formFields } from '@widgets/header/model/constants.tsx'
import FormInput from '@shared/ui/form-items/input/form-input.tsx'
import Paths from '@app/router/path.ts'
import { FC } from 'react'

type ModalContentProps = {
  path: string
  // eslint-disable-next-line
  onSubmit: (data: Record<string, any>) => void
}

export const ModalContentMap: FC<ModalContentProps> = ({ path, onSubmit }) => {
  const methods = useForm()

  const contentModal = {
    [Paths.deals.path]: {
      title: 'Add New Deal',
      content: (
        <>
          <div>
            <Avatar size={50} />
            <div>
              <p>Customer</p>
              <p>Customer Name</p>
              <Button type="default">Change Customer</Button>
            </div>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {formFields.map((field, index) =>
                field.type === 'select' ? (
                  <div key={index}>
                    <label>{field.label}</label>
                    <Select placeholder={field.placeholder} />
                  </div>
                ) : (
                  <FormInput
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    label={field.label}
                  />
                ),
              )}
              <label>Progress</label>
              <Select />
            </form>
          </FormProvider>
        </>
      ),
    },
    [Paths.customers.path]: {
      title: 'Add New Customer',
      content: (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <FormInput
                type="text"
                name="firstName"
                placeholder="First Name"
                label="First Name"
              />
            </form>
          </FormProvider>
        </>
      ),
    },
    [Paths.tasks.path]: {
      title: 'Add New Task',
      content: (
        <>
          <Input.TextArea rows={4} placeholder="Enter task description" />
          <label>Due Date</label>
          <Input type="text" placeholder="Due Date" />
        </>
      ),
    },
    default: {
      title: 'Add New',
      content: (
        <>
          <Button>Deal</Button>
          <Button>Customer</Button>
        </>
      ),
    },
  }

  const modal = contentModal[path] || contentModal['default']

  return (
    <div>
      <h2>{modal.title}</h2>
      {modal.content}
    </div>
  )
}
export default ModalContentMap
