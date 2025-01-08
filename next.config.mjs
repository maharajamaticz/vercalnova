/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  distDir: 'build',
  // reactStrictMode: true,
  // distDir: 'dist',
  // output: 'export'
};

export default nextConfig;