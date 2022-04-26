import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exerciseApiHeaders = {
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_EXERCISE_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: exerciseApiHeaders });

export const exerciseApi = createApi({
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_EXERCISE_API_URL }),
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: () => createRequest(``),
    }),
    getTargetExercises: builder.query({
      query: (targetMuscle) => createRequest(`/target/${targetMuscle}`),
    }),
    getTargetMuscles: builder.query({
      query: () => createRequest('/targetList'),
    }),
    getEquipmentList: builder.query({
      query: () => createRequest(`/equipmentList`),
    }),
    getEquipmentExercises: builder.query({
      query: ( equipment ) => createRequest(`equipment/${equipment}`),
    }),
  }),
});

export const { useGetExercisesQuery, useGetTargetExercisesQuery, useGetTargetMusclesQuery, useGetEquipmentListQuery, useGetEquipmentExercisesQuery } = exerciseApi;