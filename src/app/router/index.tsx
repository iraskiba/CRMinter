import { RouteObject } from 'react-router-dom'
import { Paths } from './path.ts'
import Dashboard from '@pages/dashboard/ui/dashboard.tsx'
import { Navigate } from 'react-router-dom'
import Deals from '@pages/deals/ui/deals.tsx'
import Customers from '@pages/customers/ui/customers.tsx'

export const rotes: RouteObject[] = [
  {
    path: Paths.home.path,
    element: <Dashboard />,
    children: [
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
        element: <div>test</div>,
      },
      {
        path: Paths.calendar.path,
        element: <div>test</div>,
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
