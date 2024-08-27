import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@widgets/header'
import CountElement from '@shared/ui/count-element'
import { UsergroupDeleteOutlined } from '@ant-design/icons'

const Dashboard = () => {
  return (
    <div>
      <CountElement
        title={'Customers'}
        count={158}
        icon={<UsergroupDeleteOutlined />}
      />
      <Header />
      <main>
        <Sidebar />
        <section>
          <Outlet />
        </section>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Dashboard
