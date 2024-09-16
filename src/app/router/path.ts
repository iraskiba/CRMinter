const Paths: Record<string, { name: string; path: string }> = {
  home: { name: 'Dashboard', path: '/' },
  deals: { name: 'Deals', path: '/deals' },
  //dealDetails: { name: 'Deal Details', path: '/deals/:id'},
  customers: { name: 'Customers', path: '/customers' },
  //customerDetails: { name: 'Customer Details', path: '/customers/:id'},
  tasks: { name: 'Tasks', path: '/tasks' },
  calendar: { name: 'Calendar', path: '/calendar' },
  reminder: { name: 'Reminder', path: '/reminder' },
  settings: { name: 'Settings', path: '/settings' },
}
export default Paths
