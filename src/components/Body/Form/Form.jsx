import React, {Fragment, useContext, useState} from "react"
import {useForm} from "react-hook-form"
import {AppContext} from "../../Context/CartContext"
import "../Form/Form.css"


const Form = ({generateOrder}) => {

const { setName, setMail, setTel} = useContext(AppContext)

const [error, setError] = useState(false)

const {register, formState: {errors}, handleSubmit, getValues} = useForm()
const onSubmit = (data) => {
   
    if(getValues("mail") === getValues("repMail")){
        setName(data.name)
        setMail(data.mail)
        setTel(data.tel)
        generateOrder()
        
        return setError(false)
        
    }
    return setError(true)
    
   
    
}

return(
<Fragment>

<form className="inputs" onSubmit={handleSubmit(onSubmit)}>

    <h2 className="datosTitulo">Datos para la compra:</h2>
           <label htmlFor="name">Nombre:</label>
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
              <span className="errorSpan">{errors?.name?.message}</span>

           <label htmlFor="mail">Mail:</label>
           <input type="email" id="mail"   
                      {...register("mail",{
                        required: {
                            value: true,
                            message: "Campo obligatorio"
                        },
                        pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email incorrecto, por favor ingrese uno válido"}
                    }
                    )} />
            <span className="errorSpan">{errors?.mail?.message}</span>
            

           <label htmlFor="repmail">Repetir mail:</label>
           <input type="email" id="repmail"   
                   {...register("repMail",{
                        required: {
                            value: true,
                            message: "Campo obligatorio"
                        }
                    })}/>

            {error ? <span className="errorSpan">El mail ingresado no es válido</span> : null}

           <label htmlFor="telefono">Teléfono:</label>
           <input type="number"  id="telefono"   
                 {...register("tel",{
                    required: {
                        value: true,
                        message: "Campo obligatorio"
                              }
                            },
                {valueAsNumber: true}
                )}/>
        <span className="errorSpan">{errors?.tel?.message}</span>

           <input className="terminarCompra" type="submit" value="Terminar mi compra"/>


       </form> 



</Fragment>


)



}



export default Form