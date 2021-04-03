import useSWR, { cache } from 'swr';
import { deletePost, getPosts, paginatePost, postPost, Post } from '../api/posts';

export const usePosts = () => {
  const { data, error, mutate } = useSWR('/posts', () => getPosts().then(r => r.data));

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
    await deletePost(id);
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

  const perPagePosts = async (limit: number, page: number) => {
    await paginatePost(limit, page);
    const cached = cache.get('/posts') as Post[];
    mutate(cached.length > limit ? [...cached.slice(page * limit, (page + 1) * limit)] : [...cached], false);
  };

  return {
    data,
    loading: !data && !error,
    addPost,
    delPost,
    edtPost,
    perPagePosts
  };
};
