import { RouteObject } from 'react-router-dom'
import { Paths } from './path.ts'
import Dashboard from '@pages/dashboard/ui/dashboard.tsx'
import { Navigate } from 'react-router-dom'
import Deals from '@pages/deals/ui/deals.tsx'
import Customers from '@pages/customers/ui/customers.tsx'
import DashboardContent from '@pages/dashboard/ui/dashboard-content.tsx'
import CustomerDetails from '@pages/customer-details/ui/customer-details.tsx'
import TasksTable from '@pages/tasks/ui/tasks-table.tsx'

export const rotes: RouteObject[] = [
  {
    path: Paths.home.path,
    element: <Dashboard />,
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
