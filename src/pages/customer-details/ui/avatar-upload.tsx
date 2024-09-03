import { useState } from 'react'
import { Upload, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import type { UploadFile } from 'antd/es/upload/interface'
import styles from './styles.module.scss'

interface FormValues {
  avatar: UploadFile | null
}

const AvatarUpload = () => {
  const { control } = useForm<FormValues>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      setImageUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className={styles.uploadWrapper}>
      <Controller
        name="avatar"
        control={control}
        render={({ field }) => (
          <Upload
            {...field}
            showUploadList={false}
            beforeUpload={(file) => {
              handleUpload(file)
              field.onChange(file)
              return false
            }}
          >
            <div
              className={styles.avatar}
              style={{
                backgroundImage: imageUrl
                  ? `url(${imageUrl})`
                  : `url('https://via.placeholder.com/100x100')`,
              }}
            ></div>
            <Button
              shape="circle"
              className={styles.icon}
              icon={<EditOutlined />}
            />
          </Upload>
        )}
      />
      <Button
        shape="circle"
        className={styles.delete}
        icon={<DeleteOutlined />}
      />
    </div>
  )
}

export default AvatarUpload
