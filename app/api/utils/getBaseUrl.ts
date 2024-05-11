export default function getBaseUrl() {
  // browser should use relative path
  if (typeof window !== 'undefined') {
    return ''
  }

  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // reference for render.com
  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
  }

  // reference for other server provider
  if (process.env.NEXT_PUBLIC_SERVER_URL) {
    return `http://${process.env.NEXT_PUBLIC_SERVER_URL}`
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}
