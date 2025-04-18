const API_KEYS = [
  import.meta.env.VITE_SPOONACULAR_API_KEY_1,
  import.meta.env.VITE_SPOONACULAR_API_KEY_2,
  import.meta.env.VITE_SPOONACULAR_API_KEY_3,
  import.meta.env.VITE_SPOONACULAR_API_KEY_4,
].filter(Boolean);

if (API_KEYS.length === 0) {
  throw new Error("No Spoonacular API keys found in environment variables.");
}

let keyIndex = 0;

export function getNextApiKey(): string {
  const key = API_KEYS[keyIndex];
  keyIndex = (keyIndex + 1) % API_KEYS.length;
  return key;
}
