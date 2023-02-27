/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: {
      loader: '@next/font/google',
      options: { subsets: ['latin'] },
    },
  },
  env: {
    Naver_Book_Search_API_URL: process.env.Naver_Book_Search_API_URL,
    Naver_Client_Id: process.env.Naver_Client_Id,
    Naver_Client_Secret: process.env.Naver_Client_Secret,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopping-phinf.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
    ],
  },
}

module.exports = nextConfig
