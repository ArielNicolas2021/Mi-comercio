import { NavLink, useNavigate } from 'react-router-dom'
import { register } from '../../hooks/register'

export const Register = () => {
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()
    if (event.target[0].value == "" || event.target[1].value == "" || event.target[2].value == "") { return }
    let newUser = {
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    }
    const registro = await register(newUser)
    if (registro.status == 400) {
      alert(registro.message)
      return
    }
    alert("Usuario creado con éxito!")
    navigate('/login')
  }

  return (
    <div className='min-w-dvw min-h-dvh flex justify-center items-center bg-[url(../assets/pexels-fotios-photos-1855214.jpg)] bg-center bg-cover'>
      <div className='bg-white border border-gray-300 p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full sm:w-96'>
        <h1 className='text-2xl font-bold'>Registrarse</h1>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div className='flex flex-col gap-1'>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario" placeholder='Ingrese su usuario' className="border border-gray-300 rounded p-2" required />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Ingrese su email' className="border border-gray-300 rounded p-2" required />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder='Ingrese su contraseña' className="border border-gray-300 rounded p-2" required />
          </div>
          <button type="submit" className="bg-cyan-500 text-white font-semibold rounded p-2 cursor-pointer hover:bg-cyan-600 duration-300">Crear cuenta</button>
        </form>
        <p className='text-center'>¿Ya tenés una cuenta? <NavLink to="/login" className="text-cyan-500 hover:text-cyan-600 duration-300">Iniciar sesión</NavLink></p>
      </div>
    </div>
  )
}
