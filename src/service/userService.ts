import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./api";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { ApiSlug } from "../utils/enums/ApiSlug.enum";

export const userServiceApi = createApi({
  reducerPath: "userService",
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: ApiSlug.USERS,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, util: userServiceApiUtil } = userServiceApi;
