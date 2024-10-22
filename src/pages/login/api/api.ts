import axios from 'axios'
const fetchUserInfo = async (accessToken: string) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    return response.data
  } catch (error) {
    console.error('Error fetching user info:', error)
    throw error
  }
}
export default fetchUserInfo
