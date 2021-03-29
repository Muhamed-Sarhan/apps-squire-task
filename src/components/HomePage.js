import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { deletePostApi, getPostsApi } from '../utilities/API/homeApi';
import swal from 'sweetalert';
import Spinner from './Spinner';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getPostsApi().then((result) => {
      if (result) {
        setPosts(result.data);
        setIsLoading(false);
      }
    });
  }, []);

  const handleDelete = (id) => {
    deletePostApi(id).then((result) => {
      if (result) {
        setIsLoading(false);
        setPosts(result.data);
        swal('Deleted', 'You Deleted this Post', 'success');
      }
    });
  };

  return (
    <div style={{ paddingTop: '4%' }}>
      <h1
        style={{
          marginBottom: '3%',
          fontSize: '3vw',
          marginTop: '2%',
          backgroundColor: '#0bb17f',
          padding: '5px',
          borderRadius: '30px',
          width: '27%',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <strong>Home Page</strong>
      </h1>
      <div className='open-search'>
        <button onClick={() => history.push('/add')}>Add</button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className='card'
            style={{ width: '65%', margin: 'auto', marginBottom: '10px' }}
          >
            <div className='card-body'>
              <h5 className='card-title'>{post.title}</h5>
              <p className='card-text'>{post.body}</p>
              <div>
                <i
                  style={{
                    cursor: 'pointer',
                    color: '#0bb17f',
                    fontSize: '20px',
                  }}
                  className='fas fa-edit float-right mr-4'
                  onClick={() =>
                    history.push({
                      pathname: `/update/${post.id}`,
                      state: { posts: post },
                    })
                  }
                ></i>

                <i
                  style={{
                    cursor: 'pointer',
                    color: '#0bb17f',
                    fontSize: '20px',
                  }}
                  className='fas fa-trash float-right mr-5'
                  onClick={() => handleDelete(post.id)}
                ></i>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
