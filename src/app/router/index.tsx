import { RouteObject } from 'react-router-dom'
import { Paths } from './path.ts'
import { Navigate } from 'react-router-dom'
import Deals from '@pages/deals'
import Customers from '@pages/customers'
import CustomerDetails from '@pages/customer-details'
import TasksTable from '@pages/tasks'
import { Dashboard, DashboardContent } from '@pages/dashboard'

export const rotes: RouteObject[] = [
  {
    path: Paths.home.path,
    element: <Dashboard visible={true} onClose={() => {}} />,
    children: [
      {
        path: Paths.home.path,
        element: <DashboardContent />,
      },
      {
        path: Paths.deals.path,
        element: <Deals />,
      },
      {
        path: Paths.customers.path,
        element: <Customers />,
      },
      {
        path: Paths.tasks.path,
        element: <TasksTable />,
      },
      {
        path: Paths.calendar.path,
        element: <CustomerDetails />,
      },
      {
        path: Paths.reminder.path,
        element: <div>test</div>,
      },
      {
        path: Paths.settings.path,
        element: <div>test</div>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Paths.home.path} replace />,
  },
]
