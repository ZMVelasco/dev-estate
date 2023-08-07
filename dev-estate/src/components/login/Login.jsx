import { useState, React } from 'react'

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
            <section>
                <form className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email'
                        className='email border-2 border-indigo-300 rounded-md w-2/3 md:w-1/2'
                        placeholder='Email'
                        type='email'
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        className='password border-2 border-indigo-300 rounded-md w-2/3 md:w-1/2'
                        placeholder='Password'
                        type='password'
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                </form>
            </section>
        </>
  )
}

export default Login
