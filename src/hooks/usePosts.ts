import { useCallback, useState } from 'react';
import useSWR, { cache } from 'swr';
import { deletePost, postPost, Post, editPost, paginatePost } from '../api/posts';
const limit = 10;
export const usePosts = () => {
  const [page, setPage] = useState(1);

  const params = { limit: limit, page: page };
  const url = `/posts?_limit=${params.limit}&_page=${params.page}`;
  //const params ={limit:limit,page:page }
  const { data, error, mutate, isValidating } = useSWR(url, () => paginatePost(params).then(r => r.data));

  const addPost = useCallback(
    async (post: Post) => {
      const res = await postPost(post);
      const cached = cache.get(url) as Post[];
      mutate([...cached, res.data], false);
    },
    [mutate, url]
  );

  const delPost = useCallback(
    async (id: number) => {
      await deletePost(id);
      const cached = cache.get(url) as Post[];
      mutate(
        cached.filter(el => el.id !== id),
        false
      );
    },
    [mutate, url]
  );

  const edtPost = useCallback(
    async (id: number, newInfo: Partial<Post>) => {
      await editPost(id, newInfo);
      const cached = cache.get(url) as Post[];
      mutate(
        cached.map(el => {
          if (el.id === id) {
            return {
              ...el,
              ...newInfo
            };
          }
          return el;
        }),
        false
      );
    },
    [mutate, url]
  );

  return {
    posts: data,
    loading: !data && !error,
    addPost,
    delPost,
    edtPost,
    page,
    isValidating,
    error,
    total: Math.ceil(data / limit),
    changePage: setPage
  };
};
