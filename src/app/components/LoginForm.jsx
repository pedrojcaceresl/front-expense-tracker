import React from 'react'

export const LoginForm = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-screen'>
      <form>
        <div className=" bg-blue-100 flex flex-col items-center justify-center shadow-lg shadow-gray-500/50 p-5 rounded-lg w-80 ">
          <img className=' w-40 p-3 rounded-full' src="https://static.vecteezy.com/system/resources/previews/017/566/984/non_2x/operating-expenses-glyph-two-color-icon-vector.jpg" alt="Logo" />
          <h1 className='text-2xl'>Bienvenido</h1>
          <div className='p-2 flex flex-col items-start'>
            <label> Email</label>
            <input type='email' name='email' id='email' className='rounded-xl p-1 border border-gray-800 '/>
          </div>
          <div className='p-2 flex flex-col items-start'>
            <label> Contraseña</label>
            <input type='password' name='contraseña' id='contraseña' className='rounded-xl p-1 border border-gray-800 '/>
          </div>

          <div>
            <button className='bg-blue-300 rounded-2xl p-2 hover:bg-blue-500'>
              Iniciar sesion
            </button>
          </div>
          <div className='p-4 flex flex-col items-center '>
            <p>Aun no tienes una cuenta?</p>
            <a href='#' className='underline underline-offset-2 hover:text-blue-900'>Registrate</a>
          </div>
        </div>
      </form>
    </div>
  )
}
























// export const LoginForm = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <form>
//         <div className="bg-blue-200 rounded-xl p-10 shadow-lg shadow-blue-500/50">
//           <div className=" flex flex-col items-center justify-center p-2">
//             <img src="https://static.vecteezy.com/system/resources/previews/017/566/984/non_2x/operating-expenses-glyph-two-color-icon-vector.jpg" alt="logo" className=" w-30 rounded-full" />
//           </div>
//           <h1 className="text-2xl flex flex-col items-center justify-center p-4">Bienvenido</h1>

//           <div className="p-2">
//             <label>Correo</label>
//             <input type="email" name="correo" id="correo" className=" rounded-sm border-2 border-gray-500 align-items w-full" />
//           </div>
//           <div className=" p-2">
//             <label>Contraseña </label>
//             <input type="password" name="contraseña" id="contraseña" className=" rounded-sm border-2 border-gray-500 align-items w-full" />
//           </div>

//           <div className="flex align-items justify-center p-2">
//             <button type="Login" className="bg-blue-500 rounded-xl text-white p-2 hover:bg-blue-700"
//             >Iniciar sesion</button>
//           </div>

//           <div className="flex flex-col items-center justify-center">
//             <p className="text-blue-500 ">Aun no tienes una cuenta?</p>
//             <a href="#" className="text-blue-500 underline underline-offset-2 flex flex-col items-center">Registrate</a>
//           </div>


//         </div>
//       </form>
//     </div>
//   )
// }
