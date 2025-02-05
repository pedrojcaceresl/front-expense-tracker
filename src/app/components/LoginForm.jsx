import React from 'react'

export const LoginForm = () => {
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/017/566/984/non_2x/operating-expenses-glyph-two-color-icon-vector.jpg";
  return (
    <div className=' flex flex-col items-center justify-center h-screen bg-radial from-blue-400 from-40% to-blue-100'>
      <form>
        <div className=" bg-blue-200 flex flex-col items-center justify-center shadow-2xl shadow-gray-950 p-5 rounded-lg w-80 ">
          <img className=' w-40 p-3 rounded-full' src={imageUrl} alt="Logo" />
          <h1 className='text-2xl'>Bienvenido</h1>
          <div className='p-2 flex flex-col items-start w-full'>
            <label className='mb-1'> Email</label>
            <input type='email' name='email' id='email' className='rounded-xl px-3 py-1 border border-gray-800 w-full'/>
          </div>
          <div className='p-2 flex flex-col items-start w-full'>
            <label className='mb-1'> Contraseña</label>
            <input type='password' name='contraseña' id='contraseña' className=' rounded-xl px-3 py-1 border border-gray-800 w-full'/>
          </div>

          <div>
            <button className='bg-blue-300 rounded-2xl p-2 hover:bg-blue-400 hover:cursor-pointer transition duration-300'>
              Iniciar sesion
            </button>
          </div>
          <div className='p-4 flex flex-col items-center text-sm'>
            <p>Aun no tienes una cuenta?</p>
            <a href='#' className='font-bold hover:text-blue-900'>Registrate</a>
          </div>
        </div>
      </form>
    </div>
  )
}
















