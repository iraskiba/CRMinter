import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import { FC } from 'react'

const buttonTexts = {
  new: 'Add New',
  deal: 'Add New Deal',
  customer: 'Add New Customer',
}

type ButtonVariant = 'new' | 'deal' | 'customer'

type CustomButtonProps = {
  variant: ButtonVariant
}
const CustomButton: FC<CustomButtonProps> = ({ variant }) => {
  const buttonText = buttonTexts[variant] || 'Add New'

  return (
    <Button
      className={styles.customButton}
      type="primary"
      icon={<PlusOutlined />}
      iconPosition="end"
    >
      {buttonText}
    </Button>
  )
}

export default CustomButton
