import { useState, React } from 'react'
import Nav from '../home/Nav'
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h1>Login</h1>
      <Nav />
      <article className='w-full flex flex-col justify-center items-center bg-indigo-100'>
        <p className='text-xl font-semibold'>Welcome back!</p>
        <p className='text-lg'>New to Dev Estate?</p>
        <form className='flex flex-col w-2/3 md:w-1/3'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            className='email border-2 border-indigo-300 rounded-md'
            placeholder='Email'
            type='email'
            value={userInfo.email}
            onChange={handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            className='password border-2 border-indigo-300 rounded-md'
            placeholder='Password'
            type='password'
            value={userInfo.password}
            onChange={handleChange}
          />
        </form>
      </article>
    </>
  )
}

export default Login
