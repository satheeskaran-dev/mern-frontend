import {
  BaseQueryFn,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query";
import { ApiSlug } from "../utils/enums/ApiSlug.enum";
import { setToken } from "../store/slices/auth.slice";

const query = fetchBaseQuery({
  baseUrl: "/api/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    token && headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQuery: BaseQueryFn<
  string, // Args
  unknown, // Result
  FetchBaseQueryError
> = async (arg, api, extraOptions) => {
  let result = await query(arg, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // Try to get new token

    const refreshResult = await query(ApiSlug.REFRESH_TOKEN, api, extraOptions);
    if (refreshResult?.data) {
      api.dispatch(setToken((refreshResult.data as any).data?.token));
      result = await query(arg, api, extraOptions);
    } else {
      console.log("Refresh token failed");
    }
  }

  return result;
};

export default baseQuery;
