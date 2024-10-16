export type TasksTableType = {
  id: string
  date: string
  tasks: string
  creationDate: string
  dueDate: string
}

export type TaskFormValues = {
  id: string
  date: string
  tasks: string
}

export type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}
