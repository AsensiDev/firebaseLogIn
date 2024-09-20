import React from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Home({UserEmail}) {
  return (
    <div>
        <h2 className='text-white text-4xl'>Bienvenido usuario {UserEmail} </h2>
        
        <button 
            className='bg-red-600 p-2 rounded-lg mt-4 text-white hover:bg-red-800'
            onClick={() => signOut(auth)}
            >
            Cerrar Sesión
        </button> 
    </div>
  )
}
