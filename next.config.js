/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  env: {
    Naver_Book_Search_API_URL: process.env.Naver_Book_Search_API_URL,
    Naver_Client_Id: process.env.Naver_Client_Id,
    Naver_Client_Secret: process.env.Naver_Client_Secret,
  },
}

module.exports = nextConfig
