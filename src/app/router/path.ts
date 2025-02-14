const Paths: Record<string, { name: string; path: string }> = {
  home: { name: 'Dashboard', path: '/' },
  login: { name: 'Login', path: '/login' },
  deals: { name: 'Deals', path: '/deals' },
  dealDetails: { name: 'Deal Details', path: '/deals/:id' },
  customers: { name: 'Customers', path: '/customers' },
  customerDetails: { name: 'Customer Details', path: '/customers/:id' },
  tasks: { name: 'Tasks', path: '/tasks' },
  calendar: { name: 'Calendar', path: '/calendar' },
  events: { name: 'Events', path: '/event' },
  settings: { name: 'Settings', path: '/settings' },
}
export default Paths
