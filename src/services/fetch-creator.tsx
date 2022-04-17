import { User } from "types/entity-types";

export const fetchData = (url: string) => async () => {
  const res = await fetch(url);
  return res.json();
};

export const postData = async (url: string, method: string, data: User) => {
  return await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
