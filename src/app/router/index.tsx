import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import CustomerDetails from '@pages/customer-details'
import { Customers } from '@pages/customers'
import { Dashboard, DashboardContent } from '@pages/dashboard'
import DealDetails from '@pages/deal-details'
import { Deals } from '@pages/deals'
import { Login } from '@pages/login'
import { useIsAuthenticated } from '@pages/login'
import TasksTable from '@pages/tasks'
import Paths from './path.ts'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useIsAuthenticated()
  return isAuthenticated ? children : <Navigate to={Paths.login.path} />
}

export const rotes: RouteObject[] = [
  {
    path: Paths.login.path,
    element: <Login />,
  },
  {
    path: Paths.home.path,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
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
        path: Paths.customerDetails.path,
        element: <CustomerDetails />,
      },
      {
        path: Paths.tasks.path,
        element: <TasksTable />,
      },
      {
        path: Paths.dealDetails.path,
        element: <DealDetails />,
      },
      {
        path: Paths.calendar.path,
        element: <div>test</div>,
      },
      {
        path: Paths.events.path,
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
