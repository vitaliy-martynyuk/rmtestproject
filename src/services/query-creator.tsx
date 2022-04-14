import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from 'react-query';

type CustomQueryOptions<TResult, TError> = Omit<UseQueryOptions<unknown, TError, TResult, QueryKey>, 'queryKey'>

export function useCustomQuery<TResult = unknown, TError = unknown>(key: QueryKey, fn: QueryFunction<TResult>, options?: CustomQueryOptions<TResult, TError>) {
    const result = useQuery(key, fn, { refetchOnWindowFocus: false });

    return result;
}

// Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>