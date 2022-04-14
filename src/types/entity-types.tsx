import { Key } from "react";

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
}
