import React from 'react'
import {useSelector} from 'react-redux';

function Profile() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} className='rounded-full h-30 w-30 object-cover cursor-pointer self-center mt-2' />
        <input
          type='text'
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-500 cursor-pointer'>Delete Account</span>
        <span className='text-red-500 cursor-pointer'>Sign Out</span>
      </div>
    </div>
    
  )
}

export default Profile