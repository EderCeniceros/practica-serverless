/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    trailingSlash: true,
    images: {
        domains: ['localhost', 'example.com', 'img.freepik.com','s3.amazonaws.com'],
        formats: ['image/avif', 'image/webp'],
    },
}

export default nextConfig