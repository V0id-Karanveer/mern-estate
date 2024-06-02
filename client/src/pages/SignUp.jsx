import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post('/api/auth/signup', formData);
      const data = await res.data;
      if (data.success === false) {
        setError(data.message); // Set the backend error message
        setLoading(false);
        return;
      }
      else {
        setLoading(false);
        setError(null);
        console.log(data.message)
        navigate('/sign-in');
      }
    } catch(error){
      setLoading(false);
      if(error.response){
        console.error("Error:", error.response.data.message);
        setError(error.response.data.message); // Handle axios/network error
      }
      else{
        console.error("Error:", error.message);
        setError(error.message); // Handle JavaScript error
      }
      
    }    
  }



  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
          className='border p-3 rounded-lg' id='username' onChange={handleChange} />

        <input type="email" placeholder='email'
          className='border p-3 rounded-lg' id='email' onChange={handleChange} />

        <input type="password" placeholder='password'
          className='border p-3 rounded-lg' id='password' onChange={handleChange} />

        <button disabled={loading} className='bg-slate-700 text-white py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-3'>{error}</p>}
    </div>
  )
}

export default SignUp