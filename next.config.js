/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    domains: ["i.ibb.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
  },
};

// Import MDX plugin
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {},
});

module.exports = withMDX(nextConfig);
