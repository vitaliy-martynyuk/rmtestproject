import { USER_URL } from "constants/api";
import { fetchData } from "services/fetch-creator";
import { useCustomQuery } from "hooks/useCustomQuery";
import { User } from "types/entity-types";

export const useCharacters = () => {
  const fetchEntities = fetchData(USER_URL);
  const { fetchResult, mutationResult } = useCustomQuery<User[]>(
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
