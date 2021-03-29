import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addNewPostApi } from '../utilities/API/homeApi';
import swal from 'sweetalert';

const Add = () => {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e, title, body) => {
    console.log('nbvc');
    e.preventDefault();
    if (title !== '' && body !== '') {
      addNewPostApi({
        title,
        body,
      }).then((result) => {
        if (result) {
          console.log(result);
          swal('Great job!', 'You Added a New Post', 'success');
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
        <strong>Add Post</strong>
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
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            name='title'
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
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
            name='body'
          ></textarea>
        </div>
      </div>

      <button
        style={{
          marginBottom: '4%',
          marginTop: '2%',
          marginRight: '15%',
          fontSize: '1.5vw',
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
        <strong>Add</strong>
      </button>
    </React.Fragment>
  );
};

export default Add;
