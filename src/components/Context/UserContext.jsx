import React, {createContext, useState} from "react"
import {auth} from "../../service/getFirestore"
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"

export const AppUserContext = createContext()

const UserContext = ({children, setIslogged, isLogged}) => {

const [regUser, setReguser] = useState("")
const [regMail, setRegmail] = useState("")
const [regPass, setRegpass] = useState("")
const [loginUser, setLoginuser] = useState("")
const [loginPass, setLoginpass] = useState("")
const [user, setUser] = useState({})
const [toggle, setToggle] = useState(false)

onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
    setUser(currentUser)
    setIslogged(true)
    }
    else {console.log("Usuario desconectado")}
})


const registerUser = (fn) => {
  createUserWithEmailAndPassword(auth, regMail, regPass)
   .then(() => fn(true))
    
   .catch(() => alert("Error de registro") )

}

const updateName =  () => {
    updateProfile(auth.currentUser, {displayName: regUser})
    .then((res) => console.log(regUser))
    .catch((err) => console.log(err))
}

const login =  (fn) => {
    signInWithEmailAndPassword(auth, loginUser, loginPass)
    .then((res) => fn(true))
    
    .catch((err) => {
        alert("Error")
        console.log(err)} )
}

const logout = (fn) => {
     signOut(auth)
     .then(() => fn(false))
     .catch((err) => console.log("Error"))
}

const userContextValue = {
regUser: regUser,
regMail: regMail,
regPass: regPass,
loginUser: loginUser,
loginPass: loginPass,
user: user,
toggle: toggle,
isLogged: isLogged,
setReguser: setReguser,
setRegmail: setRegmail,
setRegpass: setRegpass,
setLoginuser: setLoginuser,
setLoginpass: setLoginpass,
registerUser: registerUser,
setToggle: setToggle,
updateName: updateName,
login: login,
logout: logout

}

return(
<AppUserContext.Provider value={userContextValue}>
 
 {children}

</AppUserContext.Provider>

)



}



export default UserContext