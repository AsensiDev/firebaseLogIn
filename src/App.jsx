import { useState } from "react"
import Form from "./components/Form"
import Home from "./components/Home"
import appFirebase from "./credenciales"
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(appFirebase)

export default function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser) {
      setUser(firebaseUser)
    } else {
      setUser(null)
    }
  })

  return (
    <div className="bg-[#232323] min-h-screen flex justify-center items-center">
      {user ? <Home userEmail = {user.email} /> : <Form />}
    </div>
  )
}


