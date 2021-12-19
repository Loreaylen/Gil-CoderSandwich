import React, {Fragment, useRef, useContext} from "react"
import { AppUserContext } from "../../Context/UserContext.jsx"
import {auth} from "../../../service/getFirestore"
import { useForm } from "react-hook-form"
import "../Auth/Auth.css"

const NewUser = ({setIslogged}) => {

    const {setReguser, setRegmail, setRegpass, registerUser, updateName} = useContext(AppUserContext)

const {register, formState: {errors}, handleSubmit, watch} = useForm()



const password = useRef({})
password.current = watch("pass", "");

const onSubmit = (data) => {
    console.log(data)
    setReguser(data.name)
    setRegmail(data.email)
    setRegpass(data.pass)
    registerUser(setIslogged)
    updateName()
    console.log(auth.currentUser)
}

    return(
    <Fragment>
        <form className="register" onSubmit={handleSubmit(onSubmit)}>

        <h2>Datos de usuario</h2>

        <label htmlFor="user">Nombre de usuario</label>
        <input type="text" id="name"  
              {...register("name",{
                  required: 
                {value: true, 
                message: "Campo obligatorio"},
                minLength: { value: 2, message: "Ingrese un nombre mas largo" } ,
                maxLength:{value:30, message:"Por favor ingrese un nombre más corto"},
                pattern: {
                   value:  /^[ñA-Za-z\s]+$/g
                   , message: "Por favor no ingrese números ni caracteres especiales"
                 }}
                
              )}/>

        <label htmlFor="email">Email:</label>
              <input type="email" id="email"   
                      {...register("email",{
                        required: {
                            value: true,
                            message: "Campo obligatorio"
                        },
                        pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email incorrecto, por favor ingrese uno válido"}
                    }
                    )} />
            <span className="errorSpan">{errors?.mail?.message}</span>

           
            <label htmlFor="pass">Contraseña:</label>
            <input type="password" id="pass" {...register("pass",{
                        required: {
                            value: true,
                            message: "Campo obligatorio"
                        },
                        pattern:{value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message: "La contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, al menos una minúscula  y al menos un dígito"}
                    })}/>
    <span className="errorSpan">{errors?.pass?.message}</span>


            <label htmlFor="pass2">Repetir contraseña:</label>
            <input type="password" id="pass2"
                    {...register("pass2",
                    {validate: value => value === password.current || "Las contraseñas no coinciden"}
                    )}
            />
            <span className="errorSpan">{errors?.pass2?.message}</span>

            <input type="submit" value="Registrarse" />


        </form>

    </Fragment>   
    )
}


export default NewUser