import { Avatar, Button, Table, AvatarProps } from 'antd'
import styles from './style.module.scss'
import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loader from '@shared/ui/loader/loader.tsx'
import { useEffect, useState } from 'react'

const columns: ColumnsType<Deal> = [
  {
    title: <PictureOutlined />,
    dataIndex: 'avatar',
    key: 'avatar',
    render: (avatar) => <Avatar size="large" src={avatar} />,
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
const fetchDeals = async (): Promise<{
  content: Deal[]
  totalCount: number
}> => {
  const response = await axios.post('http://localhost:3001/deals')
  return response.data
}
const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [deals, setDeals] = useState<Deal[]>([])

  const { data, error, isLoading } = useQuery({
    queryKey: ['deals', currentPage],
    queryFn: () => fetchDeals(),
  })
  useEffect(() => {
    if (data) {
      setDeals((prev) => [...prev, ...data.content])
    }
  }, [data])

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  if (isLoading && currentPage === 1) {
    return <Loader />
  }
  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: {data?.totalCount || 0} deals</span>
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
        dataSource={deals}
        pagination={false}
      />
      <div className={styles.wrapperButton}>
        <Button onClick={loadMore} className={styles.loadMoreButton}>
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Deals
