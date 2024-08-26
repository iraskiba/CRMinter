import { RouteObject } from 'react-router/dist/lib/context'
import { Paths } from './path.ts'
import Dashboard from '../pages/dashboard/dashboard.tsx'
import { Navigate } from 'react-router-dom'

export const rotes: RouteObject[] = [
  {
    path: Paths.home.path,
    element: <Dashboard />,
    children: [
      {
        path: Paths.deals.path,
        element: <div>test</div>,
      },
      {
        path: Paths.customers.path,
        element: <div>test</div>,
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
