import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./api";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { ApiSlug } from "../utils/enums/ApiSlug.enum";
import { setAuth } from "../store/slices/auth.slice";

export const authServiceApi = createApi({
  reducerPath: "authService",
  baseQuery,
  tagTypes: [],
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: ApiSlug.SIGN_UP,
        method: "POST",
        body: data,
      }),
    }),
    accountActivate: builder.mutation({
      query: (data) => {
        console.log("data =>", data);
        return {
          url: ApiSlug.ACTIVATE,
          method: "POST",
          body: data,
        };
      },
    }),
    googleLogin: builder.query({
      query: () => ({
        url: ApiSlug.GOOGLE_LOGIN,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: ApiSlug.LOGIN,
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          res?.data?.data && dispatch(setAuth(res.data.data));
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useAccountActivateMutation,
  useGoogleLoginQuery,
  useLazyGoogleLoginQuery,
  util: authServiceApiUtil,
} = authServiceApi;
