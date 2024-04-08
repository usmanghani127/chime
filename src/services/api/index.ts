import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  // reducerPath: 'api',
  tagTypes: ['auth'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: builder => ({
    signIn: builder.mutation({
      invalidatesTags: ['auth'],
      query: body => {
        const {email} = body;
        body.username = email.split('@')[0];
        delete body.email;
        return {
          url: 'auth/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useSignInMutation} = api;
