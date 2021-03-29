import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { updatePostApi } from '../utilities/API/homeApi';
import swal from 'sweetalert';

const Update = () => {
  let location = useLocation();
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e, title, body) => {
    console.log('nbvc', title, body);
    e.preventDefault();
    if (title !== '' && body !== '') {
      updatePostApi(location.state.posts.id, {
        title,
        body,
      }).then((result) => {
        if (result) {
          swal('Great job!', 'You Edited this Post', 'success');
          console.log(result);
          history.replace('/');
        }
      });
    } else {
      swal('ERROR!', 'You Should Fill All Inputs!', 'error');
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }
  };

  useEffect(() => {
    const { title, body } = location.state.posts;
    setTitle(title);
    setBody(body);
  }, []);

  return (
    <React.Fragment>
      <h1
        style={{
          marginBottom: '8%',
          marginTop: '4%',
          fontSize: '2.7vw',
          backgroundColor: '#0bb17f',
          padding: '5px',
          borderRadius: '25px',
          width: '27%',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <strong>Update Post</strong>
      </h1>
      <div
        style={{
          backgroundColor: '#0bb17f',
          borderRadius: '25px',
          padding: '4%',
        }}
        className='w-75 m-auto'
      >
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            <strong style={{ color: '#fff', fontSize: '1.5vw' }}>
              Post Title
            </strong>
          </label>
          <input
            onChange={handleChange}
            value={title}
            name='title'
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlTextarea1' className='form-label'>
            <strong style={{ color: '#fff', fontSize: '1.5vw' }}>
              Post Body
            </strong>
          </label>
          <textarea
            onChange={handleChange}
            value={body}
            name='body'
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
      </div>
      <Link to='home'>
        <button
          style={{
            marginBottom: '4%',
            marginTop: '2%',
            fontSize: '1.5vw',
            marginRight: '15%',
            backgroundColor: '#0bb17f',
            padding: '10px',
            borderRadius: '25px',
            width: '15%',
            textAlign: 'center',
            color: '#fff',
          }}
          className='float-right'
          type='submit'
          onClick={(e) => handleSubmit(e, title, body)}
        >
          <strong>Update</strong>
        </button>
      </Link>
    </React.Fragment>
  );
};

export default Update;
