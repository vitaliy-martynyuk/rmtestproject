import { CHARACTER_URL } from "constants/api";
import { fetchData } from "services/fetch-creator";
import { useCustomQuery } from "hooks/useCustomQuery";
import { Entity } from "types/entity-types";

export const useCharacters = () => {
  const fetchEntities = fetchData(CHARACTER_URL);
  const { fetchResult, mutationResult } = useCustomQuery<Entity[]>(
    "users",
    fetchEntities,
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    fetchResult,
    mutationResult,
  };
};
