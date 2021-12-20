import React, {createContext, useState} from "react"
import {auth} from "../../service/getFirestore"
import { onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"

export const AppUserContext = createContext()

const UserContext = ({children, setIslogged, isLogged}) => {

const [userProv,setUserProv] = useState(""),
      [loginUser, setLoginuser] = useState(""),
      [loginPass, setLoginpass] = useState(""),
      [user, setUser] = useState({}),
      [toggle, setToggle] = useState(false);

onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
    setUser(currentUser)
    setIslogged(true)
    }
})


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
loginUser: loginUser,
loginPass: loginPass,
user: user,
toggle: toggle,
isLogged: isLogged,
setLoginuser: setLoginuser,
setLoginpass: setLoginpass,
setToggle: setToggle,
login: login,
logout: logout,
setUserProv : setUserProv,
userProv: userProv
}

return(
<AppUserContext.Provider value={userContextValue}>
 
 {children}

</AppUserContext.Provider>

)



}



export default UserContext