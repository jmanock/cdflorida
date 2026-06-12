/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bahamas-cruises-from-florida",
        destination: "/best-bahamas-cruises-from-florida",
        statusCode: 301
      },
      {
        source: "/cruise-packing-essentials",
        destination: "/florida-cruise-packing-essentials",
        statusCode: 301
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
