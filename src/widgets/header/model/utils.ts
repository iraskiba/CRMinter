import Paths from '@app/router/path.ts'

export const getPageTitle = (pathname: string) => {
  const pathKey = Object.keys(Paths).find((key) => Paths[key].path === pathname)
  return pathKey ? Paths[pathKey].name : 'Dashboard'
}
export const getButtonText = (path: string): string => {
  if (path === Paths.home.path) {
    return 'Add New'
  }
  const pathEntry = Object.values(Paths).find((entry) => entry.path === path)
  return pathEntry ? `Add New ${pathEntry.name}` : 'Add New'
}
