/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "znfrttwizfvejhvjsvkr.supabase.co"  // Add Supabase domain here
    ],
  },
};

module.exports = nextConfig;
