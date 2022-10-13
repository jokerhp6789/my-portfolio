/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "www.icloud.com",
            "drive.google.com",
            "lh6.googleusercontent.com",
        ],
    },
};

module.exports = nextConfig;
