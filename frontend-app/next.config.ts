import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['images.unsplash.com']
    },
    // Enable standalone output for Docker
    output: 'standalone',
    // Disable eslint during build
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Disable TypeScript errors during build (optional)
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
