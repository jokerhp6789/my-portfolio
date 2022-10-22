/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "www.icloud.com",
            "drive.google.com",
            "lh6.googleusercontent.com",
            "lh3.googleusercontent.com",
            "lh5.googleusercontent.com",
            "lh4.googleusercontent.com",
        ],
    },
};

module.exports = nextConfig;
