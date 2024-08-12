import React, { useState } from 'react';
import { addUser } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch(); 
    const navigate = useNavigate()

    const handeSubmit =  (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length -1].id + 1, name, email}));
        navigate('/');
    }
  return (
    <>
    <div>
      <Link to='/' >Go back</Link>
    </div>

     <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
         <div className='w-50 border bg-secondary text-white p-4 rounded'>
        <div>
            <h4>Add new user</h4>
        </div>
     <form onSubmit={handeSubmit}>
        <div>
            <label>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter your name' required
            onChange={ e => setName(e.target.value) } />
        </div>
        <div>
            <label>Email:</label>
            <input type='email' name='email' className='form-control'  placeholder='Enter your email' required
            onChange={ e => setEmail(e.target.value) } />
        </div>
       <button className='btn btn-info mt-4'>Submit</button>
     </form>
    </div>
    </div>
    </>
   
  )
}

export default Create;
