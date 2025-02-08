import { Link } from "react-router"

export const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="p-5">
        <h1 className="mb-4 font-extrabold text-blue-950 text-center"> Complete los campos <br />para el registro </h1>
        <form className="w-xl ">
          <div className=" bg-radial from-blue-200 from-40% to-blue-100 flex flex-col items-start rounded-lg shadow-lg shadow-gray-500 p-4 w-full">


            <div className="flex flex-col p-2 w-full">
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
            <div className="p-5 w-full flex flex-row justify-between">
              <Link to="/" className="bg-blue-900 rounded-2xl text-white px-5 py-2 hover:cursor-pointer hover:bg-blue-950 transition duration-500"> Volver </Link>
              <button className="bg-green-700 rounded-2xl px-5 text-white py-2 hover:cursor-pointer hover:bg-green-800 transition duration-500"> Registrarse </button>

            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
