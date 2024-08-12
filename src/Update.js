import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUSer } from './userReducer';


function Update() {
    const {id} = useParams();
    const users = useSelector((state) => (state.users));
    const existingUser = users.filter(f => f.id == id );
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
     event.preventDefault();
     dispatch(updateUSer({
        id: id,
        name: uname,
        email: uemail
     } ))
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
            <h4>Update user</h4>
        </div>
     <form onSubmit={handleUpdate}>
        <div>
            <label>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter your name' required
             value={uname}
             onChange={e => setName(e.target.value)}
            />
        </div>
        <div>
            <label>Email:</label>
            <input type='email' name='email' className='form-control'  placeholder='Enter your email' required
            value={uemail}
            onChange={e => setEmail(e.target.value)}
            />
        </div>
       <button className='btn btn-info mt-4'>Update</button>
     </form>
    </div>
    </div>
   </>
  )
}

export default Update;
