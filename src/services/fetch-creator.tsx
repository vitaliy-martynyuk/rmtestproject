import { Entity } from "types/entity-types";

export const fetchData = (url: string) => async () => {
  const res = await fetch(url);
  console.log("fetchData");
  return res.json();
};

export const postData = async (url: string, method: string, data: Entity) => {
  const res = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res;
};
