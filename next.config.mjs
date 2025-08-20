/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/inforne',   // ユーザーサイト直下に出すならこの行は削除
  trailingSlash: true,
};
export default nextConfig;
