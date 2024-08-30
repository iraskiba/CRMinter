import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import Input from '@shared/ui/form-items/input/ui/input.tsx'

const CustomerDetails: React.FC = () => {
  const methods = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }
  type FormData = {
    username: string
    password: string
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          label="Пароль"
          type="text"
          name="username"
          placeholder="Введите имя пользователя"
          required={true}
          defaultValue=""
        />
        <Input
          label="Пароль"
          type="password"
          name="password"
          placeholder="Введите пароль"
          required={true}
          defaultValue=""
        />
      </form>
    </FormProvider>
  )
}
export default CustomerDetails
