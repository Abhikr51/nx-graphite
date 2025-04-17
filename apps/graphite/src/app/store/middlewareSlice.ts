import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AxiosResponse } from 'axios'
import { ApiError } from '../api/api-middleware/types';


export type ApiDatatype<T = unknown> = {
  responseData: AxiosResponse<T> | null;
  loading: boolean;
  error: ApiError | null
};

export type InitStateType = Record<string, ApiDatatype>;

export interface ApiPayloadType<T> extends ApiDatatype<T> {
  apiName: string;
}

const initialState: InitStateType = {};

const middlewareSlice = createSlice({
  name: 'middlewareSlice',
  initialState,
  reducers: {
    initApiStore: <T>(
      state: InitStateType,
      action: PayloadAction<ApiPayloadType<T>>
    ) => {
      const { apiName, responseData, loading, error } = action.payload;
      state[apiName] = {
        responseData,
        loading,
        error,
      };
    },
    setApiLoading: (
      state: InitStateType,
      action: PayloadAction<{ loading: boolean; apiName: string }>
    ) => {
      const existing = state[action.payload.apiName];
      if (!existing) return;
      state[action.payload.apiName] = {
        ...existing,
        loading: action.payload.loading,
      };
    },
    setApiError: (
      state: InitStateType,
      action: PayloadAction<{ error: ApiError; apiName: string }>
    ) => {
      const existing = state[action.payload.apiName];
      if (!existing) return;
      state[action.payload.apiName] = {
        ...existing,
        error: action.payload.error,
      };
    },
  },
});

export const ApiActions = middlewareSlice.actions;
export default middlewareSlice.reducer;
