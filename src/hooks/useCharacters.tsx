import { CHARACTER_URL } from "constants/api";
import { useMutation } from "react-query";
import { fetchData, postData } from "services/fetch-creator";
import { useCustomQuery } from "services/query-creator";
import { Entity } from "types/entity-types";

export const useCharacters = () => {
  const fetchEntities = fetchData(CHARACTER_URL);
  const characters = useCustomQuery<Entity[]>("users", fetchEntities);

  const addCharacter = (data: Entity) => {
    return postData(CHARACTER_URL, "POST", data);
  };

  const createMutation = () => {
    const mutation = useMutation((newTodo: Entity) => {
      return addCharacter(newTodo);
    });

    return mutation;
  };

  const modifyCharacter = () => {};

  const deleteCharacter = () => {};

  return {
    characters,
    modifyCharacter,
    deleteCharacter,
    addCharacter,
    createMutation,
  };
};
