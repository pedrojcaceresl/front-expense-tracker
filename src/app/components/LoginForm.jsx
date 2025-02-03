
export const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form>
        <div className="bg-blue-200 rounded-xl p-10 shadow-lg shadow-blue-500/50">
          <h1 className="text-2xl flex flex-col items-center justify-center p-4">Bienvenido</h1>
          <div className="p-2">
            <label>Email</label>
            <input type="email" name="email" id="email" className=" rounded-xl border-2 flex align-items w-full" />
          </div>
          <div className=" p-2">
            <label>Password </label>
            <input type="password" name="password" id="password" className=" rounded-xl border-2 flex align-items w-full" />
          </div>

          <div className="flex align-items justify-center p-2">
            <button type="Login" className="bg-blue-500 rounded-xl text-white p-2 hover:bg-blue-700"
            >Iniciar sesion</button>
          </div>

          <div>
            <p className="text-blue-500 ">Aun no tienes una cuenta?</p> 
            <a href="#" className="text-blue-500 underline underline-offset-2 flex flex-col items-center">Registrate</a>
          </div>
           

        </div>
      </form>
    </div>
  )
}
