import { useEffect, useMemo, useState } from 'react';
import useSWR, { cache } from 'swr';
import { deletePost, postPost, Post, editPost, paginatePost, getPosts } from '../api/posts';
const limit = 10;
export const usePosts = (numb: number) => {
  const [page, setPage] = useState(numb);
  const { data: allposts } = useSWR('/allposts', () => getPosts().then(r => r.data));
  const { data: posts, error, mutate, isValidating } = useSWR('/posts', () =>
    paginatePost(limit, page).then(r => r.data)
  );

  const addPost = async (post: Post) => {
    const res = await postPost(post);
    const cached = cache.get('/posts') as Post[];
    mutate([...cached, { ...post, id: res.data.id }], false);
  };

  const delPost = async (id: number) => {
    await deletePost(id);
    const cached = cache.get('/posts') as Post[];
    mutate(
      cached.filter(el => el.id !== id),
      false
    );
  };

  const edtPost = async (id: number, newInfo: Partial<Post>) => {
    await editPost(id, newInfo);
    const cached = cache.get('/posts') as Post[];
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
  };

  const perPagePosts = async (pageN: number) => {
    setPage(pageN);
    await paginatePost(limit, pageN);
    const cached = cache.get('/allposts') as Post[];

    console.log('BEFORE', cached);
    mutate([...cached.slice(pageN * limit, (pageN + 1) * limit)], false);
    console.log('AFTER', cached);
  };

  return {
    posts,
    loading: !posts && !error,
    addPost,
    delPost,
    edtPost,
    page,
    isValidating,
    error,
    perPagePosts
  };
};
