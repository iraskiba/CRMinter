import Paths from '@app/router/path.ts'

export const getPageTitle = (pathname: string) => {
  const pathKey = Object.keys(Paths).find((key) => Paths[key].path === pathname)
  return pathKey ? Paths[pathKey].name : 'Dashboard'
}
