'use client';

import { login } from '@/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

//TODO: error message did'nt show

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await login(formData);

      if (!!res.error) {
        setError(res.error);
      } else {
        router.push('/bookings');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div>
        {error && (
          <span className="text-red-600 text-center text-xl">
            {error.message}
          </span>
        )}
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
