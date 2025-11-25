import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../hooks/login.jsx';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    if (event.target[0].value == "" || event.target[1].value == "") { return }
    let userLogin = {
      username: event.target[0].value,
      password: event.target[1].value
    }
    const logged = await login(userLogin)
    if (logged.status == 400) {
      alert(logged.message)
      return
    }
    localStorage.setItem('userAuth', JSON.stringify(logged))
    navigate('/')
  }

  return (
    <div className='min-w-dvw min-h-dvh flex justify-center items-center bg-[url(../assets/pexels-fotios-photos-1855214.jpg)] bg-center bg-cover'>
      <div className='bg-white border border-gray-300 p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full sm:w-96'>
        <h1 className='text-2xl font-bold'>Iniciar sesión</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-1">
            <label htmlFor="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario" placeholder='Ingrese su usuario' className="border border-gray-300 rounded p-2" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder='Ingrese su contraseña' className="border border-gray-300 rounded p-2" required />
          </div>
          <p className="text-end text-cyan-500">Olvidé mi contraseña</p>
          <button type="submit" className="bg-cyan-500 text-white font-semibold rounded p-2 cursor-pointer hover:bg-cyan-600 duration-300">Iniciar sesión</button>
        </form>
        <p className="text-center">¿No tienes una cuenta? <NavLink to="/registro" className="text-cyan-500 hover:text-cyan-600 duration-300">Regístrate aquí</NavLink></p>
      </div>
    </div>
  )
}
