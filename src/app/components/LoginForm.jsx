import React from 'react'
import { Link } from 'react-router';

export const LoginForm = () => {
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/017/566/984/non_2x/operating-expenses-glyph-two-color-icon-vector.jpg";
  return (
    <div className=' flex flex-col items-center justify-center h-screen bg-gradient-to-br to-blue-50 from-indigo-50'>
      <form>
        <div className=" bg-white flex flex-col items-center justify-center shadow-lg shadow-gray-800 p-5 rounded-lg w-80 ">
          <img className=' w-40 p-3 rounded-full' src={imageUrl} alt="Logo" />
          <h1 className='text-2xl font-medium text-indigo-950'>Bienvenido</h1>
          <div className='p-2 flex flex-col items-start w-full'>
            <label className='mb-1'> Email</label>
            <input type='email' name='email' id='email' className='rounded-xl px-3 py-1 border border-gray-800 w-full'/>
          </div>
          <div className='p-2 flex flex-col items-start w-full'>
            <label className='mb-1'> Contraseña</label>
            <input type='password' name='contraseña' id='contraseña' className=' rounded-xl px-3 py-1 border border-gray-800 w-full'/>
          </div>

          <div>
            <button className='bg-blue-950 rounded-lg text-white p-2 hover:bg-blue-900 hover:cursor-pointer transition duration-300'>
              Iniciar sesion
            </button>
          </div>
          <div className='p-4 flex flex-col items-center text-sm'>
            <p>Aun no tienes una cuenta?</p>
            <Link to="/auth/register" className=' text-blue-500 font-medium hover:text-blue-900'>Registrate</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
















