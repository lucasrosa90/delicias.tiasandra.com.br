/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Export the application as a static HTML-only site
  // output: 'standalone', // Export the application with a Node.js server lightweight server
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
