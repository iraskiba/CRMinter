import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { TasksTableType } from '@pages/tasks/types.ts'

type TaskStore = {
  task: TasksTableType[]
  setTask: (task: TasksTableType[]) => void
  updateTask: (id: string, updateTask: TasksTableType) => void
}

const useTaskStore = create<TaskStore>()(
  immer((set) => ({
    task: [],
    setTask: (task) =>
      set((state) => {
        state.task = task
      }),
    updateTask: (id, updateTask) =>
      set((state) => {
        const taskIndex = state.task.findIndex((task) => task.id === id)
        if (taskIndex !== -1) {
          state.task[taskIndex] = {
            ...state.task[taskIndex],
            ...updateTask,
          }
        }
      }),
  })),
)

export default useTaskStore
