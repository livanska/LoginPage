import React, { useState } from 'react';
import './App.css';
import { usePosts } from './hooks/usePosts';
import { Post } from './api/posts';

function App() {
  const { posts, loading, addPost, delPost, edtPost, perPagePosts, page, error, isValidating } = usePosts(0);

  const addToPostList = () => {
    addPost({
      userId: 4,
      id: 0,
      title: 'New post here',
      body: 'Super useful text'
    });
  };

  const deleteFromPostList = (id: number) => {
    delPost(id);
  };

  const editInPostList = (id: number) => {
    edtPost(id, {
      title: 'I am edited',
      body: 'This post body is edited!'
    } as Partial<Post>);
  };

  console.log(posts);
  return (
    <div className='App'>
      <button onClick={addToPostList}>add post</button>
      <button onClick={() => perPagePosts(page - 1)}>Prev</button>
      <button onClick={() => perPagePosts(page + 1)}>Next</button>
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <p>Error :(</p>}
        {isValidating && <p>Validating</p>}
        {posts &&
          posts.map((post: Post) => {
            return (
              <div
                style={{
                  display: 'inline-table',
                  margin: '10px',
                  width: '200px',
                  minHeight: '200px',
                  border: 'solid grey'
                }}
              >
                <p style={{ margin: '0px' }}>ID: {post.id} </p>
                <p style={{ margin: '0px' }}> USER ID: {post.userId}</p>
                <p style={{ margin: '0px' }}>TITLE: {post.title}</p>
                <p style={{ margin: '0px', fontSize: '10px' }}>BODY: {post.body}</p>
                <div style={{ marginTop: '0px' }}>
                  <button onClick={() => deleteFromPostList(post.id)}>DELETE</button>
                  <button onClick={() => editInPostList(post.id)}>EDIT</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
