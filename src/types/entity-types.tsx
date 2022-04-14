import { Key } from "react";
import { UseMutationResult } from "react-query";

export interface Entity {
  id: Key;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export interface Data {
  responce: {
    data: Array<Entity> | undefined;
    isLoading: boolean;
    isError: boolean;
  };
  mutationResponce: UseMutationResult<Response, unknown, Entity, unknown>;
}
