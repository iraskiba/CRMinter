import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { ButtonProps } from 'antd/es/button/button'
import { FC, ReactNode } from 'react'
import styles from './style.module.scss'

type CustomButtonProps = {
  children?: ReactNode
  icon?: ReactNode
  buttonText?: string
} & ButtonProps

const CustomButton: FC<CustomButtonProps> = ({
  children,
  icon,
  buttonText = 'Add New',
  onClick,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      className={styles.customButton}
      type="primary"
      icon={<PlusOutlined />}
      iconPosition="end"
      {...props}
    >
      {children || buttonText}
    </Button>
  )
}

export default CustomButton
