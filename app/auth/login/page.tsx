import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import SignInGoogle from './sign-in.google'

export default function AuthSignInPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>

      <CardFooter>
        <SignInGoogle />
      </CardFooter>
    </Card>
  )
}
