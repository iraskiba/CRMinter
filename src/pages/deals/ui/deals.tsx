import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { ModalEvent } from '@process/modal'
import { useQuery } from '@tanstack/react-query'
import { Avatar, Button, Select, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePaginationStore } from '@pages/customers'
import { useDealStore } from '@pages/deals'
import { fetchDeals } from '@pages/deals/api/api.ts'
import { Deal } from '@pages/deals/types.ts'
import { AddDeals } from '@entities/deals-modal'
import styles from './style.module.scss'

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
    render: (_, record) => (
      <Button
        icon={<EditOutlined />}
        onClick={(e) => {
          e.stopPropagation()
          ModalEvent.open(<AddDeals deal={record} />)
        }}
      />
    ),
  },
]

const Deals = () => {
  const navigate = useNavigate()
  const [totalCount, setTotalCount] = useState(0)
  const { params, setParams } = usePaginationStore()
  const { deal, setDeal } = useDealStore()

  const { page, pageSize, sortBy, sortOrder } = params
  const { data, error, isLoading } = useQuery({
    queryKey: ['deals', page, pageSize, sortBy, sortOrder],
    queryFn: () => fetchDeals(page, sortBy, sortOrder),
  })

  useEffect(() => {
    if (data) {
      setTotalCount(data.totalCount ?? 0)
      setDeal(data.content ?? [])
    }
  }, [data, setDeal])

  if (error) {
    return <div>Error loading data</div>
  }
  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split('.') as [
      'creationDate' | 'dueDate',
      'asc' | 'desc',
    ]
    setParams({ sortBy, sortOrder })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: {totalCount || 0} deals</span>
        <div className={styles.containerButton}>
          <Button className={styles.button} type="default">
            Sort by:
            <Select
              popupMatchSelectWidth={false}
              options={[
                { value: 'creationDate.desc', label: 'Date Created ↓' },
                { value: 'creationDate.asc', label: 'Date Created ↑' },
                { value: 'dueDate.desc', label: 'Due Date ↓' },
                { value: 'dueDate.asc', label: 'Due Date ↑' },
              ]}
              defaultValue="creationDate.desc"
              style={{ marginLeft: 8 }}
              onChange={handleSortChange}
            />
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
        dataSource={deal}
        pagination={false}
        loading={isLoading}
        onRow={(record) => ({
          onClick: () =>
            navigate(`/deals/${record.id}`, {
              state: { deal: record },
            }),
        })}
      />
      <div className={styles.wrapperButton}>
        <Button
          className={styles.loadMoreButton}
          onClick={() => setParams({ page: page + 1 })}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Deals
