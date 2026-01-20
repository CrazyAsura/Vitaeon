export const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  console.warn('Warning: EXPO_PUBLIC_API_URL is not defined in .env');
}
