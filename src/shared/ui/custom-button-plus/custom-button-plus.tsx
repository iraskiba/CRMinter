import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import { FC } from 'react'
import { ButtonProps } from 'antd/es/button/button'

const buttonTexts = {
  new: 'Add New',
  deal: 'Add New Deal',
  customer: 'Add New Customer',
}

type ButtonVariant = 'new' | 'deal' | 'customer'

type CustomButtonProps = {
  variant: ButtonVariant
} & ButtonProps
const CustomButton: FC<CustomButtonProps> = ({
  variant,
  onClick,
  ...props
}) => {
  const buttonText = buttonTexts[variant] || 'Add New'

  return (
    <Button
      onClick={onClick}
      className={styles.customButton}
      type="primary"
      icon={<PlusOutlined />}
      iconPosition="end"
      {...props}
    >
      {buttonText}
    </Button>
  )
}

export default CustomButton
