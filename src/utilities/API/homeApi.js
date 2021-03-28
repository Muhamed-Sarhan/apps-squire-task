import { instanceApi } from './API';

//get posts
export const getPostsApi = async () => {
  try {
    const response = await instanceApi.get('/api/posts', {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    if (response && response.status === 200 && response.data.status) {
      return response.data;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

//add post
export const addNewPostApi = async (post) => {
  try {
    const response = await instanceApi.post('/api/posts', post, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    if (response && response.status === 200 && response.data.status) {
      return response.data;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

//delete post
export const deletePostApi = async (id) => {
  try {
    const response = await instanceApi.delete(`/api/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    if (response && response.status === 200 && response.data.status) {
      return response.data;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

//update post
export const updatePostApi = async (id, post) => {
  try {
    const response = await instanceApi.put(`/api/posts/${id}`, post, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    if (response && response.status === 200 && response.data.status) {
      return response.data;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
