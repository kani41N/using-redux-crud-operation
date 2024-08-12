import React from 'react';
import { Link } from 'react-router-dom';
import Create from './Create';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './userReducer';


function Home() {
    const users = useSelector((state) => (state.users));
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      dispatch((deleteUser({id: id})))
    }

  return (
    <div className="">
      <div className='mt-2 text-center'>
      <h4>CRUD App</h4>
      <div className='text-start' style={{ marginLeft: '48px' }}>
      <Link to='/create' type="button" className="btn btn-success my-3">Create +</Link>
      </div>
      </div>
      <div className='mx-5'>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.id}</td> 
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`} className='btn btn-sm btn-warning'>Edit</Link>
                        <button type='button' className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
               </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Home;
