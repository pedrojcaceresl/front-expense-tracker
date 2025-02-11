import { Link } from "react-router"

export const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br to-blue-50 from-indigo-50">
      <div className="p-5">

        <form className="w-xl ">
          <div className=" bg-white flex flex-col items-start rounded-lg shadow-lg shadow-gray-500 p-4 w-full">
            <div className="text-center flex flex-col items-center justify-center w-full">
              <h1 className=" text-2xl text-gray-900 text-center mb-1"> Crear cuenta </h1>
              <p className=" text-gray-900"> ¿Ya tienes una cuenta?</p>
              <Link to="/auth/login" className=" text-blue-400 font-medium hover:text-blue-900">Inicia sesión </Link>
            </div>
            <div className="w-full flex flex-col items-center justify-start">
              <div className="flex flex-col p-1 w-full">
                <label className="px-2 py-1 mr-2">Nombre</label>
                <input type="text" name="nombre" id="nombre" className=" w-full border border-gray-400 rounded-lg px-4 py-1" />
              </div>

              <div className="flex flex-col p-1 w-full">
                <label className="px-2 py-1 mr-2">Apellido</label>
                <input type="text" name="apellido" id="apellido" className=" w-full border border-gray-400 rounded-lg px-4 py-1" />
              </div>
              <div className="flex flex-col p-1 w-full">
                <label className="px-2 py-1 mr-2">Numero</label>
                <input type="text" name="numero" id="numero" className=" w-full border border-gray-400 rounded-lg px-4 py-1" />
              </div>
              <div className="flex flex-col p-1 w-full">
                <label className="px-2 py-1 mr-2">Correo</label>
                <input type="email" name="email" id="email" className=" w-full border border-gray-400 rounded-lg px-4 py-1" />
              </div>
              <div className="flex flex-col p-1 w-full">
                <label className="px-2 py-1 mr-2">Nombre de usuario</label>
                <input type="text" name="nameUser" id="nameUser" className=" w-full border border-gray-400 rounded-lg px-4 py-1" />
              </div>
              <div className="flex flex-col p-1 w-full">
                <label className="px-2 py-1 mr-2">Contraseña</label>
                <input type="password" name="pass" id="pass" className=" w-full border border-gray-400 rounded-lg px-4 py-1" />
              </div>
            </div>
            <div className="p-5 w-full flex flex-row justify-between">
              <Link to="/" className="bg-blue-900 rounded-lg text-white font-medium px-5 py-2 hover:cursor-pointer hover:bg-blue-950 transition duration-500"> Volver </Link>
              <button className="bg-blue-900 font-medium rounded-lg px-5 text-white py-2 hover:cursor-pointer hover:bg-blue-950 transition duration-500"> Registrarse </button>

            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
