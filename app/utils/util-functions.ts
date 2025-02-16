export function getBaseUrl() {
    return process.env.VERCEL_ENV === "production"
      ? `https://www.my-custom-domain.com`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:3000`;
  }