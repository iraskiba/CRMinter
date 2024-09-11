import { Avatar, Button, Table, AvatarProps } from 'antd'
import styles from './style.module.scss'
import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useEffect, useState } from 'react'

const columns: ColumnsType<Deal> = [
  {
    title: <PictureOutlined />,
    dataIndex: 'avatar',
    key: 'avatar',
    render: () => <Avatar size="large" />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Area',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: 'Appointment Date',
    dataIndex: 'appointmentDate',
    key: 'appointmentDate',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: () => <Button icon={<EditOutlined />} />,
  },
]

type Deal = {
  id: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatarProps?: AvatarProps
}

const Deals = () => {
  const [data, setData] = useState([])
  const [totalDeals, setTotalDeals] = useState(0)
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/deals',
    })
      .then((response) => {
        setData(response.data)
        setTotalDeals(response.data.length)
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total:{totalDeals} deals</span>
        <div className={styles.containerButton}>
          <Button className={styles.button} type="default">
            Sort by:
          </Button>
          <Button
            className={styles.button}
            type="default"
            icon={<FilterOutlined />}
          >
            Filter
          </Button>
        </div>
      </div>
      <Table
        className={styles.containerTable}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )
}

export default Deals
