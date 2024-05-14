import { auth } from '@/auth'

export default async function currentRole() {
  const session = await auth()
  return session?.user.role
}
