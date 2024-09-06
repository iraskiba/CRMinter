import { useState } from 'react'
import { Upload, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import type { UploadFile } from 'antd/es/upload/interface'
import styles from './styles.module.scss'

type FormValues = {
  avatar: UploadFile | null
}

const AvatarUpload = () => {
  const { control } = useForm<FormValues>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const myPromiseUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }
  const handleUpload = async (file: File) => {
    try {
      const result = await myPromiseUpload(file)
      setImageUrl(result)
    } catch (error) {
      console.error(error)
    }
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
            beforeUpload={async (file) => {
              await handleUpload(file)
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
              className={styles.iconEdit}
              icon={<EditOutlined />}
            />
          </Upload>
        )}
      />
      <Button
        shape="circle"
        className={styles.deleteIcon}
        icon={<DeleteOutlined />}
      />
    </div>
  )
}

export default AvatarUpload
