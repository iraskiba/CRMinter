import { $api } from '@shared/lib/axios.tsx'
type EditActivityForm = {
  activityDescription: string
  date: Date | null
}
export const postActivity = async (activity: EditActivityForm) => {
  try {
    const { data } = await $api.post<EditActivityForm>('/activity', activity)
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}
