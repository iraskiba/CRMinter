import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@ui/header/header.tsx'
import CountElement from '@ui/count-element/count-element.tsx'
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
