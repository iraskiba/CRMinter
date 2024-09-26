import { Avatar, Button, Table, AvatarProps, Tag } from 'antd'
import styles from './style.module.scss'
import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchDeals } from '@pages/deals/api/api.ts'
import { eventBus } from '@shared/lib/event-bus.ts'
import { useModelStore } from '@pages/customers'
import AddDeals from '../../../enteties/deals/ui/modal-add-deals.tsx'

const columns: ColumnsType<Deal> = [
  {
    title: <PictureOutlined />,
    dataIndex: 'avatar',
    key: 'avatar',
    render: (_, { avatar, avatarProps }) => (
      <Avatar size="large" src={avatar} {...avatarProps} />
    ),
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
    render: (_, { status }) => {
      return <Tag className={styles.statusColor}>{status}</Tag>
    },
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: () => (
      <Button
        icon={<EditOutlined />}
        onClick={() => eventBus.emit('openEditModal')}
      />
    ),
  },
]

type Deal = {
  id: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatar: string
  avatarProps?: AvatarProps
}

const Deals = () => {
  const { isModalVisible, showModal, hiddenModal } = useModelStore()

  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useQuery({
    queryKey: ['deals', currentPage],
    queryFn: () => fetchDeals(currentPage),
  })

  useEffect(() => {
    const handleOpenModal = () => {
      showModal()
    }
    eventBus.subscribe('openEditModal', handleOpenModal)
    return () => {
      eventBus.unsubscribe('openEditModal', handleOpenModal)
    }
  }, [showModal])

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
        dataSource={data?.content || []}
        pagination={false}
        loading={isLoading}
      />
      <AddDeals open={isModalVisible} onClose={hiddenModal} />
      <div className={styles.wrapperButton}>
        <Button
          className={styles.loadMoreButton}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Deals
