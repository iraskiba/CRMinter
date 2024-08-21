import { Button } from 'antd'
import UniversalSelect from './shared/ui/form-items/select/UniversalSelect.tsx'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

function App() {
  const methods = useForm({
    defaultValues: {
      test: 'option1',
    },
  })

  return (
    <div className="App">
      <FormProvider {...methods}>
        <UniversalSelect name={'test'} />
        <Button type="primary">Button</Button>
        <Button type="default">Button</Button>
        <Test>f</Test>
      </FormProvider>
    </div>
  )
}
function Test({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.PropsWithChildren) {
  return <button {...props}>{children}</button>
}
export default App
