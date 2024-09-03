import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import styles from './styles.module.scss'
import AvatarUpload from '@pages/customer-details/ui/avatar-upload.tsx'

const CustomerDetails = () => {
  const methods = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }
  type FormData = {
    username: string
  }

  return (
    <div className={styles.main}>
      <AvatarUpload />
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.items}>
            <FormInput
              label="First Name"
              type="text"
              name="user"
              placeholder="Barbara"
              required={true}
              defaultValue=""
            />
            <FormInput
              label="Last Name"
              type="text"
              name="username"
              placeholder="Anderson"
              required={true}
              defaultValue=""
            />
          </div>

          <div className={styles.items}>
            <FormInput
              label="Email"
              type="email"
              name="email"
              placeholder="banderson@gmail.com"
              required={true}
              defaultValue=""
            />
            <FormInput
              label="Phone"
              type="tel"
              name="phone"
              placeholder="310-685-3335"
              required={true}
              defaultValue=""
            />
          </div>

          <div className={styles.address}>
            <FormInput
              label="Address"
              type="text"
              name="address"
              placeholder="Street Address"
              required={true}
              defaultValue=""
            />
          </div>

          <div className={styles.details}>
            <FormInput
              type="text"
              name="city"
              placeholder="City"
              required={true}
              defaultValue=""
            />
            <FormInput
              type="text"
              name="province"
              placeholder="State/ Province"
              required={true}
              defaultValue=""
            />
            <FormInput
              type="text"
              name="code"
              placeholder="Zip Code"
              required={true}
              defaultValue=""
            />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
export default CustomerDetails
