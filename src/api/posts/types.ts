import { AxiosResponse } from 'axios';
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostResponse = AxiosResponse<{
  message: string;
  id: number;
  statusCode: number;
}>;
