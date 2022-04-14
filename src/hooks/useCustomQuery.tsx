import { CHARACTER_URL } from "constants/api";
import {
  QueryFunction,
  QueryKey,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { postData } from "services/fetch-creator";
import { Entity } from "types/entity-types";

type CustomQueryOptions<TResult, TError> = Omit<
  UseQueryOptions<unknown, TError, TResult, QueryKey>,
  "queryKey"
>;

export function useCustomQuery<TResult = unknown, TError = unknown>(
  key: QueryKey,
  fn: QueryFunction<TResult>,
  options?: CustomQueryOptions<TResult, TError>
) {
  const fetchResult = useQuery(key, fn, options);
  const mutationResult = useMutation((item: Entity) => {
    return postData(CHARACTER_URL, "POST", item);
  });

  return { fetchResult, mutationResult };
}
