import Axios, { AxiosResponse } from 'axios';
import { Post, PostResponse } from './types';

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getPosts = (): Promise<AxiosResponse> => {
  return instance.get('/posts');
};

export const postPost = (post: Post): Promise<PostResponse> => {
  return instance.post('/posts', post);
};

export const deletePost = (id: number) => {
  return instance.delete(`/posts/${id}`);
};
export const editPost = (id: number, info: Partial<Post>) => {
  return instance.patch(`/posts/${id}`, info);
};

export const paginatePost = (params: { limit: number; page: number }) => {
  console.log('pg', params.page);
  return instance.get(`/posts?_limit=${params.limit}&_page=${params.page}`);
};
