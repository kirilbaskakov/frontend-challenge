import ICat from "@/types/ICat";

const getCats = async (limit: number, page: number): Promise<ICat[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/search?limit=${limit}&page=${[page]}`,
    {
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    },
  );
  const data = await response.json();
  return data;
};

export default getCats;
