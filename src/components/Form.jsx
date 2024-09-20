import {React, useState} from 'react'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Form = () => {

  const [registering, setRegistering] = useState(false)
  const [message, setMessage] = useState('')

  const authFunction = async(e) => {
    e.preventDefault()

    const email = e.target.email.value 
    const password = e.target.password.value 
    
    if(registering) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        setMessage('Contraseña demnasiado corta')
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch(error) {
        setMessage('Correo o Contraseña incorrectos')
      }
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232323]">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Registro</h2>

        <form className="space-y-6" onSubmit={authFunction}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Correo
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Introduce tu correo"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Introduce tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {registering ? 'Regístrate' : 'Inicia Sesión'}
          </button>
        </form>
        <h4 className='mt-4 text-center'>{registering ? 'Si ya tienes cuenta ' : 'No tienes cuenta '}
          <button 
            className='text-blue-600 font-semibold'
            onClick={() => setRegistering(!registering)}
          >{registering ? 'Inicia Sesión' : 'Regístrate'}</button>
        </h4>
        
        {message && (
          <h4 className='bg-red-600 p-2 mt-4 rounded-lg text-white font-bold'>
            {message}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Form;
