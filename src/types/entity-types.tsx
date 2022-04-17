import { Key } from "react";
import { UseMutationResult } from "react-query";

export interface User {
  id: Key;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export interface ResponseResult {
  responce: {
    data: Array<User> | undefined;
    isLoading: boolean;
    isError: boolean;
  };
  mutationResponce: UseMutationResult<Response, unknown, User, unknown>;
}
