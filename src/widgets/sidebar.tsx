import {
  ShoppingOutlined,
  CarryOutOutlined,
  SignatureOutlined,
  AppstoreAddOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  TableOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import { Paths } from '../router/path.ts'

const items = [
  { icon: <AppstoreAddOutlined />, to: Paths.home.path, name: Paths.home.name },
  { icon: <ShoppingOutlined />, to: Paths.deals.path, name: Paths.deals.name },
  {
    icon: <UsergroupAddOutlined />,
    to: Paths.customers.path,
    name: Paths.customers.name,
  },
  { icon: <CarryOutOutlined />, to: Paths.tasks.path, name: Paths.tasks.name },
  {
    icon: <TableOutlined />,
    to: Paths.calendar.path,
    name: Paths.calendar.name,
  },
  {
    icon: <SignatureOutlined />,
    to: Paths.reminder.path,
    name: Paths.reminder.name,
  },
  {
    icon: <SettingOutlined />,
    to: Paths.settings.path,
    name: Paths.settings.name,
  },
]

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {items.map((el) => (
        <NavLink key={el.to} to={el.to} className={styles.link}>
          <Button shape="circle" type={'default'} className={styles.button}>
            {el.icon}
          </Button>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
