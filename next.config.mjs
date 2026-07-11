/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep runtime behaviour identical to the original static page: the inline
  // scripts mutate the DOM once (marquee duplication, pagination dots, etc.),
  // so we avoid StrictMode's dev-only double invocation.
  reactStrictMode: false,
};

export default nextConfig;
